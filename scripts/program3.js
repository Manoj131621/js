//  let a = [1, 2, 3, 4];
//   let b = ["a", "b", "c", "d"]
  
// Checking if the array lengths are same 
// and none of the array is empty
 function convertToObj(a, b){
  if(a.length != b.length || a.length == 0 || b.length == 0){
   return null;
  }
  let obj = {};
    
// Using the foreach method
  a.forEach((k, i) => {obj[k] = b[i]})
  return obj;
}
var myinputarr = [];
    var size = 5; // Array size
    for (var a = 0; a < size; a++) {
        myinputarr[a] = prompt('Enter array1 Element ' + (a + 1));
    }
var myinputarr2 = [];
    // var size = 5; // Array size
for (var b = 0; b < size; b++) {
    myinputarr2[b] = prompt('Enter array2 Element ' + (b + 1));
}
const result = convertToObj(myinputarr, myinputarr2);
document.write(JSON.stringify(result))
console.log(result,JSON.stringify(result))
// document.getElementById("demo").innerHTML=JSON.stringify(result)
// console.log(convertToObj(a, b))
// const string[] = prompt('Enter a string: ');
// const number[] = prompt('Enter a letter to check: ');
// //passing parameters and calling the function
// const result = convertToObj(string, number);
// // displaying the result
// document.write(result);

// var element=prompt("Enter no.of elements");
// var pers=[];
// var obj = {};
// for(let i=0;i<=element;i++){
//     pers[i]=prompt("enter name:");
// }
// for(let i=0;i<=element;i++){
//     obj[pers[i]] = element[i]
//     document.write(pers[i]+":"+element[i]+"<br>");
// }



// var obj = { 1: 'a', 2: 'b', 3: 'c' };  
// console.log(Object.getOwnPropertyNames(obj).sort()); // logs '0,1,2'  
// Logging property names and values using Array.forEach  
// Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {  
// console.log(val + ':' + obj[val]);   
// });  
// var keys = ["one", "two", "three"];
// var values = [1, 2, 3];
// var obj = {};

// // Loop to insert key & value in this object one by one
// for (var i = 0; i < keys.length; i++) {
//     obj[keys[i]] = values[i];
// } 
// document.getElementById("demo").innerHTML = obj();

// function countString(str, letter) {
//     let count = 0;
//     // looping through the items
//     for (let i = 0; i < str.length; i++) {
//         // check if the character is at that position
//         if (str.charAt(i) == letter) {
//             count += 1;
//         }
//     }
//     return count;
// }
// // take input from the user
// const string = prompt('Enter a string: ');
// const letterToCheck = prompt('Enter a letter to check: ');
// //passing parameters and calling the function
// const result = countString(string, letterToCheck);
// // displaying the result

// document.write(result);


// var a = ["a", "b", "c", ]
// var b = ["1", "2", "3",]

// const mergeArrToJSON = (a, b) => a
//     .map((item, i) => ({[item]: b[i]})) 
//     .reduce((json,val)=>Object.assign({},json,val))

//     document.getElementById("demo").innerHTML = (mergeArrToJSON(a, b))