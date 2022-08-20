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
    $query = "UPDATE `sauna_orders` SET `status` = ?, `date` = ?, `hour` = ?, `time` = ?, `person` = ?, `coment` = ? WHERE `id` = ?";
    $stmt = $connect->prepare($query); 
    $json = json_decode(file_get_contents('php://input'), true);
    $ID = $json['ID'];
    $status = $json['status'];
    $date = $json['date'];
    $hour = $json['hour'];
    $time = $json['time'];
    $person = $json['person'];
    $coment = $json['coment'];
    if(empty($date) or empty($status) or empty($time) or empty($time) or empty($person))
    {
        exit (json_encode('not_full'));  
    }
    $stmt->bind_param('isssisi',$status, $date, $hour, $time, $person, $coment, $ID);
    $stmt->execute();
    if($stmt->affected_rows)
    {
        exit (json_encode('yes')); 
    }
    /* закрываем запрос */
    $stmt->close();
    /* закрываем подключение */
    $connect->close();
?>