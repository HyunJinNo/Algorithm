const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().trim().split("\n");
let answer = "";

for (const str of input) {
  for (const c of str) {
    switch (c) {
      case "1":
        answer += "`";
        break;
      case "2":
        answer += "1";
        break;
      case "3":
        answer += "2";
        break;
      case "4":
        answer += "3";
        break;
      case "5":
        answer += "4";
        break;
      case "6":
        answer += "5";
        break;
      case "7":
        answer += "6";
        break;
      case "8":
        answer += "7";
        break;
      case "9":
        answer += "8";
        break;
      case "0":
        answer += "9";
        break;
      case "-":
        answer += "0";
        break;
      case "=":
        answer += "-";
        break;
      case "W":
        answer += "Q";
        break;
      case "E":
        answer += "W";
        break;
      case "R":
        answer += "E";
        break;
      case "T":
        answer += "R";
        break;
      case "Y":
        answer += "T";
        break;
      case "U":
        answer += "Y";
        break;
      case "I":
        answer += "U";
        break;
      case "O":
        answer += "I";
        break;
      case "P":
        answer += "O";
        break;
      case "[":
        answer += "P";
        break;
      case "]":
        answer += "[";
        break;
      case "\\":
        answer += "]";
        break;
      case "S":
        answer += "A";
        break;
      case "D":
        answer += "S";
        break;
      case "F":
        answer += "D";
        break;
      case "G":
        answer += "F";
        break;
      case "H":
        answer += "G";
        break;
      case "J":
        answer += "H";
        break;
      case "K":
        answer += "J";
        break;
      case "L":
        answer += "K";
        break;
      case ";":
        answer += "L";
        break;
      case "'":
        answer += ";";
        break;
      case "X":
        answer += "Z";
        break;
      case "C":
        answer += "X";
        break;
      case "V":
        answer += "C";
        break;
      case "B":
        answer += "V";
        break;
      case "N":
        answer += "B";
        break;
      case "M":
        answer += "N";
        break;
      case ",":
        answer += "M";
        break;
      case ".":
        answer += ",";
        break;
      case "/":
        answer += ".";
        break;
      default:
        answer += c;
    }
  }

  answer += "\n";
}

console.log(answer.trim());