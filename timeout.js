function doSomething(){
    console.log(3333);
}
console.log(2222);
// setTimeout(doSomething);
// setTimeout(function(){
//     console.log("Lazy");
// },1000)

setTimeout(()=> {
    console.log("See you leter")
}, 1000)

setInterval(()=> {
    console.log("Let's do it")
}, 2000)
console.log(2222);
console.log(2222);