const getNewObj = () => {
    //  var country = new array().value;
    var myinputarr = [];
    var size = 5; // Array size
    for (var a = 0; a < size; a++) {
        myinputarr[a] = prompt('Enter array Element ' + (a + 1));
    }
    const result = {};
    for (let i = 0; i < myinputarr.length; i++) {
        const item = myinputarr[i];
        const firstLetter = item[0]
        if (!result[firstLetter]) {
            result[firstLetter] = [];
        }

        if (result[firstLetter].indexOf(item) < 0) {
            result[firstLetter].push(item);
        }

    }
    // document.write(JSON.parse(result));
    // console.log(result);
    document.write(JSON.stringify(result))
    //  document.getElementById("demo").innerHTML = result;
// return result;
}
//  const inputArr = ['Berlin', 'Paris', 'Prague'];
// document.getElementById("demo").innerHTML = getNewObj()
// var input = new Array ();
// for (var i = 0; i < input.length; i++) {
//     var a = input[i];
//     k = k + "array[" + i + "].value= "
//                        + a.value + " ";
// // }
// document.getElementById("demo").innerHTML = getNewObj(input);
// var myinputarr = [];
//  var size = 5; // Array size
// for(var a=0; a<size; a++)
// {
//     myinputarr[a] = prompt('Enter array Element ' + (a+1));
// }
// for(let i = 0; i < myinputarr.length ; i++) {
//     const item = myinputarr[i];
//     const firstLetter = item[0]
//     if(!result[firstLetter]) {
//         result[firstLetter] = [];
//     }

//     if(result[firstLetter].indexOf(item) < 0) {
//         result[firstLetter].push(item);
//     }
// }
// document.write(myinputarr)