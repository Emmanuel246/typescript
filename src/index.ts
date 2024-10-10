// ---------------
// arrays///-----------

let names: string[] = ['Mario', "Luigi", "Peaach"]
let ages: number[] = [25, 27, 34]

names.push('neoa')
ages.push(84)


// ..........................
// type inference with arrays 
let fruits = ["apples", "pears", "orange"]
fruits.push('peaches')

const f = fruits[3]


let things = [, true, "String"]

const t = things[0]
// ................
// ......................
// object literals
// ................
let user: {firstName: string, age: number, id: number} = {
    firstName: "Mario",
    age: 30,
    id: 1
}

user.firstName = "Peach"
user.id = 2


// ..........................
// type inference with object literals
// ................