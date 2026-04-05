<?php
header("Content-Type: application/json");

$handler = match ($_SERVER["REQUEST_METHOD"]) {
  // TODO: agregar metodos PUT y GET

  default => function () {
    http_response_code(405);
    echo json_encode([
      "message" => "Method Not Allowed"
    ]);
  }
};

$handler();