module.exports = {
    volumeByRadius : number = function(radius) {
        let radiusCubed = radius * radius * radius;
        let piRadiusCubed = Math.PI * radiusCubed;

        return (4/3) * piRadiusCubed;
    },

    volumeByDiameter : number = function(diameter) {
        let radius = diameter / 2;
        let radiusCubed = radius * radius * radius;
        let piRadiusCubed = Math.PI * radiusCubed;

        return (4/3) * piRadiusCubed;
    },

    surfaceAreaByRadius : number = function(radius) {
        let radiusSquared = radius * radius;
        let piRadiusSquared = Math.PI * radiusSquared;

        return 4 * piRadiusSquared;
    },

    surfaceAreaByDiameter : number = function(diameter) {
        let radius = diameter / 2;
        let radiusSquared = radius * radius;
        let piRadiusSquared = Math.PI * radiusSquared;

        return 4 * piRadiusSquared;
    }
};
