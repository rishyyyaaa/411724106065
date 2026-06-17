function example(){
    console.log("Hi")
}

const example1 = ()=>{
    console.log("Hello")
}

console.log("A")
setTimeout(example,2000)
setTimeout(example1, 0)
console.log("C")

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("3")
    }, 2)
})

promise.then(res=>{console.log(res)})
.catch(err=>console.log(err))