var jobUpgrading = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if (creep.memory.role == 'upgrader') {

        	if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {

	            if (creep.moveByPath(creep.memory.path) == ERR_NOT_FOUND) {

                    creep.moveTo(creep.room.controller);

                }

	        }

        }

        else {

			if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {

	            	creep.moveTo(creep.room.controller);

	        }

	    }

	}

};

module.exports = jobUpgrading;