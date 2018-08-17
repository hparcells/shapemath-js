module.exports = {
    volumeByRadius : number = function(radius) {
        let radCu = radius * radius * radius;
        let piRadCu = Math.PI * radCu;

        return (4/3) * piRadCu;
    },

    volumeByDiameter : number = function(diameter) {
        let radius = diameter / 2;
        let radCu = radius * radius * radius;
        let piRadCu = Math.PI * radCu;

        return (4/3) * piRadCu;
    },

    surfaceAreaByRadius : number = function(radius) {
        let radSq = radius * radius;
        let piRadSq = Math.PI * radSq;

        return 4 * piRadSq;
    },

    surfaceAreaByDiameter : number = function(diameter) {
        let radius = diameter / 2;
        let radSq = radius * radius;
        let piRadSq = Math.PI * radSq;

        return 4 * piRadSq;
    }
};
