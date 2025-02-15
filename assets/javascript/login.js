const loginForm = document.getElementById('loginForm');
const loginEmail = document.querySelector('.Email');
const loginPassword = document.querySelector('.Password');
loginForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const email = loginEmail.value;
    const password = loginPassword.value;
    let users = JSON.parse(localStorage.getItem('users'))||[];
    const user = users.find(user=>user.username === email && user.password === password);
    if(user){
        alert('login successful!')
    }else{
        alert('Invalid email or password. try again.')
    }
})