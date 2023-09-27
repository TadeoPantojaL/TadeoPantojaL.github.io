document.getElementById("campo").addEventListener("keyup", getCodigos)

function getCodigos() {
    let inputID = document.getElementById("campo").value;
    let lista = document.getElementById("lista");

    if (inputID.length > 0) {
       
    let url= "php/getCodigos.php"; 
        let formData = new FormData();
    formData.append("campo", inputID);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "cors"
    }).then(response => response.json())
    .then(data => {
        lista.style.display = "block";
        lista.innerHTML = data
    })
    .catch(err => console.log(err))
}else{
    lista.style.display = "none"
}
}

function mostrar (id){
    alert("Dn "+id+" Está dado de baja")
}