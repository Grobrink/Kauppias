$(function () {

	// Import Inkubator
	var inkubator = new Inkubator();
	var npc = inkubator.getNpc();

	// Import Utils
	var utils = new Utils();

	var hierarchyReferences = [
		'UpperCity',
		'LowerCity',
		'OuterCity',
		'Street'
	];

	var hierarchy = {
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
	 * @return {string} return the npc hierarchy in the shop
	 */
	var setHierarchy = function() {
		var title,
			hierarchyRoll = utils.roll(1, 100, 0);

		// Get reference string
		var referenceStr = hierarchyReferences[utils.roll(0, hierarchyReferences.length, 0)];

		// Get neighbourhood properties
		var neighbourhood = hierarchy[referenceStr];

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

		npc.hierarchy = title;
		return title;
	}

	/**
	 * Fill the html block
	 */
	var fillBlock = function() {

		// Set name
		$('.name').text(npc.name);

		// Set description
		var $description = $('.description'),
			subraceString = '';

		if ($description.val() != '') {
			$description.text(npc.name);
		}

		if (npc.subrace != '') {
			subraceString = ', ' + npc.subrace;
		}
		$description.text(npc.race + ' ' + npc.gender + subraceString);

		// Set hit points
		$('.hitpoints').text(npc.hitPoints);

		// Set caracteristics
		$('.str').text(npc.attributes.str);
		$('.dex').text(npc.attributes.dex);
		$('.con').text(npc.attributes.con);
		$('.int').text(npc.attributes.int);
		$('.wis').text(npc.attributes.wis);
		$('.cha').text(npc.attributes.cha);

		// Set caracteristics modifier
		$('.str-modifier').text(inkubator.getAttributeModifier(npc.attributes.str));
		$('.dex-modifier').text(inkubator.getAttributeModifier(npc.attributes.dex));
		$('.con-modifier').text(inkubator.getAttributeModifier(npc.attributes.con));
		$('.int-modifier').text(inkubator.getAttributeModifier(npc.attributes.int));
		$('.wis-modifier').text(inkubator.getAttributeModifier(npc.attributes.wis));
		$('.cha-modifier').text(inkubator.getAttributeModifier(npc.attributes.cha));

		// Set passive perception
		$('.perception').text(npc.perception);

		// Set languages
		$('.languages').text(npc.languages);

		// Set Alignment
		$('.alignment').text(npc.alignment);

		// Set hierarchy level
		var descr = $('.description').text();
		$('.description').text(descr + ', '+ setHierarchy());
	};

	fillBlock();

	console.log(npc);
});
