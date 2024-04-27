const someString = "The evil taht men do"
const are = "i want merred with you for the eternity"


const countVowels = (phrase) => {
  const vowelsList = /[aeiou]/i;
  const phraseLength = phrase.length
  let total = 0



for (let i = 0; i < phraseLength; i++){
    let isVowel =  vowelsList.test(phrase.charAt(i));

    if(isVowel) {
        total++;
    } 
    
}
  return total;
};


let test1 = countVowels(someString);
let test2 = countVowels(are);

console.log(test1)
console.log(test2)

