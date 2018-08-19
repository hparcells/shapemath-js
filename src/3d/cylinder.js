module.exports = {
    volumeByRadius : number = function(radius, height) {
        let radiusSquared = Math.pow(radius, 2);
        let circle = Math.PI * radiusSquared;

        return circle * height;
    },

    volumeByDiameter : number = function(diameter, height) {
        let radius = diameter / 2;
        let radiusSquared = Math.pow(radius, 2);
        let circle = Math.PI * radiusSquared;

        return circle * height;
    },

    surfaceAreaByDiameter : number = function(diameter, height) {
        let radius = diameter / 2;

        let radiusSquared = Math.pow(radius, 2);
        let oneCircle = Math.PI * radiusSquared;
        let twoCircles = oneCircle * 2;

        let piDiameter = Math.PI * diameter;
        let round = piDiameter * height;

        return round + twoCircles;
    },

    surfaceAreaByRadius : number = function(radius, height) {
        let radiusSquared = Math.pow(radius, 2);
        let oneCircle = Math.PI * radiusSquared;
        let twoCircles = oneCircle * 2;

        let diameter = radius * 2;
        let piDiameter = Math.PI * diameter;
        let round = piDiameter * height;

        return round + twoCircles;
    }
};  