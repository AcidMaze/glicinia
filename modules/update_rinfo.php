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
    $query = "UPDATE `rooms` SET `title`= ?,`start_price`=?,`max_person`=?,`max_aperson`=?,`area`=?,`ammount`=?,`description`=? WHERE `id` = ?";
    $stmt = $connect->prepare($query); 
    $json = json_decode(file_get_contents('php://input'), true);
    $idRoom = $json['idRoom'];
    $title = $json['title']; 
    $start_price = $json['start_price']; 
    $max_person = $json['max_person'];  
    $max_aperson = $json['max_aperson'];  
    $area = $json['area']; 
    $ammount = $json['ammount']; 
    $description = $json['description']; 
    if (empty($title)) //данные не полные
    {
        exit (json_encode('not_full')); 
    }  
    $stmt->bind_param('siiiiisi', $title, $start_price, $max_person, $max_aperson, $area, $ammount, $description, $idRoom);
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