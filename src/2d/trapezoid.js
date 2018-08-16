module.exports = {
    area : number = function(base1, base2, height) {
        return ((base1 + base2) * height) / 2;
    },

    missingInteriorAngle : number = function(angle1, angle2, angle3) {
        return 360 - (angle1 + angle2 + angle3);
    },
    
    missingExteriorAngle : number = function(angle1, angle2, angle3) {
        let total = angle1 + angle2 + angle3;

        return 360 - total;
    }
};
