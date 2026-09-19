/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function (radius, xCenter, yCenter, x1, y1, x2, y2) {
    const nearX = Math.max(x1, Math.min(xCenter, x2));
    const nearY = Math.max(y1, Math.min(yCenter, y2));

    const diffX = nearX - xCenter;
    const diffY = nearY - yCenter;

    return diffX * diffX + diffY * diffY <= radius * radius;
};