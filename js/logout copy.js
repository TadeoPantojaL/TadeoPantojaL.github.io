const username = JSON.parse(localStorage.getItem('bologin_sucess')) || false
if (!username) {
    window.location.href = '/index.html'
    
}

const logout = document.querySelector('#logout_button')  

logout.addEventListener('click', () => {
    alert('Sesión cerrada')
    localStorage.removeItem('bologin_sucess')
    window.location.href = '/index.html'
})