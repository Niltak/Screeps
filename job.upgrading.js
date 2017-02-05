var jobUpgrading = {

    /** @param {Creep} creep **/
    run: function(creep) {

        //console.log('job correct')

		if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {

            	creep.moveTo(creep.room.controller);

        }

	}

};

module.exports = jobUpgrading;