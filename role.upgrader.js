var jobUpgrading = require('job.upgrading');
var jobTransporting = require('job.transporting');

var roleUpgrader = {

    run: function(creep) {

        //---Setting up Jobs

        if (creep.memory.job != 'harvesting' && creep.carry.energy == 0) {
            
            creep.memory.job = 'harvesting';

        }

        else if (creep.memory.job != 'upgrading' && creep.carry.energy == creep.carryCapacity) {
            
            creep.memory.job = 'upgrading';

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