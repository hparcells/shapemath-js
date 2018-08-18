module.exports = {
    volumeByRadius : number = function(radius, height) {
        let radSq = radius * radius;
        let circle = Math.PI * radSq;

        return circle * height;
    },

    volumeByDiameter : number = function(diameter, height) {
        let radius = diameter / 2;
        let radSq = radius * radius;
        let circle = Math.PI * radSq;

        return circle * height;
    },

    surfaceAreaByDiameter : number = function(diameter, height) {
        let radius = diameter / 2;

        let radSq = radius * radius;
        let oneCircle = Math.PI * radSq;
        let twoCircles = oneCircle * 2;

        let piRad = Math.PI * diameter;
        let round = piRad * height;

        return round + twoCircles;
    },

    surfaceAreaByRadius : number = function(radius, height) {
        let radSq = radius * radius;
        let oneCircle = Math.PI * radSq;
        let twoCircles = oneCircle * 2;

        let diameter = radius * 2;
        let piRad = Math.PI * diameter;
        let round = piRad * height;

        return round + twoCircles;
    }
};  