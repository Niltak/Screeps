var jobStoring = require('job.storing');
var jobUpgrading = require('job.upgrading');
//var jobRepairing = require('job.repairing');

var jobBuilding = {

    run: function(creep) {

        if (Game.getObjectById(creep.memory.buildOrder) == null || creep.memory.buildOrder == undefined) {

            if (creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES) == null) {

                //jobRepairing.run(creep);
                jobUpgrading.run(creep);

            }

            else {

                creep.memory.buildOrder = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES).id;

                var path = creep.pos.findPathTo(Game.getObjectById(creep.memory.buildOrder));
                
                creep.memory.pathing = Room.serializePath(path);

            }

        }

        else {

            if (creep.build(Game.getObjectById(creep.memory.buildOrder)) == ERR_NOT_IN_RANGE) {

                    //creep.moveByPath(creep.memory.pathing);

                    if (creep.moveByPath(creep.memory.pathing) == ERR_NOT_FOUND) {

                    creep.moveTo(Game.getObjectById(creep.memory.buildOrder));

                }

            }

        }

	}

};

module.exports = jobBuilding;