var dc = [-1, 0, 1, 0];
var dr = [0, -1, 0, 1];

var Node = function (row, col) {
	this.row = row;
	this.col = col;
	this.f = 0;

	this.h = function (target) {
		return (this.row - target[0]) * (this.row - target[0]) + (this.col - target[1]) * (this.col - target[1]);
	}
};
function getMinF(ls) {
	var minF = 100000000;
	var idx = -1;
	for (var i = 0; i < ls.length; i++) {
		if (ls[i].f < minF) {
			minF = ls[i].f;
			idx = i;
		}
	}
	return idx;
}
function findNode(ps, ls) {
	for (var i = 0; i < ls.length; i++) {
		if (ls[i].row == ps[0] && ls[i].col == ps[1])
			return i;
	}
	return -1;
}
var getWay = function (src, trg, xmap) {
	var OPEN = [];
	var CLOSE = [];

	var nSource = new Node(src[0], src[1]);
	// set f(S) = h(S)
	nSource.g = 0;
	nSource.f = nSource.h(trg);
	// step 1: push source node into OPEN
	OPEN.push(nSource);

	// step 2: process until OPEN is empty
	// or until the route is found
	while (OPEN.length > 0) {

		//step 2.1: get the node with min f
		var curIdx = getMinF(OPEN);
		var curNode = OPEN[curIdx];
		OPEN.splice(curIdx, 1);

		// step 2.2: check if the route is found
		if (curNode.row == trg[0] && curNode.col == trg[1])
			return curNode;

		// step 3: find 4 adjacent nodes Mi
		for (var i = 0; i < 4; i++) {
			// step 3.1: check all valid Mi
			var r = curNode.row + dr[i];
			var c = curNode.col + dc[i];
			var Mi;
			if (r >= 0 && r < xmap.length && c >= 0 && c < xmap[0].length && xmap[r][c] != 1) {
				// step 3.2: calculate successor distant 
				var dmi = curNode.g + 1;
				// step 3.3: check if Mi is in OPEN
				var oIdx = findNode([r, c], OPEN);
				if (oIdx >= 0) {
					Mi = OPEN[oIdx];
					// if g(Mi) < d(Mi) => go to step 5
					if (Mi.g < dmi) {
						continue;
					}
				}

				// step 3.4: check if Mi is in OPEN
				var cIdx = findNode([r, c], CLOSE);
				if (cIdx >= 0) {
					Mi = CLOSE[cIdx];
					// step 3.4.1: g(Mi) < d(Mi) => go to step 5
					if (Mi.g < dmi) {
						continue;
					} else {
						// step 3.4.2: move Mi to OPEN
						OPEN.push(CLOSE[cIdx]);
						CLOSE.splice(cIdx, 1);
					}
				}

				//step 3.5: if Mi neither in OPEN nor CLOSE 
				if (oIdx < 0 && cIdx < 0) {
					// step 3.5.1: 
					Mi = new Node(r, c);
					OPEN.push(Mi);
				}

				//step 4: update g(Mi) = d(Mi)
				Mi.g = dmi;
				Mi.f = Mi.g + Mi.h(trg);
				Mi.parent = curNode;
			}
		}

		//step 5: move curNode to CLOSE
		CLOSE.push(curNode);
	}

	return -1;
};
