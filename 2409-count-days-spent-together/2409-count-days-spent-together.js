/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const getDay = (str) => {
        const month = Number(str.slice(0, 2));
        const day = Number(str.slice(3));
        let result = day;

        for (let i = 0; i < month - 1; i++) {
            result += days[i];
        }

        return result;
    };

    const arriveAliceDay = getDay(arriveAlice);
    const leaveAliceDay = getDay(leaveAlice);
    const arriveBobDay = getDay(arriveBob);
    const leaveBobDay = getDay(leaveBob);
    const arriveDay = Math.max(arriveAliceDay, arriveBobDay);
    const leaveDay = Math.min(leaveAliceDay, leaveBobDay);

    return arriveDay > leaveDay ? 0 : leaveDay - arriveDay + 1;
};