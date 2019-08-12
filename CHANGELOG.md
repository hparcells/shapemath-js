# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 3.2.0 [08/12/2019]
### Added
- Added Rectangle math.
- Added Rhombus math.

## Removed
- **BREAKING CHANGE:** `rhombus.areaByBaseAndHeight` has been removed.
- **BREAKING CHANGE:** `rhombus.perimeterBySides ` has been renamed to `rhombus.perimeter` and now takes one parameter.
- **BREAKING CHANGE:** `rhombus.areaByDiagonals` has been renamed to `rhombus.area`.

## 3.1.0 [08/11/2019]
### Added
- Finished Kite math.
- Added Line math.
- Dark theme docs.
- Expanded installation instructions.

## Fixed
- Fixed incorrect installation instructions.

## 3.0.2 [08/10/2019]
### Added
- Automatically generated documentation thanks to TypeDoc.
- Added Circle math.
- Added Oval math.
- Started Kite math.

### Removed
- **BREAKING CHANGE:** `kite.areaByBaseAndHeight` has been removed.

## 3.0.1 [08/10/2019]
### Added
- Travis CI published to NPM.

## 3.0.0 [08/10/2019]
### Added
- Rewritten the package in TypeScript.
- Jest testing.
- ESLint/TSLint code style checking and linting.

---

## v2.5.0 [8/27/18]
### Additions
- Oval / Ellipse Math

###v2.4.0 [8/22/18]
### Additions
- Square Pyramid Math
    - Volume

## v2.3.0 [8/21/18]
### Additions
- Hemisphere Math
    - Volume
    - Surface Area

## v2.2.0 [8/21/18]
### Additions
- Semicircle Math
    - Area
    - Circumference

## v2.0.0 [8/20/18]
### Additions
- Added Function to Triangle to Use Heron's Formula.

### Fixes
- **IMPORTANT:** v1.6.0's Breaking Changes Should Be Here Too.
- **BREAKING CHANGE:** `triangle.area` has been renamed to `triangle.areaByBaseAndHeight`.

---

## v1.6.0 [8/20/18]
### Additions
- Added Triangular Prism Functions Using Heron's Formula.

### Fixes
- **BREAKING CHANGE:** `triangularPrism.volume` has been renamed to `triangularPrism.volumeByBaseAndHeight`.
- **BREAKING CHANGE:** `triangularPrism.surfaceArea` has been renamed to `triangularPrism.surfaceAreaByBaseAndHeight`.

## v1.5.0 [8/20/18]
### Additions
- Triangular Prism Math
    - Volume
    - Surface Area

## v1.4.2 [8/19/18]
### Fixes
- Changed Things to Use `Math.pow()`.

## v1.4.1 [8/19/18]
### Fixes
- Made Variable Make a Little More Sense

## v1.4.0 [8/19/18]
### Additions
- Cone Math
    - Volume
    - Surface Area

## v1.3.0 [8/18/18]
### Additions
- Cylinder Math
    - Volume
    - Surface Area

## v1.2.0 [8/17/28]
### Additions
- Sphere Math
    - Volume
    - Diameter

## v1.1.1 [8/16/18]
### Additions
- Added Tests for Cubes and Rectangular Prisms

## v1.1.0 [8/16/18]
### Additions
- Volume and Surface Area For:
    - Cubes
    - Rectangular Prisms

## v1.0.0 [8/15/18]
### Additions
- Added Functionality for:
    - Rhombus
    - Kite
    - Trapezoid

---

## v0.3.0 [8/14/18]
### Additions
- Added Test Script

### Fixes
- Fixed Circle Area Code

## v0.2.0 [8/14/18]
### Additions
- Added Basic Functionality for: 
    - Lines 
    - Triangles
    - Circles

### Fixes
- Changed Some Variables from `const` to `let`.

## v0.1.0 [8/13/18]
### Additions
- Basic Functionality for Squares and Rectangles

## v0.0.3 [8/9/18]
### Additions
- Added Better README

### Fixes
- Fixed ESLint / Codacy Issues

## v0.0.2 [8/9/18]
### Additions
- Area for Squares

## v0.0.1 [8/8/18]
### Additions
- Test Code
