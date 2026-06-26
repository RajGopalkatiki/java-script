

//Nested if-else statement


// var a=10
// var b=15
// var c=50
// if (a>b){
//     if (a>c){
//         console.log("a is bigger")
//     }
//    else {
//     console.log("c is bigger")
//    }}
//    else{
//     if (b>c){
//     console.log("b is bigger")
//    }
//    else{
//     console.log("c is bigger")
//    }
// }


//Leep Year

// for (let i=2000;i<=2026;i++){
//     if((i%4==0&&i%100!=0)||(i%400==0)){
//         console.log(i)
//     }
// }




//Array Methods


//push


// var arr=[10,20,30,40,50]
// arr.push(60)
// console.log(arr)

//pop

// arr.pop()
// console.log(arr)

//Shift


// arr.shift()
// console.log(arr)

//Unshift


// arr.unshift(5)
// console.log(arr)

//Splice


// arr.splice(1,2)
// console.log(arr)

// arr.splice(1,0,20,30)
// console.log(arr)


//Slice


// var sub=arr.slice(1,3)
// console.log(arr)


//IndexOf


// var pos=arr.indexOf(40)
// console.log(pos)


//LastIndexOf


// var pos=arr.lastIndexOf(30)
// console.log(pos)

//Sort


// arr.sort((a,b)=>a-b);
// console.log(arr)

// arr.sort((a,b)=>b-a);
// console.log(arr)


//Reverse


// arr.reverse()
// console.log(arr)


//Join




// var array1=["Ram","Sita","Krishna","Radha"]
// console.log(array1.join("-"))


//Concat



// var arr=[10,20,30,40,50]
// var array1=["Ram","Sita","Krishna","Radha"]
// var array2=arr.concat(array1)
// console.log(array2)



//Foreach


// arr.forEach((num)=>{
//     console.log(num)
// })




//Map


// var square=arr.map((num)=>num*num)
// console.log(square)



//Reduce



// var sum=arr.reduce((total,num)=>total+num,0)
// console.group(sum)


//Find


// var arr=[10,30,55,44,22]
// var a=arr.find(num=>num>20)
// console.log(a)


//FindIndex



// var arr=[10,22,55,44,22]
// console.log(arr.findIndex(num=>num==22))


//Every



// var arr=[10,22,44,56]
// console.log(arr.every(num=>num%2==0))


//Filter


// var arr=[10,22,44,55]
// var even=arr.filter(num=>num%2==0)
// console.log(even)


