<?php
$host = "db";
$username = $_ENV["MYSQL_USER"];
$password = $_ENV["MYSQL_PASSWORD"];
$dbname = $_ENV["MYSQL_DATABASE"];

try {
  $conn = new mysqli($host, $username, $password, $dbname);
} catch (mysqli_sql_exception $e) {
  echo $e;
  http_response_code(500);
  exit;
}
