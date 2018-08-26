module.exports = {
    isParallel : boolean = function(x1, y1, x2, y2, x3, y3, x4, y4) {
        let slope1 = (y2 - y1) / (x2 - x1);
		let slope2 = (y4 - y3) / (x4 - x3);
		
		return slope1 === slope2;
    },

    isPerpendicular : boolean = function(slope1, slope2) {
        let finalSlope1 = 1 / -slope1;
		
		return finalSlope1 === slope2;
    }

    // TODO: Symmetry
};
