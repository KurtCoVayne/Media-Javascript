
const e1 = () => {
    let h = document.querySelector('h1')
    h.innerText = "Esta página no es compatible con la"+
    "versión actual de tu navegador. Por favor actualízalo a la versión más reciente."
}
const e2 = () => {
    let p = document.getElementById('errores')
    try {
        const hola = "por que estoy haciendo esto?"
        hola = "no se la verdad."
    } catch (error) {
        console.error(error);
        p.innerText = error;
    }
}
const e3 = () => {
    let p = document.querySelector('p')
    p.innerText += " Mundo"
}
const e4 = () => {
    let h = document.querySelector('h1')
    let ul = document.querySelector('ul')
    let li1 = document.getElementById('li1')
    let li2 = document.getElementById('li2')
    
    li1.innerText = "Nixon"
    li2.innerText = "Angelik"
    
    h.innerText = `El nombre de la Geek girl es ${li1.innerText}` 
}
const e5 = () => {
    let p = document.querySelector('p')
    p.innerText = p.innerText.replace("Geek2020","*")
}
const e6 = () => {
    let d  = document.getElementById('container')

    let h = d.appendChild(document.createElement('h1'))
    let hTexto = document.createTextNode('Lorem ipsum')
    h.appendChild(hTexto)

    let im = d.appendChild(document.createElement('img'))
    im.src = "http://via.placeholder.com/350x150"

    let p = d.appendChild(document.createElement('p'))
    let pTexto = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit')
    p.appendChild(pTexto)

}
const e7 = () => {
    let ul = document.querySelector('ul')
    for(let i = 1; i < 3; ++i ){
        let li = document.createElement('li')
        let liText = document.createTextNode(`${i}`)
        li.appendChild(liText)
        ul.appendChild(li)
    }
}
const e8 = () => {
    let btn2 = document.querySelectorAll('button')[1]
    btn2.style.opacity = "0.5"
}






