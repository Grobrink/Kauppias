$(function () {

	// Import Inkubator
	var kauppias = new Kauppias();
	var npc = kauppias.getNpc();

	// Import Utils
	var utils = new Utils();

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
		$('.str-modifier').text(kauppias.getAttributeModifier(npc.attributes.str));
		$('.dex-modifier').text(kauppias.getAttributeModifier(npc.attributes.dex));
		$('.con-modifier').text(kauppias.getAttributeModifier(npc.attributes.con));
		$('.int-modifier').text(kauppias.getAttributeModifier(npc.attributes.int));
		$('.wis-modifier').text(kauppias.getAttributeModifier(npc.attributes.wis));
		$('.cha-modifier').text(kauppias.getAttributeModifier(npc.attributes.cha));

		// Set passive perception
		$('.perception').text(npc.perception);

		// Set languages
		$('.languages').text(npc.languages);

		// Set Alignment
		$('.alignment').text(npc.alignment);

		// Set hierarchy level
		var descr = $('.description').text();
		$('.description').text(descr + ', '+ kauppias.setHierarchy());
	};

	fillBlock();

	console.log(npc);
});
