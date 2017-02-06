var jobHarvesting = {

    run: function(creep) {

        //console.log('job correct')

        var sources = false;
        var containerTwo = false;

        if (creep.memory.role == 'harvester' && creep.memory.node == '1') {

            sources = Game.getObjectById('b6160771a0bff6a');

        }

        else if (creep.memory.role == 'harvester' && creep.memory.node == '2') {

            sources = Game.getObjectById('c1090771a0be939');

        }

        else {

            containerTwo = Game.getObjectById('5b02f26530fb300');

        }
            
        if (sources) {

            if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {

                creep.moveTo(sources);

            }

        }

        else {

            if (creep.withdraw(containerTwo, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {

                creep.moveTo(containerTwo);

            }

        }

    }

};

module.exports = jobHarvesting;