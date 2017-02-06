var jobTransporting = require('job.transporting');
//var jobStoring = require('job.storing');
var jobMaintaining = require('job.maintaining');

var roleMaintainer = {

    run: function(creep) {

     	//---Setting up Jobs

	    if (creep.memory.job != 'gettingEnergy' && creep.carry.energy == 0) {

            creep.memory.job = 'gettingEnergy';

	    }

	    else if (creep.memory.job != 'maintaining' && creep.carry.energy == creep.carryCapacity) {

	        creep.memory.job = 'maintaining';

	    }

	    //---Running Jobs

	    if (creep.memory.job == 'gettingEnergy') {

	    	jobTransporting.run(creep);

	    }

	    else if (creep.memory.job == 'maintaining') {

	    	jobMaintaining.run(creep);
	    	
	    }

	    else {

	    	console.log('roleMaintainer Jobs not getting set!');

	    }

	}

};

module.exports = roleMaintainer;