module.exports = {
    area : number = function(width, height) {
        return width * height;
    },

    perimeterBySides : number = function(width, height) {
        return width + width + height + height;
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
