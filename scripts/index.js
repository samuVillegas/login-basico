const formLogin = document.getElementById('form-login')
const formRegistation = document.getElementById('form-registration')

if (formLogin !== null) {
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        login(getData())
    })
}

if (formRegistation !== null) {
    formRegistation.addEventListener('submit', (e) => {
        e.preventDefault();
        saveLocal(getData());
    })
}


// condicion?hagasicumple:sinocumple
const saveLocal = (user) => {
    let data = localStorage.getItem('users') !== null ? JSON.parse(localStorage.getItem('users')) : []
    data.push(user)
    localStorage.setItem('users', JSON.stringify(data));
}

const login = ({email,password}) => {
    let data = localStorage.getItem('users') !== null ? JSON.parse(localStorage.getItem('users')) : [];
    if(data.length > 0){
        //Buscar y comparar usuarios y contraseñas
        const [user] = data.filter(user => user.email === email && user.password === password)
        if(user) alert('Hay usuarios')
        else alert('El usuario no existe')
    }else{
        alert('No hay usuarios')
    }
}

const getData = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    return { email, password }
}
