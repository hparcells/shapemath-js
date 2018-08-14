module.exports = {
    areaByRadius : number = function(radius) {
        let radSq = radius * radius;

        return Math.PI * radSq;
    },

    areaByDiameter : number = function(diameter) {
        let radius = diameter / 2;
        let radSq = radius * radius;
        
		return Math.PI * radSq;
    },

    circumferenceByDiameter : number = function(diameter) {
        return Math.PI * diameter;
    },

    circumferenceByRadius : number = function(radius) {
        return Math.PI * (radius * 2);
    }
};
