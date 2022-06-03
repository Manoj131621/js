const getNewObj = (arr) => {
    const result = {};
   for(let i = 0; i < arr.length ; i++) {
       const item = arr[i];
       const firstLetter = item[0]
       if(!result[firstLetter]) {
           result[firstLetter] = [];
       }

       if(result[firstLetter].indexOf(item) < 0) {
           result[firstLetter].push(item);
       }
   }
   return result;
}

// const inputArr = ['Berlin', 'Paris', 'Prague'];
console.log(getNewObj(inputArr));
