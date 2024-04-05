const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
const c: number = Number(input[0]); // 테스트 케이스의 수, 1 <= c <= 100

for (let i = 1; i <= c; i++) {
  const str: string = input[i].trim();
  const stack: string[] = [];
  let length: number = 0;
  let answer: boolean = true;

  loop: for (const letter of str) {
    switch (letter) {
      case "(":
      case "{":
      case "[":
        stack.push(letter);
        length++;
        break;
      case ")":
        if (stack[length - 1] === "(") {
          stack.pop();
          length--;
          break;
        } else {
          answer = false;
          break loop;
        }
      case "}":
        if (stack[length - 1] === "{") {
          stack.pop();
          length--;
          break;
        } else {
          answer = false;
          break loop;
        }
      case "]":
        if (stack[length - 1] === "[") {
          stack.pop();
          length--;
          break;
        } else {
          answer = false;
          break loop;
        }
      default:
        break;
    }
  }

  answer === true && length === 0 ? console.log("YES") : console.log("NO");
}
