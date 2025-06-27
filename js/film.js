"use strict"
"use strict"

function CurrentTime() {
    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    
    hh = hh < 10 ? '0' + hh : hh
    mm = mm < 10 ? '0' + mm : mm
    ss = ss < 10 ? '0' + ss : ss

    
    let time = hh + ":" + mm + ":" + ss

    
    document.getElementById('reloj').innerHTML = time
}

setInterval(CurrentTime, 1000)

const cursor = document.querySelector(`.cursor`)
console.log(cursor)

window.addEventListener(`mousemove` , ( e )=>{
    cursor.style.translate = `${e.clientX}px ${e.clientY}px`
})
window.addEventListener(`mousedown` , ()=>{
    cursor.classList.add(`color--scale`)
} )
window.addEventListener(`mouseup` , ()=>{
    cursor.classList.remove(`color--scale`)
})

const imgAnimadas = document.querySelectorAll(`.wrapper-img-7 , .wrapper-img-7.noVisible`)
console.log(imgAnimadas)

let callback = ( cambios ) => {
    cambios.forEach( ( entry )=>{
        
        let { isIntersecting , target } = entry

        if( entry.isIntersecting ){
            entry.target.classList.remove(`noVisible`)
        }
    })
}
let options  = {
    threshold : [.5]
}

let observer = new IntersectionObserver( callback , options )

imgAnimadas.forEach(( eachAnimacion )=>{
    observer.observe(eachAnimacion)
})