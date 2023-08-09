<?php
include("conexion.php");
if (isset($_POST["savedata"])){

    if (strlen($_POST['ntr-type']) >= 1 && 
        strlen($_POST['contact-dn']) >= 1 && 
        strlen($_POST['contact-tel']) >= 1 && 
        strlen($_POST['contact-name']) >= 1 && 
        strlen($_POST['inconcert_id']) >= 1 && 
        strlen($_POST['mostLike']) >= 1  
        ) {
                if ($resultado) {
        	?> 
        	<h3 class="ok">¡Te has inscripto correctamente!</h3>
           <?php
        } else {
        	?> 
        	<h3 class="bad">¡Ups ha ocurrido un error!</h3>
           <?php
        }
    }   else {
        	?> 
        	<h3 class="bad">¡Por favor complete los campos!</h3>
           <?php
    }
}
?>