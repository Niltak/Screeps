var jobHarvesting = require('job.harvesting');

var jobTransporting = {

    run: function(creep) {
  
	    var mainContainer = Game.getObjectById('23e66a075f8b91b');
        var upgradersContainer = Game.getObjectById('f2ae4ff54f0057a');

        if (creep.memory.role == 'transporter' /* || creep.memory.role == 'builder' */ ) {

            if (mainContainer.store[RESOURCE_ENERGY] > 500) {

                //console.log('if correct');

                if (creep.withdraw(mainContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {

                    creep.moveTo(mainContainer);

                }

            }

            else {

                console.log('not enough energy in main tank');
                jobHarvesting.run(creep);

            } 

        }

        else /* if (creep.memory.role == 'upgrader') */ {

            if (upgradersContainer.store[RESOURCE_ENERGY] > 500) {

                //console.log('if correct');

                if (creep.withdraw(upgradersContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {

                    creep.moveTo(upgradersContainer);

                }

            }

            else {

                console.log('not enough energy in upgraders tank');
                jobHarvesting.run(creep);

            } 

        }

	}

};

module.exports = jobTransporting;