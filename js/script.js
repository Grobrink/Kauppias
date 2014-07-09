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
		name: '',
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

	var nameList = {
		Human: {
			male: ['Darvin', 'Dorn', 'Evendur', 'Gorstag', 'Grim', 'Helm', 'Malark', 'Morn', 'Randal', 'Stedd'],
			female: ['Arveene', 'Esvele', 'Jhessail', 'Kerri', 'Lureene', 'Miri', 'Rowan', 'Shandri', 'Tessele'],
			lastnames: ['Amblecrown', 'Buckman', 'Dundragon', 'Evenwood', 'Greycastle', 'Tallstag']
		},
		Dwarf: {
			male: ['Adrik', 'Alberich', 'Baern', 'Barendd', 'Brottor', 'Bruenor', 'Dain', 'Darrak', 'Delg', 'Eberk', 'Einkil', 'Fargrim', 'Flint', 'Gardain', 'Harbek', 'Kildrak', 'Morgran', 'Orsik', 'Oskar', 'Rangrim', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Veit', 'Vondal'],
			female: ['Amber', 'Artin', 'Audhild', 'Bardryn', 'Dagnal', 'Diesa', 'Eldeth', 'Falkrunn', 'Finellen', 'Gunnloda', 'Gurdis', 'Helja', 'Hlin', 'Kathra', 'Kristryd', 'Ilde', 'Liftrasa', 'Mardred', 'Riswynn', 'Sannl', 'Torbera', 'Torgga', 'Vistra'],
			lastnames: ['Balderk', 'Battlehammer', 'Brawnanvil', 'Dankil', 'Fireforge', 'Frostbeard', 'Gorunn', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgehr', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart']
		},
		Halfling: {
			male: ['Alton', 'Ander', 'Cade', 'Corrin', 'Eldon', 'Errich', 'Finnan', 'Garret', 'Lindal', 'Lyle', 'Merric', 'Milo', 'Osborn', 'Perrin', 'Reed', 'Roscoe', 'Wellby'],
			female: ['Andry', 'Bree', 'Callie', 'Cora', 'Euphemia', 'Jillian', 'Kithri', 'Lavinia', 'Lidda', 'Merla', 'Nedda', 'Paela', 'Portia', 'Seraphina', 'Shaena', 'Trym', 'Vani', 'Verna'],
			lastnames: ['Brushgather', 'Goodbarrel', 'Greenbottle', 'High-hill', 'Hilltopple', 'Leagallow', 'Tealeaf', 'Thorngage', 'Tosscobble', 'Underbough']
		},
		Elf: {
			male: ['Adran', 'Aelar', 'Aramil', 'Arannis', 'Aust', 'Beiro', 'Berrian', 'Carric', 'Enialis', 'Erdan', 'Erevan', 'Galinndan', 'Hadarai', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Laucian', 'Mindartis', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Thamior', 'Tharivol', 'Theren', 'Varis'],
			female: ['Adrie', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Bethrynna', 'Birel', 'Caelynn', 'Drusilia', 'Enna', 'Felosial', 'Ielenia', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Meriele', 'Mialee', 'Naivara', 'Quelenna', 'Quillathe', 'Sariel', 'Shanairra', 'Shava', 'Silaqui', 'Theirastra', 'Thia', 'Vadania', 'Valanthe', 'Xanaphia'],
			lastnames: ['Amakiir (Gemflower)', 'Amastacia (Starflower)', 'Galanodel (Moonwhisper)', 'Holimion (Diamonddew)', 'Ilphelkiir (Gemblossom)', 'Liadon (Silverfrond)', 'Meliamne (Oakenheel)', 'Naïlo (Nightbreeze)', 'Siannodel (Moonbrook)', 'Xiloscient (Goldpetal)']
		},
	}

	/**
	 * Set NPC gender
	 * 80% chance to generate a man
	 * @return {string} The Merchant npc gender
	 */
	var setGender = function() {

		var gender = '',
			genderRoll = roll(1, 10, 0);

		if (genderRoll <= npc.settings.genderRatio ) {
			gender = 'male'
		}
		else {
			gender = 'female'
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
			race = 'Halfling';
		}
		else {
			race = 'Elf';
		}

		return race;
	};

	var setName = function(gender, race) {
		var firstnames = nameList[race][gender],
				lastnames = nameList[race]['lastnames'],
				firstnamesLength = firstnames.length,
				lastnamesLength = lastnames.length,
				firstnameRoll = roll(0, firstnamesLength, 0),
				lastnameRoll = roll(0, lastnamesLength, 0);

		return firstnames[firstnameRoll] + ' ' + lastnames[lastnameRoll];
	}

	npc.gender = setGender();
	npc.race = setRace();
	npc.name = setName(npc.gender, npc.race);

	console.log(npc);
});
