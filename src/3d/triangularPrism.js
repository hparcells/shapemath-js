const triangleArea = require("triangle-area");

module.exports = {
    volumeByBaseAndHeight : number = function(baseWidth, baseHeight, height) {
        let baseSurfaceArea = (baseWidth * baseHeight) / 2;

        return baseSurfaceArea * height;
    },

    volumeByEdges : number = function(edgeA, edgeB, edgeC, height) {
        let baseSurfaceArea = triangleArea(edgeA, edgeB, edgeC);

        return baseSurfaceArea * height;
    },

    surfaceAreaByBaseAndHeight : number = function(edgeA, edgeB, edgeC, baseWidth, baseHeight, height) {
        let baseSurfaceArea = (baseWidth * baseHeight) / 2;
        let bothTriangles = baseSurfaceArea * 2;
        let faceA = edgeA * height;
        let faceB = edgeB * height;
        let faceC = edgeC * height;

        return bothTriangles + faceA + faceB + faceC;
    },

    surfaceAreaByEdges : number = function(edgeA, edgeB, edgeC, height) {
        let baseSurfaceArea = triangleArea(edgeA, edgeB, edgeC);
        let bothTriangles = baseSurfaceArea * 2;
        let faceA = edgeA * height;
        let faceB = edgeB * height;
        let faceC = edgeC * height;

        return bothTriangles + faceA + faceB + faceC;
    }
};
