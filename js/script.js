$(function () {

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
		settings : {
			genderRatio : 8
		}
	};

	/* Set NPC gender
	 * 80% chance to generate a man
	-------------------------------------------------- */
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
	}

	npc.gender = setGender();

	console.log(npc);
});
