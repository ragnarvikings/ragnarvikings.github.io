
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
