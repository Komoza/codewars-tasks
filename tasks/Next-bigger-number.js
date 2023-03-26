// DESCRIPTION:

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n) {
    let arr = String(n).split("");
    for (let i = arr.length - 1; i >= 0; i--) {
      for (let j = arr.length - 1; j > i; j--) {
        if (arr[j] > arr[i]) {
          let tmp = arr[j];
          arr[j] = arr[i];
          arr[i] = tmp;
  
          tmp = arr.slice(i + 1).sort((a, b) => a - b);
          arr = [...arr.slice(0, i + 1), ...tmp];
          return Number(arr.join(""));
        }
      }
    }
    return -1;
  }

  console.log('===== NEXT BIGGER NUMBER =====');
  console.log(nextBigger(421323));