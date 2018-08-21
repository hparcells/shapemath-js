module.exports = {
    areaByRadius : number = function(radius) {
        let radiusSquared = Math.pow(radius, 2);
        let circle = Math.PI * radiusSquared;
        
        return circle / 2;
    },

    areaByDiameter : number = function(diameter) {
        let radius = diameter / 2;
        let radiusSquared = Math.pow(radius, 2);
        let circle = Math.PI * radiusSquared;
        
        return circle / 2;
    },

    circumferenceByDiameter : number = function(diameter) {
        let circle = Math.PI * diameter;
        let semicircle = circle / 2;

        return semicircle + diameter;
    },

    circumferenceByRadius : number = function(radius) {
        let diameter  = radius * 2;
        let circle = Math.PI * diameter;
        let semicircle = circle / 2;

        return semicircle + diameter;
    }
};
