// 1.Array creation and intialization

let myArray=new Array(5);
 for(let i=0;i<myArray.length;i++){
   myArray[i]=i*4;
 }
 console.log(myArray);


//  2.Add an Element

let myArray=new Array(5);
 for(let i=0;i<myArray.length;i++){
   myArray[i]=i*4;
 }
 myArray.push(20);
 console.log(myArray);


//  3.Remove an Element

let myArray=new Array(5);
 for(let i=0;i<myArray.length;i++){
   myArray[i]=i*4;
 }
 myArray.pop(16);
 console.log(myArray);


// 4.Searching

let myArray=new Array(10);
 for(let i=0;i<myArray.length;i++){
   myArray[i]=i*4;
 }
 console.log(myArray);
console.log(myArray.indexOf(16));

//5. includes

let myArray=new Array(10);
 for(let i=0;i<myArray.length;i++){
   myArray[i]=i*4;
 }
 console.log(myArray);
console.log(myArray.includes(16));

// 6 Filtering

const Array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
const filtered=Array.filter(function(n){
  return n%2==0;
});
console.log(filtered);


//7.Map
const Array=[1,2,3,4,5,6,7,8,9,10];
const mapped=Array.map(function(n){
  return n*2;
});
console.log(mapped);
  

//array sort

let arr=[98,65,45,34,78,65,67,45,32,89];
console.log(arr.sort());




