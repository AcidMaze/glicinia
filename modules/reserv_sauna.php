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
    $query = "INSERT INTO `sauna_orders` (`name`, `phone`, `email`, `xammam_sauna`, `russian_sauna`, `person`, `time`, `date`, `hour`, `coment`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $connect->prepare($query);
    $json = json_decode(file_get_contents('php://input'), true);
    $name = $json['name']; 
    $phone = $json['phone']; 
    $email = $json['email']; 
    $xammam_sauna = $json['xammam_sauna'];  
    $russian_sauna = $json['russian_sauna']; 
    $person = $json['person']; 
    $hour = $json['hour'];
    $date = $json['date']; 
    $time = $json['time'];
    $coment = $json['coment'];
    if (empty($name) or empty($phone) or empty($date) or empty($person) or empty($time) or empty($hour) or (empty($xammam_sauna) and empty($russian_sauna))) //данные не полные
    {
        exit (json_encode('not_full')); 
    }  
    $stmt->bind_param('sssiiissss', $name, $phone, $email, $xammam_sauna, $russian_sauna, $person, $time, $date, $hour, $coment);
    $stmt->execute();
    if($stmt->affected_rows)
    {
        exit (json_encode('yes')); 
    }
    else 
    {
        echo (json_encode('error')); 
    }
    /* закрываем запрос */
    $stmt->close();
    /* закрываем подключение */
    $connect->close();
?>