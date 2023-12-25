const form = document.querySelector("#Form")

form.addEventListener("submit", manejarEnvio)

async function manejarEnvio (event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
         headers:{
            "accept": "application/json"
         }

    })
    if(response){
        this.reset()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Mensaje Enviado con Exito",
            showConfirmButton: false,
            timer: 1500
        })
    }
}