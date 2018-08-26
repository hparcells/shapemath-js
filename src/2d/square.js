const sqrt = require("math-sqrt");

module.exports = {
    area : number = function(size) {
        return Math.pow(size, 2);
    },

    perimeterBySide : number = function(size) {
        return size * 4;
    },

    perimeterByArea : number = function(area) {
        return sqrt(area) * 4;
    },

    missingInteriorAngle : number = function(angle1, angle2, angle3) {
        return 360 - (angle1 + angle2 + angle3);
    },

    missingExteriorAngle : number = function(angle1, angle2, angle3) {
        let total = angle1 + angle2 + angle3;

        return 360 - total;
    }

    // TODO: Diagonal
};
