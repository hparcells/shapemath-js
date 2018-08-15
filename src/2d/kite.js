module.exports = {
    areaByDiagonals : number = function(diag1, diag2) {
        return (diag1 * diag2) / 2;
    },

    areaByBaseAndHeight : number = function(base, height) {
        return base * height;
    },

    perimeterBySides : number = function(sideLength1, sideLength2) {
        return sideLength1 + sideLength1 + sideLength2 + sideLength2;
    },

    missingInteriorAngle : number = function(angle1, angle2, angle3) {
        return 360 - (angle1 + angle2 + angle3);
    },
    
    missingExteriorAngle : number = function(angle1, angle2, angle3) {
        let total = angle1 + angle2 + angle3;

        return 360 - total;
    }
};