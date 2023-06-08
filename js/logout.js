const username = JSON.parse(localStorage.getItem('login_sucess')) || false
if (!username) {
    window.location.href = '/index.html'
    
}

const logout = document.querySelector('#logout_button')  

logout.addEventListener('click', () => {
    alert('Sesión cerrada')
    localStorage.removeItem('login_sucess')
    window.location.href = '/index.html'
    
})