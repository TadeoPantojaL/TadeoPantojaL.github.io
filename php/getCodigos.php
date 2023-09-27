<?php
require 'database.php';
$con = new Database();
$pdo = $con->conectar();

$campo = $_POST['campo'];
//SELECT * FROM bzngdotbkt2uyzmnaqk2.dn;
$sql = "SELECT bzngdotbkt2uyzmnaqk2 FROM dn WHERE bzngdotbkt2uyzmnaqk2 LIKE ? ORDER BY bzngdotbkt2uyzmnaqk2 ASC LIMIT 5";
//SELECT * FROM `dn` WHERE `DNS` LIKE '%221130%' ORDER BY `DNS` ASC

$query = $pdo->prepare($sql);
$query->execute([$campo.'%']);

$html = "";

// while($row = $query->fetch(PDO::FETCH_ASSOC)){ 
//     $html .= "<li onclick=\"mostrar('".$row['DNS']."')\">".$row['DNS']."</li>";
// }

//  if(($row = $query->fetch(PDO::FETCH_ASSOC))!=NULL){
//     while($row = $query->fetch(PDO::FETCH_ASSOC)){ 
//         $html .= "<li onclick=\"mostrar('".$row['DNS']."')\">".$row['DNS']."</li>";
//     }
//  }else{
//      $html .= "<li>No hay datos</li>";
//  }

if ($query->rowCount() > 0) {
    // Inicializar la variable $html para almacenar la lista
    $html = "<ul>";

    while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
        $html .= "<li onclick=\"mostrar('" . $row['bzngdotbkt2uyzmnaqk2'] . "')\">" . $row['bzngdotbkt2uyzmnaqk2'] . "</li>";
    }

    $html .= "</ul>";
} else {
    // Mensaje de "No hay datos" si no se encontraron coincidencias
    $html = "No hay datos";
}


echo json_encode($html, JSON_UNESCAPED_UNICODE);
    
