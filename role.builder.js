var jobBuilding = require('job.building');
//var	jobHarvesting = require('job.harvesting');
var jobTransporting = require('job.transporting');

var roleBuilder = {

    run: function(creep) {

    	//---Setting up Jobs

	    if (creep.memory.job != 'harvesting' && creep.carry.energy == 0) {

            creep.memory.job = 'harvesting';

	    }

	    else if (creep.memory.job != 'building' && creep.carry.energy == creep.carryCapacity) {

	        creep.memory.job = 'building';

	    }

	    //---Running Jobs

	    if (creep.memory.job == 'building') {

	    	//console.log(creep.name + ' building');
	    	jobBuilding.run(creep);

	    }

	    else if (creep.memory.job == 'harvesting') {

	    	//console.log(creep.name + ' harvesting');
	    	jobTransporting.run(creep);
	    	
	    }

	    else {

	    	console.log('RoleBuilder Jobs not getting set!')

	    }

	}

};

module.exports = roleBuilder;