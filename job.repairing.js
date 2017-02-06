var jobUpgrading = require('job.upgrading');

var jobRepairing = {

    run: function(creep) {

        if (Game.getObjectById(creep.memory.repairOrder) == null || creep.memory.repairOrder == undefined) {

            var closestDamagedStructure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => (structure.hits < structure.hitsMax && structure.structureType == 'constructedWall')
                });
            
            if (closestDamagedStructure == null) {

                jobUpgrading.run(creep);

                console.log('this is null');

            }

            else {

                creep.memory.repairOrder = closestDamagedStructure.id;

                var path = creep.pos.findPathTo(Game.getObjectById(creep.memory.repairOrder));
                
                creep.memory.pathing = Room.serializePath(path);

                console.log('calling');

            }

        }

        else {

            if (creep.repair(Game.getObjectById(creep.memory.repairOrder)) == ERR_NOT_IN_RANGE) {

                    creep.moveByPath(creep.memory.pathing);

                    console.log('calling move');

            }

            else {

                console.log('error here');

            }

        }

	}

};

module.exports = jobRepairing;