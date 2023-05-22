const logout = document.getElementById('logout');
const user = JSON.parse(localStorage.getItem("login_sucess")) || false;

if (user==false){
    window.location.href = "/index.html";
}else{  
    window.location.href = "/LPAge/index.html";
}




logout.addEventListener('click', () => {
    alert("Sesión cerrada");
    localStorage.removeItem("login_sucess");
    window.location.href = "/index.html";
  
})