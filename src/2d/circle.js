module.exports = {
    areaByRadius : number = function(radius) {
        let radiusSquared = Math.pow(radius, 2);

        return Math.PI * radiusSquared;
    },

    areaByDiameter : number = function(diameter) {
        let radius = diameter / 2;
        let radiusSquared = Math.pow(radius, 2);
        
		return Math.PI * radiusSquared;
    },

    circumferenceByDiameter : number = function(diameter) {
        return Math.PI * diameter;
    },

    circumferenceByRadius : number = function(radius) {
        return Math.PI * (radius * 2);
    }
};
