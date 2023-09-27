<?php

class Database
{
    private $hostname = "bzngdotbkt2uyzmnaqk2-mysql.services.clever-cloud.com";
    private $database = "bzngdotbkt2uyzmnaqk2";
    private $username = "uqu46ecurcdpjvyd";
    private $password = "1VJrpNDHfxLjCalCvUWd";
    private $charset = "utf8";

    function conectar()
    {
        try {
            $conexion = "mysql:host=" . $this->hostname . ";dbname=" . $this->database . ";charset=" . $this->charset;
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];

            $pdo = new PDO($conexion, $this->username, $this->password, $options);

            return $pdo;
        } catch (PDOException $e) {
            echo 'Error conexion: ' . $e->getMessage();
            exit;
        }
    }
}