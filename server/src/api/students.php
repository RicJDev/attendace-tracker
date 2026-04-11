<?php
header("Content-Type: application/json");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "attending_tracker";

try {
  $conn = new mysqli($servername, $username, $password, $dbname);
} catch (mysqli_sql_exception $e) {
  http_response_code(500);
  echo json_encode([
    "message" => "Internal Server Error: Could not connect to database."
  ]);
  exit;
}

$handler = match ($_SERVER["REQUEST_METHOD"]) {
  "GET" => function () use ($conn) {
    $sql = "SELECT * FROM students";
    $result = $conn->query($sql);

    $data = [];
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $data[] = [
          "listIndex" => (int) $row["listIndex"],
          "id" => $row["id"],
          "name" => $row["name"],
          "lastName" => $row["lastName"]
        ];
      }
    }

    echo json_encode($data);
  },

  "POST" => function () use ($conn) {
    $last_index = (int)(
      $conn->query("SELECT MAX(listIndex) AS result FROM students")
        ->fetch_assoc()["result"]
    );

    $json_data = file_get_contents("php://input");
    $request = json_decode($json_data, true);

    $stmt = $conn->prepare("INSERT INTO students (id, name, lastName, listIndex) VALUES (?, ?, ?, ?)");
    $stmt->bind_param(
      "sssi",
      $id,
      $name,
      $last_name,
      $list_index
    );

    $id = $request["id"];
    $name = $request["name"];
    $last_name = $request["lastName"];
    $list_index = $last_index + 1;

    $stmt->execute();

    $data = [
      "message" => "Alumno agregado con exito, flaco!",
    ];

    echo json_encode($data);
  },

  default => function () {
    http_response_code(405);
    echo json_encode([
      "message" => "Method Not Allowed"
    ]);
  }
};

$handler();
$conn->close();
