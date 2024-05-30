async function ExtraerDatos(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const personas =await res.json()
    const contenedor = $('contenedor')
    personas.forEach(persona => {
        const item = document.createElement('div')
        item.id = persona.id
        item.classList.add('persona')
        const boton = document.createElement('button')
        const boton2 = document.createElement('button')
        boton.innerText = "Ver tareas"
        boton2.innerText = "Ocultar tareas"
        boton2.disabled = true
        boton.addEventListener("click", async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${persona.id}`);
            const tareas =await res.json()
            tareas.forEach(tareaElemento =>{
                const tarea = document.createElement('p')
                tarea.innerText = `Tarea ${tareaElemento.id} : ` + tareaElemento.title
                if(tareaElemento.completed){
                    tarea.style.color = "green"
                }
                else{
                    tarea.style.color = 'red'
                }
                item.appendChild(tarea)
                boton.disabled = true
                boton2.disabled = false
                boton2.addEventListener("click", async () => {
                    tarea.innerText = ""
                boton2.disabled = true
                boton.disabled = false
                })
            })
        })
        item.innerHTML = ` <p class="id">Id :${persona.id}</p>
        <p class="nombre">Nombre: ${persona.name}</p>
        <p class="usuario">Usuario: ${persona.username}</p>
        <p class="email">Email: ${persona.email}</p>
        <p class="sitio">Sitio: ${persona.website}</p>
        `
        item.appendChild(boton)
        item.appendChild(boton2)
        contenedor.appendChild(item)
    });
    }
    ExtraerDatos()
    
    
    function $(elemento){
        return document.getElementById(elemento)
    }