
/**
 * Kauppias is a specific class
 * extending Inkubator to generate Merchant NPC
 */
function Kauppias() {

  // Call the parent constructor
  Inkubator.call(this);
}

// Import Utils
var utils = new Utils();

Kauppias.prototype = new Inkubator();

// correct the constructor pointer because it points to Inkubator
Kauppias.prototype.constructor = Kauppias;

Kauppias.prototype.hierarchyReferences = [
	'UpperCity',
	'LowerCity',
	'OuterCity',
	'Street'
];

Kauppias.prototype.hierarchy = {
	'UpperCity': {
		0: {
			ratio: 10,
			name: 'Master'
		},
		1: {
			ratio: 40,
			name: 'Companion'
		},
		2: {
			ratio: 60,
			name: 'Novice'
		},
		3: {
			ratio: 70,
			name: 'Seller'
		},
		4: {
			ratio: 100,
			name: 'Shipper'
		}
	},
	'LowerCity': {
		0: {
			ratio: 20,
			name: 'Master'
		},
		1: {
			ratio: 60,
			name: 'Companion'
		},
		2: {
			ratio: 80,
			name: 'Novice'
		},
		3: {
			ratio: 100,
			name: 'Shipper'
		}
	},
	'OuterCity': {
		0: {
			ratio: 75,
			name: 'Owner'
		},
		1: {
			ratio: 85,
			name: 'Seller'
		},
		2: {
			ratio: 100,
			name: 'Shipper'
		}
	},
	'Street': {
		0: {
			ratio: 100,
			name: 'Seller'
		}
	}
};


/**
 * Set npc hierarchy
 * @return {string} return the npc hierarchy in the shop or guild
 */
Kauppias.prototype.setHierarchy = function() {

	var title,
		hierarchyRoll = utils.roll(1, 100, 0);

	// Get reference string
	var referenceStr = Kauppias.prototype.hierarchyReferences[utils.roll(0, Kauppias.prototype.hierarchyReferences.length, 0)];

	// Get neighbourhood properties
	var neighbourhood = Kauppias.prototype.hierarchy[referenceStr];

	// Get title
	var index = 0,
		length = Object.keys(neighbourhood).length,
		title,
		currentNeighbourhood;
	for(index; index < length; index++) {

		currentNeighbourhood = neighbourhood[index];
		if (hierarchyRoll <= currentNeighbourhood.ratio) {

			title = currentNeighbourhood.name;
			break;
		}
	}

	Kauppias.prototype.npc.hierarchy = title;
	return title;
};
