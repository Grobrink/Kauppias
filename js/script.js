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
		hitPoints: 0,
		alignement: '',
		race: '',
		subrace: '',
		language: [],
		wealth: '',
		treasure: 0,
		str: 0,
		dex: 0,
		con: 0,
		int: 0,
		wis: 0,
		cha: 0,
		settings: {
			genderRatio: 8
		}
	};

	var nameList = {
		Human: {
			subraces: {
				Calishite: {
					male: ['Aseir', 'Bardeid', 'Haseid', 'Khemed', 'Mehmen', 'Sudeiman', 'Zasheir'],
					female: ['Atala', 'Ceidil', 'Hama', 'Jasmal', 'Meilil', 'Seipora', 'Yasheira', 'Zasheida'],
					lastnames: ['Basha', 'Dumein', 'Jassan', 'Khalid', 'Mostana', 'Pashar', 'Rein']
				},
				Chondathan: {
					male: ['Darvin', 'Dorn', 'Evendur', 'Gorstag', 'Grim', 'Helm', 'Malark', 'Morn', 'Randal', 'Stedd'],
					female: ['Arveene', 'Esvele', 'Jhessail', 'Kerri', 'Lureene', 'Miri', 'Rowan', 'Shandri', 'Tessele'],
					lastnames: ['Amblecrown', 'Buckman', 'Dundragon', 'Evenwood', 'Greycastle', 'Tallstag']
				},
				Damaran: {
					male: ['Bor', 'Fodel', 'Glar', 'Grigor', 'Igan', 'Ivor', 'Kosef', 'Mival', 'Orel', 'Pavel', 'Sergor'],
					female: ['Alethra', 'Kara', 'Katernin', 'Mara', 'Natali', 'Olma', 'Tana', 'Zora'],
					lastnames: ['Bersk', 'Chernin', 'Dotsk', 'Kulenov', 'Marsk', 'Nemetsk', 'Shemov', 'Starag']
				},
				Illuskan: {
					male: ['Ander', 'Blath', 'Bran', 'Frath', 'Geth', 'Lander', 'Luth', 'Malcer', 'Stor', 'Taman', 'Urth'],
					female: ['Amafrey', 'Betha', 'Cefrey', 'Kethra', 'Mara', 'Olga', 'Silifrey', 'Westra'],
					lastnames: ['Brightwood', 'Helder', 'Hornraven', 'Lackman', 'Stormwind', 'Windrivver']
				},
				Mulan: {
					male: ['Aoth', 'Bareris', 'Ehput-Ki', 'Kethoth', 'Mumed', 'Ramas', 'So-Kehur', 'Thazar-De', 'Urhur'],
					female: ['Arizima', 'Chathi', 'Nephis', 'Nulara', 'Murithi', 'Sefris', 'Thola', 'Umara', 'Zolis'],
					lastnames: ['Ankhalab', 'Anskuld', 'Fezim', 'Hahpet', 'Nathandem', 'Sepret', 'Uuthrakt']
				},
				Rashemi: {
					male: ['Borivik', 'Faurgar', 'Jandar', 'Kanithar', 'Madislak', 'Ralmevik', 'Shaumar', 'Vladislak'],
					female: ['Fyevarra', 'Hulmarra', 'Immith', 'Imzel', 'Navarra', 'Shevarra', 'Tammith', 'Yuldra'],
					lastnames: ['Chergoba', 'Dyernina', 'Iltazyara', 'Murnyethara',  'Stayanoga', 'Ulmokina']
				},
				Shou: {
					male: ['An', 'Chen', 'Chi', 'Fai', 'Jiang', 'Jun', 'Lian', 'Long', 'Meng', 'On', 'Shan', 'Shui', 'Wen'],
					female: ['Bai', 'Chao', 'Jia', 'Lei', 'Mei', 'Qiao', 'Shui', 'Tai'],
					lastnames: ['Chien', 'Huang', 'Kao', 'Kung', 'Lao', 'Ling', 'Mei', 'Pin', 'Shin', 'Sum', 'Tan', 'Wan']
				},
				Tethyrian: {
					male: ['Darvin', 'Dorn', 'Evendur', 'Gorstag', 'Grim', 'Helm', 'Malark', 'Morn', 'Randal', 'Stedd'],
					female: ['Arveene', 'Esvele', 'Jhessail', 'Kerri', 'Lureene', 'Miri', 'Rowan', 'Shandri', 'Tessele'],
					lastnames: ['Amblecrown', 'Buckman', 'Dundragon', 'Evenwood', 'Greycastle', 'Tallstag']
				},
				Turami: {
					male: ['Anton', 'Diero', 'Marcon', 'Pieron', 'Rimardo', 'Romero', 'Salazar', 'Umbero'],
					female: ['Balama', 'Dona', 'Faila', 'Jalana', 'Luisa', 'Marta', 'Quara', 'Selise', 'Vonda'],
					lastnames: ['Agosto', 'Astorio', 'Calabra', 'Domine',  'Falone', 'Marivaldi', 'Pisacar', 'Ramondo']
				}
			}
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
	};

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
	 * Set NPC subrace
	 * @return {string} The Merchant npc subrace
	 */
	var setSubrace = function(race) {

		var subrace = '',
				subraceRoll = roll(0, 100, 0);

		switch(race) {
			case 'Human':
				if (subraceRoll <= 65) {
					subrace = npc.subrace = 'Chondathan';
				}
				else if (subraceRoll <= 75){
					subrace = npc.subrace = 'Tethyrian';
				}
				else if (subraceRoll <= 85){
					subrace = npc.subrace = 'Calishite';
				}
				else if (subraceRoll <= 90){
					subrace = npc.subrace = 'Illuskan';
				}
				else if (subraceRoll <= 96){
					subrace = npc.subrace = 'Turami';
				}
				else if (subraceRoll <= 97){
					subrace = npc.subrace = 'Rashemi';
				}
				else if (subraceRoll <= 98){
					subrace = npc.subrace = 'Shou';
				}
				else if (subraceRoll <= 99){
					subrace = npc.subrace = 'Damaran';
				}
				else if (subraceRoll <= 100){
					subrace = npc.subrace = 'Mulan';
				}
			break;
		}

		return subrace;
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

		setSubrace(race);

		return race;
	};

	/**
	 * Set NPC Name
	 * @return {string} The Merchant npc name
	 */
	var setName = function(gender, race) {

		var firstnames,
				lastnames;

		if (typeof nameList[race]['subraces'] != 'undefined') {

			var subrace = npc.subrace;

			firstnames = nameList[race]['subraces'][npc.subrace][gender];
			lastnames = nameList[race]['subraces'][npc.subrace]['lastnames'];
		}
		else {

			firstnames = nameList[race][gender];
			lastnames = nameList[race]['lastnames'];
		}

		var	firstnamesLength = firstnames.length,
				lastnamesLength = lastnames.length,
				firstnameRoll = roll(0, firstnamesLength, 0),
				lastnameRoll = roll(0, lastnamesLength, 0);

		return firstnames[firstnameRoll] + ' ' + lastnames[lastnameRoll];
	};

	/**
	 * Set NPC hit points
	 * @return {integer} return hit points
	 */
	var setHP = function() {
		var hpRoll = roll(1, 8, 0) + roll(1, 8, 0);

		return hpRoll;
	};

	/**
	 * Set all attribute scores
	 */
	var setAttributes = function() {

		var index = 0,
				length = 4,
				lowerRoll = 24, // Set a bigger value than possible by rolls
				currentRoll,
				totalRoll = 0;
		for(index; index < length; index++) {
			currentRoll = roll(1, 6, 0);
			
			totalRoll += currentRoll;

			if (currentRoll < lowerRoll) {
				lowerRoll = currentRoll;
			}
		}

		totalRoll -= lowerRoll;

		return totalRoll;
	};

	/**
	 * Get attribute modifier
	 * @param  {int} An attribute value
	 * @return {string}       return the modifier with her sign
	 */
	var getAttributeModifier = function(value) {
		var value = (value - 10) / 2;

		value = (value < 0) ? Math.floor((value % 2) ? value : value - 1) : '+' + Math.floor(value);

		return String(value);
	}

	npc.gender = setGender();
	npc.race = setRace();
	npc.name = setName(npc.gender, npc.race);
	npc.hitPoints = setHP;
	npc.str = setAttributes();
	npc.dex = setAttributes();
	npc.con = setAttributes();
	npc.int = setAttributes();
	npc.wis = setAttributes();
	npc.cha = setAttributes();

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
		$('.str').text(npc.str);
		$('.dex').text(npc.dex);
		$('.con').text(npc.con);
		$('.int').text(npc.int);
		$('.wis').text(npc.wis);
		$('.cha').text(npc.cha);

		// Set caracteristics modifier
		$('.str-modifier').text(getAttributeModifier(npc.str));
		$('.dex-modifier').text(getAttributeModifier(npc.dex));
		$('.con-modifier').text(getAttributeModifier(npc.con));
		$('.int-modifier').text(getAttributeModifier(npc.int));
		$('.wis-modifier').text(getAttributeModifier(npc.wis));
		$('.cha-modifier').text(getAttributeModifier(npc.cha));
	};

	fillBlock();

	console.log(npc);
});
