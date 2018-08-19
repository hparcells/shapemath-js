module.exports = {
    volumeByRadius : number = function(radius, height) {
        let radSq = Math.pow(radius, 2);
        let thirdHeight = height / 3;
        let beforePi = radSq * thirdHeight;

        return Math.PI * beforePi;
    },

    volumeByDiameter : number = function(diameter, height) {
        let radius = diameter / 2;
        let radSq = Math.pow(radius, 2);
        let thirdHeight = height / 3;
        let beforePi = radSq * thirdHeight;

        return Math.PI * beforePi;
    }
};
