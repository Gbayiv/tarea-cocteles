<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Datos Normalizados (Simulación de tabla de Base de Datos)
$tabla_cocteles = [
    ["id" => 1, "nombre" => "Pisco Sour", "categoria" => "Nacional", "base" => "Pisco"],
    ["id" => 2, "nombre" => "Terremoto", "categoria" => "Tradicional", "base" => "Pipeño"],
    ["id" => 3, "nombre" => "Vaina", "categoria" => "Clásico", "base" => "Oporto"],
    ["id" => 4, "nombre" => "Mojito", "categoria" => "Internacional", "base" => "Ron"]
];

echo json_encode($tabla_cocteles);
?>