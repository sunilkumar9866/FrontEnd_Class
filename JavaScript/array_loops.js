// you have an array popular tree names and make a soft copy of that array

let t=['neemtree','tulasi','mango tree','banana tree']
let softcopy=t;

t.pop()
console.log(softcopy)
softcopy.pop()
console.log(t)

// you have an array popular tree names and make a hard copy of that array

let f=['mango','apple','guva','banana']
let b=[...f]

console.log(b)
f.pop()
console.log(f)

// merge two arrays of popular and favourite cities

let fc=['hyd','bangalore','pune']
let p=['ong','chimakurthi']

console.log(fc.concat(p))

// find the lenght of a array and store it in a variable

let l=['mango','apple','guva','banana']

let s=l.length
console.log(s)

// check if london is there in an array and store it in a variable

let cities=['hyd','bang','london','usa']
let list=cities.includes('London')
console.log(list)

// Loops

let sum=0

let i=0

while(i<=10){
    sum =sum+i
    i++
}
console.log('sum value is :- '+sum)


// write a while loop count down from 5 to 1

let count=[]

let j=5

while(j>0){
    count.push(j)
    // console.log(count)
    j--
}

console.log(count)

// do while loop

let total=0
let k=1

do{
    total+=k
    k++
}while(k<=5)
    console.log(total)


// for loop

for(let i=1; i<=10; i++){
    console.log(i)
}

// write 2 table using for loop

let table=2

for(let i=1;i<=10;i++){
    console.log(table+ ' x ' +i+' = '+table*i )
}
console.log('-------------------------------------------')

// ther is an array of numbers multiply them by 2 and give the result in another array

let a=[2,5,4,6,9]
let a1=[]

for(let i=0;i<a.length;i++){
    a1.push(a[i]*2)
}
console.log(a1)

// display the items from one array to another array by using loops (same as above problem)

let fl=['lilly','marrygold','tulasi','rose','hibiscus']
let sf=[]

for(let i=0;i<fl.length;i++){
    if(fl[i]==='rose'){
        break
    }
    else{sf.push(fl[i])}
}
console.log(sf)