const sqrt = require("math-sqrt");
const triangleArea = require("triangle-area");

module.exports = {
    areaByBaseAndHeight : number = function(base, height) {
        return (base * height) / 2;
    },

    areaBySides : number = function(sideA, sideB, sideC) {
        return triangleArea(sideA, sideB, sideC);
    },

    hypotenuse : number = function(sideLength1, sideLength2) {
        let side1 = Math.pow(sideLength1, 2);
        let side2 = Math.pow(sideLength2, 2);
        
        return sqrt(side1 + side2);
    },

    missingSide : number = function(side, hypotenuse) {
        let hypotenuseSquared = Math.pow(hypotenuse, 2);
		let sideSquared = Math.pow(side, 2);
		
		return sqrt(hypotenuseSquared - sideSquared);
    },

    missingInteriorAngle : number = function(angle1, angle2) {
        return 180 - (angle1 + angle2);
    },

    missingExteriorAngle : number = function(angle1, angle2) {
        let total = angle1 + angle2;

        return 360 - total;
    }
};
