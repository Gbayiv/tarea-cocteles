<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Datos normalizados (Simulando una tabla de base de datos)
$cocteles_db = [
    ["id" => 1, "nombre" => "Pisco Sour", "categoria" => "Nacional", "alcohol" => "Pisco"],
    ["id" => 2, "nombre" => "Terremoto", "categoria" => "Tradicional", "alcohol" => "Pipeño"],
    ["id" => 3, "nombre" => "Vaina", "categoria" => "Clásico", "alcohol" => "Oporto"]
];

echo json_encode($cocteles_db);
?>