
//     Page loader     //

let loader = document.getElementsByClassName("loader")[0]

window.addEventListener("load",() => {
    loader.style.display = "none"
    
})

//     Phone header      //

let bar = document.getElementById("bar")
let exit = document.getElementById("exit")
let hidden = document.getElementsByClassName("hidden")[0]

bar.addEventListener("click",() => {
    hidden.style.transform = "translateY(0)"
})

exit.addEventListener("click",() => {
    hidden.style.transform = "translateY(-60vh)"
})

//     Pop up      //

let pop = document.getElementsByClassName("pop")[0]
let ex = document.getElementById("exit2")

ex.addEventListener("click",() => {
    pop.style.display = "none"
    window.localStorage.setItem("new","key")
})
if(window.localStorage.length > 0){
    pop.style.display = "none"
}

//     header on scroll      //

let pheader = document.getElementsByClassName("Pheader")[0]
let pheader2 = document.getElementsByClassName("Pheader2")[0]
let frs = document.getElementsByClassName("frs")[0]
let fr2 = document.getElementsByClassName("frs")[1]

function scroll(){

    if(scrollY > 0){
        pheader.style.backgroundColor = "black"
        pheader2.style.backgroundColor = "black"
            pheader.setAttribute("class","Pheader bg1")
            pheader2.setAttribute("class","Pheader2 bg1")
            frs.style.color = "white"
            fr2.style.color = "white"
    }else{
        pheader.style.backgroundColor = "white"
        pheader2.style.backgroundColor = "white"
            pheader.setAttribute("class","Pheader bg2")
            pheader2.setAttribute("class","Pheader2 bg2")
            frs.style.color = "black"
            fr2.style.color = "black"
    }
}

scroll()

window.onscroll = function(){
    scroll()
}

//     btn      //
let btn = document.getElementsByClassName("btn")[0]


if(window.localStorage.length > 1){
    btn.setAttribute("disabled","disabled")
}

btn.addEventListener("click",() => {
    if(window.localStorage.length > 1){
        btn.setAttribute("disabled","disabled")
    }else{
        window.localStorage.setItem("newq","qe")
    }
})

