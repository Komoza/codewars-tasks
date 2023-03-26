// Write a function that accepts a string consisting only of ASCII letters and space(s) and returns that string in block letters of 5 characters width and 7 characters height, with one space between characters.

// The block letters should consist of corresponding capital letters.
// It's irrelevant whether input consists of lower or upper case letters.
// Any leading and/or trailing spaces in input should be ignored.
// Empty strings or such containing only spaces should return an empty string.
// The remaining spaces (between letters and/or words) are to be treated as any other character. This means that there will be six spaces in output for a space in input, or a multiple of six, if there were more spaces - plus the one from preceding character!
// Trailing spaces should be removed in the resulting string.
// The string should be formatted in a way that when passed to Javascripts' console.log() function shows the desired output (see below for example).
// There's a Map called alpha preloaded which you can use. Keys are lower case letters and the space.


const drawletter = (letter, count) => {
  switch (letter) {
    case "A":
      switch (count) {
        case 1:
          return " AAA ";
        case 2:
        case 3:
        case 5:
        case 6:
        case 7:
          return "A   A";
        case 4:
          return "AAAAA";
        default:
          return;
      }
    case "B":
      switch (count) {
        case 1:
        case 4:
        case 7:
          return "BBBB ";
        case 2:
        case 3:
        case 5:
        case 6:
          return "B   B";

        default:
          return;
      }
    case "C":
      switch (count) {
        case 1:
        case 7:
          return " CCC ";
        case 2:
        case 6:
          return "C   C";
        case 4:

        case 3:
        case 5:
          return "C    ";

        default:
          return;
      }
    case "D":
      switch (count) {
        case 1:
        case 7:
          return "DDDD ";
        case 4:
        case 7:
        case 2:
        case 3:
        case 5:
        case 6:
          return "D   D";

        default:
          return;
      }
    case "E":
      switch (count) {
        case 1:
        case 4:
        case 7:
          return "EEEEE";
        case 2:
        case 3:
        case 5:
        case 6:
          return "E    ";

        default:
          return;
      }
    case "F":
      switch (count) {
        case 1:
        case 4:
          return "FFFFF";
        case 7:
        case 2:
        case 3:
        case 5:
        case 6:
          return "F    ";

        default:
          return;
      }
    case "G":
      switch (count) {
        case 1:
        case 7:
          return " GGG ";
        case 4:
          return "G GGG";
        case 3:
          return "G    ";
        case 2:
        case 5:
        case 6:
          return "G   G";
        default:
          return;
      }
    case "H":
      switch (count) {
        case 1:
        case 7:
        case 2:
        case 3:
        case 5:
        case 6:
          return "H   H";
        case 4:
          return "HHHHH";
        default:
          return;
      }
    case "I":
      switch (count) {
        case 1:
        case 7:
          return "IIIII";
        case 2:
        case 3:
        case 5:
        case 6:
        case 4:
          return "  I  ";
      }
      switch (count) {
        case 1:
        case 4:
        case 7:
        case 2:
        case 3:
        case 5:
        case 6:

        default:
          return;
      }
    case "J":
      switch (count) {
        case 1:
          return "JJJJJ";
        case 4:
        case 2:
        case 3:
        case 5:
        case 6:
          return "    J";
        case 7:
          return "JJJJ ";

        default:
          return;
      }
    case "K":
      switch (count) {
        case 1:
        case 7:
          return "K   K";
        case 4:
          return "KK   ";
        case 2:
        case 6:
          return "K  K ";
        case 3:
        case 5:
          return "K K  ";

        default:
          return;
      }
    case "L":
      switch (count) {
        case 1:
        case 4:
        case 2:
        case 3:
        case 5:
        case 6:
          return "L    ";
        case 7:
          return "LLLLL";
        default:
          return;
      }
    case "M":
      switch (count) {
        case 1:
        case 4:
        case 7:
        case 5:
        case 6:
          return "M   M";
        case 2:
          return "MM MM";
        case 3:
          return "M M M";

        default:
          return;
      }
    case "N":
      switch (count) {
        case 1:
        case 3:
        case 5:
        case 7:
          return "N   N";
        case 4:
          return "N N N";
        case 2:
          return "NN  N";
        case 6:
          return "N  NN";
        default:
          return;
      }
    case "O":
      switch (count) {
        case 1:
        case 7:
          return " OOO ";
        case 4:

        case 2:
        case 3:
        case 5:
        case 6:
          return "O   O";

        default:
          return;
      }
    case "P":
      switch (count) {
        case 1:
        case 4:
          return "PPPP ";
        case 2:
        case 3:
          return "P   P";
        case 7:
        case 5:
        case 6:
          return "P    ";
        default:
          return;
      }
    case "Q":
      switch (count) {
        case 1:
          return " QQQ ";
        case 7:
          return " QQQQ";
        case 2:
        case 3:
        case 4:
          return "Q   Q";
        case 5:
          return "Q Q Q";
        case 6:
          return "Q  QQ";

        default:
          return;
      }
    case "R":
      switch (count) {
        case 1:
        case 4:
          return "RRRR ";
        case 7:
        case 2:
        case 3:
          return "R   R";
        case 5:
          return "R R  ";
        case 6:
          return "R  R ";
        default:
          return;
      }
    case "S":
      switch (count) {
        case 1:
        case 4:
        case 7:
          return " SSS ";

        case 2:
        case 6:
          return "S   S";
        case 3:
          return "S    ";
        case 5:
          return "    S";

        default:
          return;
      }
    case "T":
      switch (count) {
        case 1:
          return "TTTTT";
        case 4:
        case 7:
        case 2:
        case 3:
        case 5:
        case 6:
          return "  T  ";
        default:
          return;
      }
    case "U":
      switch (count) {
        case 1:
        case 4:
        case 2:
        case 3:
        case 5:
        case 6:
          return "U   U";
        case 7:
          return " UUU ";

        default:
          return;
      }
    case "V":
      switch (count) {
        case 1:
        case 4:

        case 2:
        case 3:
        case 5:
          return "V   V";
        case 7:
          return "  V  ";
        case 6:
          return " V V ";

        default:
          return;
      }
    case "W":
      switch (count) {
        case 1:
        case 2:
        case 3:
          return "W   W";
        case 4:
        case 5:
        case 6:
          return "W W W";
        case 7:
          return " W W ";
        default:
          return;
      }
    case "X":
      switch (count) {
        case 1:
        case 2:
        case 7:
        case 6:
          return "X   X";
        case 4:
          return "  X  ";

        case 3:
        case 5:
          return " X X ";

        default:
          return;
      }
    case "Y":
      switch (count) {
        case 1:
        case 2:
          return "Y   Y";
        case 3:
          return " Y Y ";
        case 4:
        case 7:

        case 5:
        case 6:
          return "  Y  ";
        default:
          return;
      }
    case "Z":
      switch (count) {
        case 1:
        case 7:
          return "ZZZZZ";
        case 2:
          return "    Z";
        case 3:
          return "   Z ";
        case 4:
          return "  Z  ";
        case 5:
          return " Z   ";
        case 6:
          return "Z    ";

        default:
          return;
      }
    case " ":
      return "     ";
    default:
      return;
  }
};

function blockPrint(input) {
  if (input === " ") return "";
  result = "";
  input = input.trim();
  let arr = input.split("");

  for (let i = 1; i <= 7; i++) {
    for (let j = 0; j < arr.length; j++) {
      result +=
        j === arr.length - 1
          ? drawletter(arr[j].toUpperCase(), i).trimEnd()
          : drawletter(arr[j].toUpperCase(), i);
      if (j !== arr.length - 1) {
        result += " ";
      }
    }
    if (i !== 7) result += "\n";
  }

  return result;
}

console.log('===== BLOCK LETTER PRINT =====');
console.log(blockPrint("Hello World"));
console.log('\n\n');

