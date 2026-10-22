<?php
// Recibe el formulario de propietarios y lo envía por email.
// Se ejecuta en el hosting de IONOS (PHP). Sin JavaScript: redirige a la página
// de gracias o vuelve al formulario con ?error=1.

const TO = 'admin@mallorcahouserent.com';
const FROM = 'web@mhrhotels.com';
const LANGS = ['es', 'en', 'de'];

$lang = in_array($_POST['lang'] ?? '', LANGS, true) ? $_POST['lang'] : 'es';
$back = "/$lang/propietarios/";

function fail(string $back): void {
    header('Location: ' . $back . '?error=1#formulario', true, 303);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ' . $back, true, 303);
    exit;
}

// Campo trampa para bots: si viene relleno, fingimos éxito y no enviamos nada.
if (!empty($_POST['website'])) {
    header("Location: /$lang/propietarios/gracias/", true, 303);
    exit;
}

// Una sola línea, sin saltos (evita inyección de cabeceras) y con longitud limitada.
function field(string $key, int $max = 200): string {
    $value = trim((string)($_POST[$key] ?? ''));
    $value = preg_replace('/[\r\n\t]+/', ' ', $value);
    return mb_substr($value, 0, $max);
}

$name = field('name');
$email = field('email');
$phone = field('phone', 50);
$type = field('type', 100);
$location = field('location', 100);
$units = field('units', 20);
$status = field('status', 100);
$interest = implode(', ', array_map(
    fn($v) => mb_substr(preg_replace('/[\r\n\t]+/', ' ', (string)$v), 0, 100),
    array_slice((array)($_POST['interest'] ?? []), 0, 5)
));
$message = mb_substr(trim((string)($_POST['message'] ?? '')), 0, 5000);

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($_POST['consent'])) {
    fail($back);
}

$body = implode("\n", [
    'Nueva solicitud de propietario desde mhrhotels.com',
    '',
    "Nombre: $name",
    "Email: $email",
    "Teléfono: $phone",
    "Tipo de establecimiento: $type",
    "Municipio: $location",
    "Habitaciones / unidades: $units",
    "Situación actual: $status",
    "Le interesa: $interest",
    "Idioma: $lang",
    '',
    'Mensaje:',
    $message,
]);

$subject = '=?UTF-8?B?' . base64_encode("Nuevo propietario: $name" . ($location !== '' ? " ($location)" : '')) . '?=';
$headers = implode("\r\n", [
    'From: MHR Hotels web <' . FROM . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

if (!mail(TO, $subject, $body, $headers, '-f' . FROM)) {
    fail($back);
}

header("Location: /$lang/propietarios/gracias/", true, 303);
