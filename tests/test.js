const square = require("../src/2d/square");
const rectangle = require("../src/2d/rectangle");
const triangle = require("../src/2d/triangle");
const line = require("../src/2d/line");
const circle = require("../src/2d/circle");
const rhombus = require("../src/2d/rhombus");
const kite = require("../src/2d/kite");
const trapezoid = require("../src/2d/trapezoid");

const cube = require("../src/3d/cube");
const rectangularPrism = require("../src/3d/rectangularPrism");
const sphere = require("../src/3d/sphere");
const cylinder = require("../src/3d/cylinder");
const cone = require("../src/3d/cone");

var colors = require("colors");

// Test Method
test = function(testName, test) {
    if(test) {
        console.log(colors.green(testName + " SUCCEEDED!"));
    }else {
        console.log(colors.red(testName + " FAILED"));
        process.exit(1);
    }
};

// Square
test("square.area(7)", square.area(7) === 49);
test("square.perimeterBySide(5)", square.perimeterBySide(5) === 20);
test("square.perimeterByArea(64)", square.perimeterByArea(64) === 32);
test("square.missingInteriorAngle(90, 90, 90)", square.missingInteriorAngle(90, 90, 90) === 90);
test("square.missingExteriorAngle(90, 90, 90)", square.missingExteriorAngle(90, 90, 90) === 90);

//Rectangle
test("rectangle.area(10, 5)", rectangle.area(10, 5) === 50);
test("rectangle.perimeterBySides(10, 5)", rectangle.perimeterBySides(10, 5) === 30);
test("rectangle.missingInteriorAngle(90, 90, 90)", rectangle.missingInteriorAngle(90, 90, 90) === 90);
test("rectangle.missingExteriorAngle(90, 90, 90)", rectangle.missingExteriorAngle(90, 90, 90) === 90);

// Triangle
test("triangle.area(10, 7)", triangle.area(10, 7) === 35);
test("triangle.hypotenuse(3, 4)", triangle.hypotenuse(3, 4) === 5);
test("triangle.missingSide(4, 5)", triangle.missingSide(4, 5) === 3);
test("triangle.missingInteriorAngle(51, 42)", triangle.missingInteriorAngle(51, 42) === 87);
test("triangle.missingExteriorAngle(92, 123)", triangle.missingExteriorAngle(92, 123) === 145);

// Line
test("line.isParallel(0, 1, 2, 2, 0, 2, 2, 3)", line.isParallel(0, 1, 2, 2, 0, 2, 2, 3));
test("line.isPerpendicular(2, -2)", line.isPerpendicular(0.25, -4));

// Circle
test("circle.areaByRadius(7)", circle.areaByRadius(7) === 153.93804002589985);
test("circle.areaByDiamater(14)", circle.areaByDiameter(14) === 153.93804002589985);
test("circle.circumferenceByDiameter(14)", circle.circumferenceByDiameter(14) === 43.982297150257105338477007365913);
test("circle.circumferenceByRadius(7)", circle.circumferenceByRadius(7) === 43.982297150257105338477007365913);

// Rhombus
test("rhombus.areaByDiagonals(8, 12)", rhombus.areaByDiagonals(8, 12) === 48);
test("rhombus.areaByBaseAndHeight(5, 4)", rhombus.areaByBaseAndHeight(5, 4) === 20);
test("rhombus.perimeterBySides(5, 4)", rhombus.perimeterBySides(5, 4) === 18);
test("rhombus.missingInteriorAngle(129, 129, 51)", rhombus.missingInteriorAngle(129, 129, 51) === 51);
test("rhombus.missingExteriorAngle(51, 51, 129)", rhombus.missingExteriorAngle(51, 51, 129) === 129);

// Kite
test("kite.areaByDiagonals(8, 12)", kite.areaByDiagonals(8, 12) === 48);
test("kite.areaByBaseAndHeight(5, 4)", kite.areaByBaseAndHeight(5, 4) === 20);
test("kite.perimeterBySides(5, 4)", kite.perimeterBySides(5, 4) === 18);
test("kite.missingInteriorAngle(129, 129, 51)", kite.missingInteriorAngle(129, 129, 51) === 51);
test("kite.missingExteriorAngle(51, 51, 129)", kite.missingExteriorAngle(51, 51, 129) === 129);

// Trapezoid
test("trapezoid.area(7, 10, 3)", trapezoid.area(7, 10, 3) === 25.5);
test("trapezoid.missingInteriorAngle(95, 27, 85)", trapezoid.missingInteriorAngle(95, 27, 85) === 153);
test("trapezoid.missingExteriorAngle(85, 153, 95)", trapezoid.missingExteriorAngle(85, 153, 95) === 27);

// Cube
test("cube.volume(2)", cube.volume(2) === 8);
test("cube.surfaceArea(2)", cube.surfaceArea(2) == 24);

// Rectangular Prism
test("rectangularPrism.volume(1, 2, 3)", rectangularPrism.volume(1, 2, 3) === 6);
test("rectangularPrism.surfaceArea(1, 2, 3)", rectangularPrism.surfaceArea(1, 2, 3) == 22);

// Sphere
test("sphere.volumeByRadius(5)", sphere.volumeByRadius(5) === 523.5987755982987);
test("sphere.volumeByDiameter(10)", sphere.volumeByDiameter(10) === 523.5987755982987);
test("sphere.surfaceAreaByRadius(9)", sphere.surfaceAreaByRadius(9) === 1017.8760197630929);
test("sphere.surfaceAreaByDiameter(18)", sphere.surfaceAreaByDiameter(18) === 1017.8760197630929);

// Cylinder
test("cylinder.volumeByRadius(2, 5)", cylinder.volumeByRadius(2, 5) === 62.83185307179586);
test("cylinder.volumeByDiameter(4, 5)", cylinder.volumeByDiameter(4, 5) === 62.83185307179586);
test("cylinder.surfaceAreaByRadius(5, 2)", cylinder.surfaceAreaByRadius(5, 2) === 219.9114857512855);
test("cylinder.surfaceAreaByDiameter(10, 2)", cylinder.surfaceAreaByDiameter(10, 2) === 219.9114857512855);

// Cone
test("cone.volumeByRadius(2, 7)", cone.volumeByRadius(2, 7) === 29.321531433504738);
test("cone.volumeByDiameter(4, 7)", cone.volumeByDiameter(4, 7) === 29.321531433504738);
test("cone.surfaceAreaByRadius(7, 2)", cone.surfaceAreaByRadius(7, 2) === 314.0360182443304);
test("cone.surfaceAreaByDiameter(14, 2)", cone.surfaceAreaByDiameter(14, 2) === 314.0360182443304);

// Done
console.log(colors.rainbow("\nEverything Worked"));
