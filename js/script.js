$(function () {

	/**
	 * Get a random valuebetween min and max plus modifier
	 * @param {int} min is the minimal value
	 * @param {int} max is the maximum value
	 * @param {int} modifier is a positive or negative modifier
	 * @return {string} The random value
	 */
	var roll = function(min, max, modifier) {
		return Math.floor((Math.random() * max) + min + modifier);
	};

	var npc = {
		gender: '',
		firstName: '',
		lastName: '',
		level: 0,
		hitPoint: 0,
		Alignement: '',
		Race: '',
		language: [],
		wealth: '',
		treasure: 0,
		settings: {
			genderRatio: 8
		}
	};

	var dwarfNames = [
	'Adrik', 'Alberich', 'Baern', 'Barendd', 'Brottor', 'Bruenor', 'Dain', 'Darrak', 'Delg', 'Eberk', 'Einkil', 'Fargrim', 'Flint', 'Gardain', 'Harbek', 'Kildrak', 'Morgran', 'Orsik', 'Oskar', 'Rangrim', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Veit', 'Vondal'
	];

	/* Set NPC gender
	 * 80% chance to generate a man
	-------------------------------------------------- */

	/**
	 * Set NPC gender
	 * 80% chance to generate a man
	 * @return {string} The Merchant npc gender
	 */
	var setGender = function() {

		var gender = '',
			genderRoll = roll(1, 10, 0);

		if (genderRoll <= npc.settings.genderRatio ) {
			gender = 'man'
		}
		else {
			gender = 'woman'
		}

		return gender;
	};

	/**
	 * Set NPC race
	 * 80% chance to generate a man
	 * @return {string} The Merchant npc race
	 */
	var setRace = function() {
		var race = '';

		var raceRoll = roll(1, 100, 0);

		if (raceRoll <= 82) {
			race = 'Human';
		}
		else if (raceRoll <= 91) {
			race = 'Dwarf';
		}

		else if (raceRoll <= 96) {
			race = 'Halfelin';
		}
		else {
			race = 'Elf';
		}

		return race;
	};

	npc.gender = setGender();
	npc.race = setRace();

	console.log(npc);
});
