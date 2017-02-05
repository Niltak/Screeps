var jobDropMining = {

    run: function(creep) {

        var mainContainer = Game.getObjectById('23e66a075f8b91b');

        if (mainContainer.store[RESOURCE_ENERGY] < 1900) {


	        if (!((creep.pos.x == mainContainer.pos.x) && (creep.pos.y == mainContainer.pos.y))) {

	            creep.moveTo(mainContainer.pos.x, mainContainer.pos.y);

	        }

	        else {

	        	creep.drop(RESOURCE_ENERGY);

	        }

    	}

    	else {

    		//console.log('container is full')

    	}

	}

};

module.exports = jobDropMining;