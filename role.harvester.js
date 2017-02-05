var jobHarvesting = require('job.harvesting');
//var jobStoring = require('job.storing');
var jobDropMining = require('job.dropmining');

var roleHarvester = {

    run: function(creep) {

        //---Setting up Jobs

        if (creep.memory.job != 'harvesting' && creep.carry.energy == 0) {

            creep.memory.job = 'harvesting';

        }

        else if (creep.memory.job != 'storing' && creep.carry.energy == creep.carryCapacity) {

            creep.memory.job = 'storing';

        }

        //---Running Job

        if (creep.memory.job == 'harvesting') {

            jobHarvesting.run(creep);

        }

        else if (creep.memory.job == 'storing') {

            //jobStoring.run(creep);
            jobDropMining.run(creep);

        }

    }

};

module.exports = roleHarvester;