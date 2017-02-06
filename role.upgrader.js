var jobUpgrading = require('job.upgrading');
var jobTransporting = require('job.transporting');

var roleUpgrader = {

    run: function(creep) {

        if (creep.memory.path == undefined) {

            creep.memory.path = '2526222221111111111818124';

        }

        //---Setting up Jobs

        if (creep.memory.job != 'harvesting' && creep.carry.energy == 0) {
            
            creep.memory.job = 'harvesting';

            //var path = creep.pos.findPathTo(Game.getObjectById('5b260771a0b2dae'));

            //console.log(Room.serializePath(path));

            creep.memory.path = '281028124';

        }

        else if (creep.memory.job != 'upgrading' && creep.carry.energy == creep.carryCapacity) {
            
            creep.memory.job = 'upgrading';

            //var path = creep.pos.findPathTo(Game.getObjectById('5b260771a0b2dae'));

            //creep.memory.path = Room.serializePath(path);

            //creep.memory.path = '25271222111111111111288124';

            //creep.memory.path = '25271222111111111111118124';

            creep.memory.path = '252712222811111111'

        }

        //---Running Job

        if (creep.memory.job == 'upgrading') {

            jobUpgrading.run(creep);

        }

        else if (creep.memory.job == 'harvesting') {

            jobTransporting.run(creep);

        }

    }

};

module.exports = roleUpgrader;