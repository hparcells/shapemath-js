module.exports = {
    areaByRadius : number = function(radius) {
        let beforeSq = Math.PI * radius;

		return beforeSq * beforeSq;
    },

    areaByDiameter : number = function(diameter) {
        let radius = diameter / 2;
        let beforeSq = Math.PI * radius;
        
		return beforeSq * beforeSq;
    },

    circumferenceByDiameter : number = function(diameter) {
        return Math.PI * diameter;
    },

    circumferenceByRadius : number = function(radius) {
        return Math.PI * (radius * 2);
    }
};
