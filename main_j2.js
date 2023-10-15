let a = "Jean"
let b = "Paul"
let result = checkName(a, b)

function checkName(name1, name2) {
    if (name1 == name2) {
        return "vrai"
    } else {
        return "faux"
    }
}
console.log(result)


let names = [];

names.push ("Vincent","Paul","Arthur")

names.forEach(function (names) {
    console.log(names +(" va à la pêche"))
})


let student = {

    name: "Batman",
    favoriteFood: "Pizza",
    city: "Gotham",
}

let values = Object.values(student)
let nombreDeLettres = 0

values.forEach((value) => {
    nombreDeLettres += value.length
})

if (nombreDeLettres % 2 === 1) {
    console.log("impair")
} else {
    console.log("pair")
}

