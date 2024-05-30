async function traerDatos(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const personas =await res.json()
    const contenedor = $('contenedor')
    personas.forEach(persona => {
        const item = document.createElement('div')
        item.id = persona.id
        item.classList.add('persona')
        const boton = document.createElement('button')
        boton.innerText = "Ver tareas"
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
            })
        })
        item.innerHTML = ` <p class="id">id:${persona.id}</p>
        <p class="nombre">nombre:${persona.name}</p>
        <p class="usuario">usuario:${persona.username}</p>
        <p class="email">email:${persona.email}</p>
        <p class="sitio">sitio:${persona.website}</p>
        `
        item.appendChild(boton)
        contenedor.appendChild(item)
    });
    }
    traerDatos()
    
    
    function $(elemento){
        return document.getElementById(elemento)
    }