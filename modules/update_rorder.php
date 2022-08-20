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
    $query = "UPDATE `room_orders` SET `status` = ?, `person` = ?, `more_person` = ?,`arrival_date` = ?, `departure_date` = ? WHERE `id` = ?";
    $stmt = $connect->prepare($query); 
    $json = json_decode(file_get_contents('php://input'), true);
    $ID = $json['ID'];
    $status = $json['status']; 
    $arrival_date = $json['arrival_date']; 
    $departure_date = $json['departure_date'];  
    $person = $json['person']; 
    $mperson = $json['mperson']; 
    if(empty($arrival_date) or empty($departure_date) or empty($status) or empty($person))
    {
        exit (json_encode('not_full'));  
    }
    $stmt->bind_param('iiissi', $status, $person, $mperson, $arrival_date, $departure_date, $ID);
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