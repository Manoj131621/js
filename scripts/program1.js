
function nextLetter() {
  const str1= document.getElementById("w1").value;
  const Alphabet = [
    // lower case alphabet
    "a", "b", "c",
    "d", "e", "f",
    "g", "h", "i",
    "j", "k", "l",
    "m", "n", "o",
    "p", "q", "r",
    "s", "t", "u",
    "v", "w", "x",
    "y", "z",
    // upper case alphabet
    "A", "B", "C",
    "D", "E", "F",
    "G", "H", "I",
    "J", "K", "L",
    "M", "N", "O",
    "P", "Q", "R",
    "S", "T", "U",
    "V", "W", "X",
    "Y", "Z"
  ];
  let LetterArray = str1.split("").map(letter => {
    if (Alphabet.includes(letter) === true) 
    {
      return Alphabet[Alphabet.indexOf(letter) + 1];
    } 
    else 
    {
      return " ";
    }
  });
  let Assemble = () => LetterArray.join("").trim();
 
  // return Assemble();
  document.getElementById("demo").innerHTML = Assemble();
}
// alert(Assemble)
// document.write(nextLetter());
// document.getElementById("demo").innerHTML = Assemble();
//  console.log(nextLetter("coding"));
/*var temp=document.getElementById(str1);
var assign=document.getElementById(demo);
assign.innerHTML=temp.value;*/