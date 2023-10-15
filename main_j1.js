let a = 4
let b = 4
let c = 3

switch(a) {
    case b:
        console.log("égal à b")
        break
    case c:
        console.log("égal à c")
        break
    default:
        console.log("égal à rien")
}


for (let i = 0; i < a; i++) {
    console.log("oklm")
}

let e = 1

while(e < 9) {
    e++
    if(e == 7) {
        continue
    }
    if(e == 8) {
        break
    }
    console.log(e)
}