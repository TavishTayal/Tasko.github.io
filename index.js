let c = document.getElementsByClassName('btn')[0]

c.addEventListener('click', function f() {
    let a = document.getElementsByClassName('div')[0]
    let b = document.getElementsByClassName('input')[0]
    let li = document.createElement("li")
    li.classList.add('lis')
    a.appendChild(li)
    li.innerHTML = b.value
    
    // let btn = document.getElementsByClassName('input')[0]
    let de = document.createElement("button")
    de.classList.add('btna')
    a.appendChild(de)
    de.innerText = "Delete"

    de.addEventListener('click', function(){
        a.removeChild(li)
        a.removeChild(de)
    })
    li.addEventListener('click', function(){
        li.style.textDecoration = "line-through"
    })
})