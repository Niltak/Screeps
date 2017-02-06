var jobHarvesting = require('job.harvesting');

var jobTransporting = {

    run: function(creep) {
  
	    var mainContainer = Game.getObjectById('23e66a075f8b91b');
        

        if (creep.memory.role == 'transporter' /* || creep.memory.role == 'builder' */ ) {

            if (mainContainer.store[RESOURCE_ENERGY] > 800) {

                //console.log('if correct');

                if (creep.withdraw(mainContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {

                    if (creep.moveByPath(creep.memory.pathing) == ERR_NOT_FOUND) {

                        creep.moveTo(mainContainer);

                    }

                }

            }

            else {

                //console.log('not enough energy in main tank');
                jobHarvesting.run(creep);

            } 

        }

        else /* if (creep.memory.role == 'upgrader') */ {

            var storingEnergy = creep.room.storage;

            if (storingEnergy.store[RESOURCE_ENERGY] > 150) {

                //console.log('if correct');

                if (creep.withdraw(storingEnergy, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {

                    creep.moveTo(storingEnergy);

                }

            }

            else {

                //console.log('not enough energy in upgraders tank');
                jobHarvesting.run(creep);

            } 

        }

	}

};

module.exports = jobTransporting;