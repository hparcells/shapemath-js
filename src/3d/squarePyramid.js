module.exports = {
    volume : number = function(baseWidth, baseHeight, height) {
        let baseArea = baseWidth * baseHeight;
        let baseAreaHeight = baseArea * height;

        return (1/3) * baseAreaHeight;
    }
}