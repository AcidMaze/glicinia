<?php

    $user = 'a0571172_glicinia';
    $password = 'en9WSG7z';
    $db = 'a0571172_glicinia';
    $host = 'localhost';
    $connect = new mysqli($host, $user, $password, $db);
    if (mysqli_connect_errno()) {
        printf("Не удалось подключиться: %s\n", mysqli_connect_error());
        exit();
    }
?>
<?php
    header('Access-Control-Allow-Origin: *'); // Изменить при установке на сервер
    header('Access-Control-Allow-Headers: Content-Type, Accept');
    header('Access-Control-Allow-Methods: GET, POST, DELETE');
    if ($result = $connect->query("SELECT * FROM `room_orders`")) {
        while ($row = $result->fetch_all(MYSQLI_ASSOC)) {

            echo json_encode($row,JSON_UNESCAPED_UNICODE);
        }
        $result -> free_result();
    }
    $connect->close();
?>

