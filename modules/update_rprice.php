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
    $query = "UPDATE `rooms_price` SET `bb_low` = ?, `bb_summer` = ?, `bb_high` = ?, `bb_hot` = ?, `fb_low` = ?, `fb_summer` = ?, `fb_high` = ?, `fb_hot` = ?, `m_bb_low` = ?, `m_bb_summer` = ?, `m_bb_high` = ?, `m_bb_hot` = ?, `m_fb_low` = ?, `m_fb_summer`= ?, `m_fb_high` = ?, `m_fb_hot` = ? WHERE `idRoom` = ?";
    $stmt = $connect->prepare($query); 
    $json = json_decode(file_get_contents('php://input'), true);

    $idRoom = $json['idRoom']; 

    $bb_low = $json['bb_low']; 
    $bb_summer = $json['bb_summer']; 
    $bb_high = $json['bb_high']; 
    $bb_hot = $json['bb_hot']; 

    $fb_low = $json['fb_low']; 
    $fb_summer = $json['fb_summer']; 
    $fb_high = $json['fb_high']; 
    $fb_hot = $json['fb_hot']; 

    $m_bb_low = $json['m_bb_low']; 
    $m_bb_summer = $json['m_bb_summer']; 
    $m_bb_high = $json['m_bb_high']; 
    $m_bb_hot = $json['m_bb_hot']; 

    $m_fb_low = $json['m_fb_low']; 
    $m_fb_summer = $json['m_fb_summer']; 
    $m_fb_high = $json['m_fb_high']; 
    $m_fb_hot = $json['m_fb_hot']; 

    if (empty($bb_low) or empty($bb_summer) or empty($bb_high) or empty($bb_hot) or empty($fb_low) or empty($fb_summer) or empty($fb_high) or empty($fb_hot) or empty($m_bb_low) or empty($m_bb_summer) or empty($m_bb_high) or empty($m_bb_hot) or empty($m_fb_low) or empty($m_fb_summer) or empty($m_fb_high) or empty($m_fb_hot)) //данные не полные
    {
        exit (json_encode('not_full')); 
    }  
    $stmt->bind_param('ssssssssssssssssi', $bb_low, $bb_summer, $bb_high, $bb_hot, $fb_low, $fb_summer, $fb_high, $fb_hot, $m_bb_low, $m_bb_summer, $m_bb_high, $m_bb_hot, $m_fb_low, $m_fb_summer, $m_fb_high, $m_fb_hot, $idRoom);
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