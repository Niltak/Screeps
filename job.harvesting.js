var jobHarvesting = {

    run: function(creep) {

        //console.log('job correct')

        if (creep.memory.spawnRoom == "Spawn1" && creep.memory.role == "harvester") {

            var sources = Game.getObjectById('b6160771a0bff6a');

        }

        else {

            var sources = Game.getObjectById('c1090771a0be939');

        }
            
        if (sources) {

            if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {

                creep.moveTo(sources);

            }

        }

    }

};

module.exports = jobHarvesting;