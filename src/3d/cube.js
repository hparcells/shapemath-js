module.exports = {
    volume : number = function(size) {
        return Math.pow(size, 3);
    },

    surfaceArea : number = function(size) {
        let side = Math.pow(size, 2);

        return side * 6;
    }
};
