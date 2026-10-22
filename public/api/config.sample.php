<?php
// Configuración para enviar el formulario a través del correo de IONOS.
//
// 1. Copia este fichero con el nombre  mhr-form-config.php
// 2. Súbelo a la carpeta que CONTIENE la carpeta de la web (un nivel por encima de
//    la carpeta del subdominio/dominio), para que no se borre al subir versiones nuevas.
//    (También funciona como api/config.php, pero se borrará al reemplazar la web.)
// 3. Pon la contraseña del buzón admin@mhrhotels.com.
// 4. Comprueba que funciona abriendo /api/propietarios.php?check=1

return [
    'host' => 'smtp.ionos.es',
    'port' => 587,
    'user' => 'admin@mhrhotels.com',
    'password' => 'CONTRASEÑA_DEL_BUZÓN',
];
