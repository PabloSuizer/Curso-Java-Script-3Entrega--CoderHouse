const BBDD=[
    {
        usuario:"Pablo",
        contraseña: "1234"
    },
    {
        usuario:"Mari",
        contraseña: "3422"
    },
    {
        usuario:"Juan",
        contraseña: "2323"
    }
]


const isUser = JSON.parse(localStorage.getItem("user"))
if(isUser){
    const contenedor = document.querySelector("#contenedor")
    contenedor.innerHTML = `<span>Bienvenido ${isUser.usuario}</span>` 
}



const imputUsuario = document.querySelector("#usuario");
const imputContraseña = document.querySelector("#contrasena");
const botonIniciar = document.querySelector("#button-inicial");



const usuarioALoguear ={
    usuario: "",
    contraseña:"",
} 




imputUsuario.addEventListener("input", (e)=>{ //Usuario
    usuarioALoguear.usuario = e.target.value
})

imputContraseña.addEventListener("input", (e)=>{ //Contraseña
    usuarioALoguear.contraseña = e.target.value
})



botonIniciar.addEventListener("click",(e)=>{ //Botton iniciar sesion
    const usuarioEncontrado = BBDD.find((el)=>{
        return usuarioALoguear.usuario === el.usuario && usuarioALoguear.contraseña === el.contraseña
    })
    if(usuarioEncontrado){
        const stringify = JSON.stringify({usuario: usuarioEncontrado.usuario}) // aca almaceno en el localstorage
        localStorage.setItem("user", stringify)

        window.location.href = "./home.html"
    }
})
