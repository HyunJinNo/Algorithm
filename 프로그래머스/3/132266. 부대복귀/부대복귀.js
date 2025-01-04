// 3 <= n <= 100_000
// 2 <= roads.length <= 500_000
// 1 <= sources.length <= 500
// 1 <= sources[i] <= n
// 1 <= destination <= n
function solution(n, roads, sources, destination) {
    const graph = Array(n + 1).fill([]);    
    roads.forEach((road) => {
        graph[road[0]] = [...graph[road[0]], road[1]];
        graph[road[1]] = [...graph[road[1]], road[0]];
    });
    
    const distance = Array(n + 1).fill(100_001);
    const visited = Array(n + 1).fill(false);
    distance[destination] = 0;
    visited[destination] = true;
    
    const arr = [[destination, 0]];
    let index = 0;
    let length = 1;
    
    while (index < length) {
        const target = arr[index++];
        graph[target[0]].forEach((next) => {
            if (!visited[next]) {
                visited[next] = true;
                distance[next] = target[1] + 1;
                arr.push([next, distance[next]]);
                length++;
            }
        });
    }
    
    const answer = [];
    
    sources.forEach((source) => {
        if (distance[source] === 100_001) {
            answer.push(-1);
        } else {
            answer.push(distance[source]);
        }
    });
    
    return answer;
}