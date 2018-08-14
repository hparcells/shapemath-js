const sqrt = require("math-sqrt");

module.exports = {
    area : number = function(base, height) {
        return (base * height) / 2;
    },

    hypotenuse : number = function(sideLength1, sideLength2) {
        let side1 = sideLength1 * sideLength1;
        let side2 = sideLength2 * sideLength2;
        
        return sqrt(side1 + side2);
    },

    missingSide : number = function(side, hypotenuse) {
        let hypotenuseSq = hypotenuse * hypotenuse;
		let sideSq = side * side;
		
		return sqrt(hypotenuseSq - sideSq);
    },

    missingInteriorAngle : number = function(angle1, angle2) {
        return 180 - (angle1 + angle2);
    },

    missingExteriorAngle : number = function(angle1, angle2) {
        let total = angle1 + angle2;

        return 360 - total;
    }
};
