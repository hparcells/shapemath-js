# shapemath.js
> A JavaScript Library of math functions for 2D and 3D shapes.

[![https://nodei.co/npm/shapemath-js.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/shapemath-js.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/shapemath-js)

[![Build Status](https://travis-ci.com/hparcells/shapemath-js.svg?branch=master)](https://travis-ci.com/hparcells/shapemath-js)
[![Coverage Status](https://coveralls.io/repos/github/hparcells/shapemath-js/badge.svg?branch=master)](https://coveralls.io/github/hparcells/shapemath-js?branch=master)
[![Netlify Status](https://api.netlify.com/api/v1/badges/72d9e4b5-02fa-4dfc-b314-616468bc9821/deploy-status)](https://app.netlify.com/sites/shapemath-js/deploys)

![npm](https://img.shields.io/npm/dm/shapemath-js)

## Rewrite in Progress
Version `3.x.x` of this package is a rewritten version. I am not currently done, and if you want all of the feautues use the `2.5.0` version until further notice.

### Progress
- [x] Circle
- [x] Ellipse
- [x] Kite
- [x] Line
- [x] Oval
- [x] Rectangle
- [x] Rhombus
- [x] Semicircle
- [x] Square
- [x] Trapezoid
- [x] Triangle
- [ ] Cone
- [ ] Cube
- [ ] Cylinder
- [ ] Hemisphere
- [ ] Rectangular Prism
- [ ] Sphere
- [ ] Square Pyramid
- [ ] Triangular Prism

## Install and Usage
```
npm install shapemath-js
```

```js
// With import statements.
import { line } from 'shapemath-js';

line.isParallel(0, 1, 2, 2, 0, 2, 2, 3);


// Without import statements.
const shapemath = require('shapemath-js');

shapemath.line.isParallel(0, 1, 2, 2, 0, 2, 2, 3);
```

## Documentation
You can read the documentation at https://shapemath-js.netlify.com/ to learn about all the functions.

## Tools Used
- **TypeScript**: JavaScript Typings
- **ESLint**: Code Style and Linting
- **TSLint**: Code Style and Linting
- **Jest**: Testings
- **Coveralls**: Coverage
- **Travis CI**: CI/CD
- **TypeDoc**: Documentation
- **Netlify**: Documentation Hosting
