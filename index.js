const  randomColor = function(){

    const hex = "0123456789abcdef";
    let color ='#'

for(let i=0; i< 6 ; i++){
  color += hex[Math.floor(Math.random() * 16)]
}
return color;
}


let next;
// console.log(randomColor())
let start = document.querySelector("#start")
let stop1 = document.querySelector("#stop")
let body = document.querySelector("body")

const startChengeColor = ()=>{
  next = setInterval(chengeBgColor , 1000);
}
const  stopchengeBgColor = function(){
  clearInterval(next)
  console.log("hii");
  }

function chengeBgColor(){   
document.body.style.backgroundColor = randomColor()
}

start.addEventListener('click',startChengeColor);

stop1.addEventListener('click', stopchengeBgColor);







// start.addEventListener('click',()=>{
//   setInterval(()=>{
//    next = body.style.backgroundColor = randomColor()
//   },1000)

// })
// stop1.addEventListener('click',stopchengeBgColor)

// let random = [Math.floor(Math.random() * 16)];
// console.log(random)