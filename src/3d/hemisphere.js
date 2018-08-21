module.exports = {
    volumeByRadius : number = function(radius) {
        let radiusCubed = Math.pow(radius, 3);
        let piRadiusCubed = Math.PI * radiusCubed;
        let sphere = (4/3) * piRadiusCubed;
        
        return sphere / 2;
    },

    volumeByDiameter : number = function(diameter) {
        let radius = diameter / 2;
        let radiusCubed = Math.pow(radius, 3);
        let piRadiusCubed = Math.PI * radiusCubed;
        let sphere = (4/3) * piRadiusCubed;

        return sphere / 2;
    },

    surfaceAreaByRadius : number = function(radius) {
        let radiusSquared = Math.pow(radius, 2);
        let piRadiusSquared = Math.PI * radiusSquared;

        return 3 * piRadiusSquared;
    },

    surfaceAreaByDiameter : number = function(diameter) {
        let radius = diameter / 2;
        let radiusSquared = Math.pow(radius, 2);
        let piRadiusSquared = Math.PI * radiusSquared;

        return 3 * piRadiusSquared;
    }
};
