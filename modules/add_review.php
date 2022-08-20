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
    $query = "INSERT INTO `reviews`(`name`, `text`, `source`, `raiting`)  VALUES (?,?,?,?)";
    $stmt = $connect->prepare($query);
    $json = json_decode(file_get_contents('php://input'), true);
    $name = $json['name']; 
    $text = $json['text']; 
    $source = $json['source']; 
    $raiting = $json['raiting'];  
    if(empty($raiting))
    {
        $raiting = 5;
    }
    if (empty($name) or empty($text) or empty($source)) //данные не полные
    {
        exit (json_encode('not_full')); 
    }  
    $stmt->bind_param('sssd', $name, $text, $source, $raiting);
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