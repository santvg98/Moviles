<?php

// autoload_psr4.php @generated by Composer

$vendorDir = dirname(__DIR__);
$baseDir = dirname($vendorDir);

return array(
    'Slim\\' => array($vendorDir . '/slim/slim/Slim'),
    'Psr\\Log\\' => array($vendorDir . '/psr/log/src'),
    'Psr\\Http\\Server\\' => array($vendorDir . '/psr/http-server-handler/src', $vendorDir . '/psr/http-server-middleware/src'),
    'Psr\\Http\\Message\\' => array($vendorDir . '/psr/http-factory/src', $vendorDir . '/psr/http-message/src'),
    'Psr\\Container\\' => array($vendorDir . '/psr/container/src'),
    'HttpSoft\\ServerRequest\\' => array($vendorDir . '/httpsoft/http-server-request/src'),
    'HttpSoft\\Message\\' => array($vendorDir . '/httpsoft/http-message/src'),
    'FastRoute\\' => array($vendorDir . '/nikic/fast-route/src'),
);
