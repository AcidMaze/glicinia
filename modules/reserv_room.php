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
    //----------------------------------
    $query = "INSERT INTO `room_orders` (`name`, `phone`, `email`, `type`, `person`, `more_person`, `arrival_date`, `departure_date`, `coment`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $connect->prepare($query);
    $json = json_decode(file_get_contents('php://input'), true);
    $name = $json['name']; 
    $phone = $json['phone']; 
    $email = $json['email']; 
    $person = $json['person']; 
    $mperson = $json['mperson'];  
    $arrival_date = $json['arrival_date']; 
    $departure_date = $json['departure_date']; 
    $coment = $json['coment'];
    $room_type = $json['room_type'];
    if (empty($name) or empty($phone) or empty($arrival_date) or empty($departure_date) or empty($room_type) or empty($person)) //данные не полные
    {
        exit (json_encode('not_full')); 
    }  
    $stmt->bind_param('sssiiisss', $name, $phone, $email, $room_type, $person, $mperson, $arrival_date, $departure_date, $coment);
    $stmt->execute();
    if($stmt->affected_rows)
    {
        exit (json_encode('yes')); 
    }
    else{
        exit (json_encode('error'));
    }
    /* закрываем запрос */
    $stmt->close();
    /* закрываем подключение */
    $connect->close();
?>