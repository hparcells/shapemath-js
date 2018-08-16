module.exports = {
    volume : number = function(length, width, height) {
        return length * width * height;
    },

    surfaceArea : number = function(length, width, height) {
        let front = length * height;
        let right = width * height;
        let top = length * width;
        let half = front + right + top;

        return half * 2;
    }
};
