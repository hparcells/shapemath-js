const square = require("../src/2d/square");
const rectangle = require("../src/2d/rectangle");
const triangle = require("../src/2d/triangle");
const line = require("../src/2d/line");
const circle = require("../src/2d/circle");

var colors = require('colors');

// Test Method
test = function(testName, test) {
    if(test) {
        console.log(colors.green(testName + " SUCCEEDED!"))
    }else {
        console.log(colors.red(testName + " FAILED"));
        process.exit(1);
    }
}

// Square
test("square.area(7)", square.area(7) == 49);
test("square.perimeterBySide(5)", square.perimeterBySide(5) == 20);
test("square.perimeterByArea(64)", square.perimeterByArea(64) == 32);
test("square.missingInteriorAngle(90, 90, 90)", square.missingInteriorAngle(90, 90, 90) == 90);
test("square.missingExteriorAngle(90, 90, 90)", square.missingExteriorAngle(90, 90, 90) == 90);

//Rectangle
test("rectangle.area(10, 5)", rectangle.area(10, 5) == 50);
test("rectangle.perimeterBySides(10, 5)", rectangle.perimeterBySides(10, 5) == 30);
test("rectangle.missingInteriorAngle(90, 90, 90)", rectangle.missingInteriorAngle(90, 90, 90) == 90);
test("rectangle.missingExteriorAngle(90, 90, 90)", rectangle.missingExteriorAngle(90, 90, 90) == 90);

// Triangle
test("triangle.area(10, 7)", triangle.area(10, 7) == 35);
test("triangle.hypotenuse(3, 4)", triangle.hypotenuse(3, 4) == 5);
test("triangle.missingSide(4, 5)", triangle.missingSide(4, 5) == 3);
test("triangle.missingInteriorAngle(51, 42)", triangle.missingInteriorAngle(51, 42) == 87);
test("triangle.missingExteriorAngle(92, 123)", triangle.missingExteriorAngle(92, 123) == 145);

// Line
test("line.isParallel(0, 1, 2, 2, 0, 2, 2, 3)", line.isParallel(0, 1, 2, 2, 0, 2, 2, 3));
test("line.isPerpendicular(2, -2)", line.isPerpendicular(0.25, -4));

// Circle
test("circle.areaByRadius(7)", circle.areaByRadius(7) == 153.93804002589985);
test("circle.areaByDiamater(14)", circle.areaByDiameter(14) == 153.93804002589985);
test("circle.circumferenceByDiameter(14)", circle.circumferenceByDiameter(14) == 43.982297150257105338477007365913);
test("circle.circumferenceByRadius(7)", circle.circumferenceByRadius(7) == 43.982297150257105338477007365913);

// Done
console.log(colors.rainbow("\nEverything Worked"));
console.log(process.env.REPO_TOKEN);