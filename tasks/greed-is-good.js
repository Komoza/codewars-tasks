// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

const score = dice => {
    const arr = [0, 0, 0, 0, 0, 0];
    let points = 0;

    dice.forEach(item => {
      switch (item) {
        case 1: 
            arr[0]++;
            break
        case 2:
            arr[1]++;
            break
        case 3: 
            arr[2]++;
            break
        case 4: 
            arr[3]++;
            break
        case 5: 
            arr[4]++;
            break
        case 6:
            arr[5]++;
            break
        default: 
            break
      }
    }) 

    if (arr[0] >= 3) {
        points += 1000;
        arr[0] -= 3;
    }

    if (arr[5] >= 3) {
        points += 600;
    }

    if (arr[4] >= 3) {
        points += 500;
        arr[4] = 0;
    }

    if (arr[3] >= 3) {
        points += 400;
    }

    if (arr[2] >= 3) {
        points += 300;
    }

    if (arr[1] >= 3) {
        points += 200;
    }

    while (arr[0] > 0) {
        points += 100;
        arr[0]--;
    }


    if (arr[4] > 0) {
        console.log(arr[4]);
        points += 50;
    }

    return points;

  }

console.log('===== GREED IS GOOD =====');
console.log( score([ 5, 5, 5, 3, 3 ]));
console.log('\n\n');
