var jobUpgrading = require('job.upgrading');
//var jobBuilding = require('job.building');
var jobDropMining = require('job.dropmining');

var jobStoring = {

    run: function(creep) {

        //console.log('job correct')

        var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_SPAWN ||
                            structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_TOWER)
                            && structure.energy < structure.energyCapacity;
                    }
        });

        var spawns = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => { 
                    return (structure.structureType == STRUCTURE_SPAWN)
                            && structure.energy < structure.energyCapacity;
                }
        });

        var extensions = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => { 
                    return (structure.structureType == STRUCTURE_EXTENSION)
                    && structure.energy < structure.energyCapacity;
                }
        });

        var towers = Game.getObjectById('e1555a7a22bb30d')

        if (towers.energy < 600 && !(creep.memory.towerRefill)) {

            for (var name in Game.creeps) {

                var creeping = Game.creeps[name];

                creeping.memory.towerRefill = true;

            }

        }

        if (towers.energy == towers.energyCapacity && creep.memory.towerRefill) {
    
            for (var name in Game.creeps) {

                var creeping = Game.creeps[name];

                creeping.memory.towerRefill = false;

            }

        }
        
            
        if (spawns.length || extensions.length || creep.memory.towerRefill) {

            if (extensions.length) {

                if (creep.transfer(extensions[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {

                    creep.moveTo(extensions[0]);

                }

            }

            else if (spawns.length) {

                if (creep.transfer(spawns[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {

                    creep.moveTo(spawns[0]);

                }

            } 

            else if (creep.memory.towerRefill) {

                if (creep.transfer(towers, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {

                    creep.moveTo(towers);

                }

            } 

        }

        else {

            var upgradersContainer = Game.getObjectById('f2ae4ff54f0057a');

            if (upgradersContainer.store[RESOURCE_ENERGY] < 1900) {

                if (!((creep.pos.x == upgradersContainer.pos.x) && (creep.pos.y == upgradersContainer.pos.y))) {

                    creep.moveTo(upgradersContainer.pos.x, upgradersContainer.pos.y);

                }

                else {

                    creep.drop(RESOURCE_ENERGY);

                }

            }

        }

    }

};

module.exports = jobStoring;