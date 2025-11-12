let n=1
let n1=3

if(n>n1){
    console.log("n is greater")
}
else{
    console.log('n1 is greater')
}

// check if a string is equal to another string or not

let s='sunil'
let c='sunil'

if(s==c){
    console.log("true")
}
else{console.log('false')}

// check if a variable is a number or not

let i='suni'

if(typeof(i) === 'number'){
    console.log('this variable is number')
}
else{
    console.log('this variable is not a number')
}

// check if a boolean value is true or false

let v=false

if(v){
    console.log('it is true')
}
else{console.log('it is false')}

// check  if an array is empty or not

let a=[1,2,3,4]

if(a.length===0){
    console.log('array is empty')
}
else{
    console.log('array is not empty')
}

// declare an array with your favourite cricketer and access the first element in a variable and print it in console

let f=['dhoni','kohli','sachin']
let per=f[0]
console.log(per)

// you have an array types of dosa replace the 2nd (index) dosa with the the rava dosa

let d=['plain dosa','onion dosa','egg dosa','karam dosa']
d[2]='rava dosa'
console.log(d)

// array of cities and need to add one more city in an array by push

let city =['hyd','bangalore','tirupathi','chennai']

city.push('pune')
console.log(city)

// you have an array and you wanted to remove last element in an array by using pop

let cities =['hyd','bangalore','tirupathi','chennai']

cities.pop()
console.log(cities)
