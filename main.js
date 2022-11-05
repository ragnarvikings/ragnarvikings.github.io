
//     Phone header      //

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
