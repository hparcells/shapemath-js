const sqrt = require("math-sqrt");

module.exports = {
    volumeByRadius : number = function(radius, height) {
        let radSq = Math.pow(radius, 2);
        let thirdHeight = height / 3;
        let beforePi = radSq * thirdHeight;

        return Math.PI * beforePi;
    },

    volumeByDiameter : number = function(diameter, height) {
        let radius = diameter / 2;
        let radSq = Math.pow(radius, 2);
        let thirdHeight = height / 3;
        let beforePi = radSq * thirdHeight;

        return Math.PI * beforePi;
    },

    surfaceAreaByRadius : number = function(radius, height) {
        let heightSquared = Math.pow(height, 2);
        let radiusSquared = Math.pow(radius, 2);
        let heightAndRadiusRoot = sqrt(heightSquared + radiusSquared);
        let parentheses = radius + heightAndRadiusRoot;
        let beforePi = radius * parentheses;

        return Math.PI * beforePi;
    },

    surfaceAreaByDiameter : number = function(diameter, height) {
        let radius = diameter / 2;
        let heightSquared = Math.pow(height, 2);
        let radiusSquared = Math.pow(radius, 2);
        let heightAndRadiusRoot = sqrt(heightSquared + radiusSquared);
        let parentheses = radius + heightAndRadiusRoot;
        let beforePi = radius * parentheses;

        return Math.PI * beforePi;
    }
};
