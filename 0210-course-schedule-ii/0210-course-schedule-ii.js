/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    const inDegree = Array(numCourses).fill(0);

    for (const [a, b] of prerequisites) {
        graph[b].push(a);
        inDegree[a]++;
    }

    const queue = [];
    let peekIndex = 0;

    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    let answer = [];

    while (peekIndex < queue.length) {
        const course = queue[peekIndex++];
        answer.push(course);

        graph[course].forEach((nextCourse) => {
            inDegree[nextCourse]--;

            if (inDegree[nextCourse] === 0) {
                queue.push(nextCourse);
            }
        });
    }

    return (answer.length === numCourses) ? answer : [];
};