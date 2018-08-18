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
    }
};  