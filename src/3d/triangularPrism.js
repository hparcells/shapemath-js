module.exports = {
    /*
        https://www.google.com/search?q=triangular+prism+volume
        The other alternative to volume is the above link,
        which I may or may not do sometime, but feel free to open
        pull request ^-^
    */
    volume : number = function(baseWidth, baseHeight, height) {
        let baseSurfaceArea = (baseWidth * baseHeight) / 2;

        return baseSurfaceArea * height;
    },

    surfaceArea : number = function(edgeA, edgeB, edgeC, baseWidth, baseHeight, height) {
        let baseSurfaceArea = (baseWidth * baseHeight) / 2;
        let bothTriangles = baseSurfaceArea * 2;
        let faceA = edgeA * height;
        let faceB = edgeB * height;
        let faceC = edgeC * height;

        return bothTriangles + faceA + faceB + faceC;
    }
};
