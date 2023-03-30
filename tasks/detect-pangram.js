// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arrCopy = [...arr];
    string = string.toLowerCase();

    arr.forEach(item => {
      if (string.indexOf(item) !== -1) {
        arrCopy.splice(arrCopy.indexOf(item), 1);
      }
    })
    return arrCopy.length === 0 ? true : false
  }

console.log('===== DETECT PANGRAM =====');
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log('\n\n');
