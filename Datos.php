<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$mis_cocteles = [
    ["id" => 1, "nombre" => "Pisco Sour", "tipo" => "Nacional"],
    ["id" => 2, "nombre" => "Terremoto", "tipo" => "Tradicional"],
    ["id" => 3, "nombre" => "Vaina", "tipo" => "Clásico"]
];

echo json_encode($mis_cocteles);
?>