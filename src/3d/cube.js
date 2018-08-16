module.exports = {
    volume : number = function(size) {
        return size * size * size;
    },

    surfaceArea : number = function(size) {
        let side = size * size;

        return side * 6;
    }
};
