<?php
    $conexion = mysqli_connect("localhost", "root", "", "bd_forms");
    if(!$conexion){
        echo 'Error al conectar a la base de datos';
    }
?>