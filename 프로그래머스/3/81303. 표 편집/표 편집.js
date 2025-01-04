class Node {
    constructor(data) {
        this.value = data;
        this.prev = null;
        this.next = null;
    }
}

// n: 처음 표의 행 개수, 5 <= n <= 1_000_000
// k: 처음에 선택된 행의 위치, 0 <= k < n
// cmd: 수행한 명령어들이 담긴 문자열 배열, 1 <= cmd.length <= 200_000
function solution(n, k, cmd) {
    const nodeList = Array.from({ length: n }, (_, index) => new Node(index));
    for (let i = 1; i < n - 1; i++) {
        nodeList[i].prev = nodeList[i - 1];
        nodeList[i].next = nodeList[i + 1];
    }
    nodeList[0].next = nodeList[1];
    nodeList[n - 1].prev = nodeList[n - 2];
    
    let current = nodeList[k];
    const answer = Array(n).fill("O");
    const stack = [];
    const cmdLength = cmd.length;
    
    for (let i = 0; i < cmdLength; i++) {
        if (cmd[i][0] === "U") {
            const X = Number(cmd[i].split(" ")[1]);
            for (let j = 0; j < X; j++) {
                current = current.prev;
            }
        } else if (cmd[i][0] === "D") {
            const X = Number(cmd[i].split(" ")[1]);
            for (let j = 0; j < X; j++) {
                current = current.next;
            }
        } else if (cmd[i][0] === "C") {
            answer[current.value] = "X";
            stack.push(current);
            
            if (current.prev === null) {
                current.next.prev = null;
                current = current.next;
            } else if (current.next === null) {
                current.prev.next = null;
                current = current.prev;
            } else {
                current.prev.next = current.next;
                current.next.prev = current.prev;
                current = current.next;
            }
        } else if (cmd[i][0] === "Z") {
            const node = stack.pop();
            answer[node.value] = "O";
            
            if (node.prev === null) {
                node.next.prev = node;
            } else if (node.next === null) {
                node.prev.next = node;
            } else {
                node.prev.next = node;
                node.next.prev = node;    
            }
        }
    }
    
    return answer.join("");
}