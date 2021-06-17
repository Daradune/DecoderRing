// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  function caesar(input, shift, encode = true) {
    if(shift == 0 || shift < -25 || shift > 25) return false 
    if(encode){
      let before = input.toLowerCase()
      let output = ''
      for(let letter in before){
        if(!alphabet.includes(before[letter])) output += before[letter]
        else{
          const alphabetIndex = alphabet.indexOf(before[letter])
          if(alphabet[alphabetIndex + shift]) output += alphabet[alphabetIndex + shift]
          if((alphabetIndex + shift) < 0) output += alphabet[alphabetIndex + shift + 26]
          if((alphabetIndex + shift) > 25) output += alphabet[alphabetIndex + shift - 26]
        }
      }
      return output
    }else{
      let before = input.toLowerCase()
      let output = ''
      for(let letter in before){
        if(!alphabet.includes(before[letter])) output += before[letter]
        else{
          const alphabetIndex = alphabet.indexOf(before[letter])
          if(alphabet[alphabetIndex - shift]) output += alphabet[alphabetIndex - shift]
          if((alphabetIndex - shift) < 0) output += alphabet[alphabetIndex - shift + 26]
          if((alphabetIndex - shift) > 25) output += alphabet[alphabetIndex - shift - 26]
        }
      }
      return output
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
