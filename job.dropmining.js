var jobDropMining = {

    run: function(creep) {

    	if (creep.memory.node == '1') {

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

	    else if (creep.memory.node == '2') {
	    	
	    	var containerTwo = Game.getObjectById('5b02f26530fb300');

	    	if (!(containerTwo.store[RESOURCE_ENERGY] > (containerTwo.storeCapacity - 100))) {

	    		creep.drop(RESOURCE_ENERGY);

	    	}

	    }

	}

};

module.exports = jobDropMining;