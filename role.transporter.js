var jobTransporting = require('job.transporting');
var	jobStoring = require('job.storing');

var roleTransporter = {

    run: function(creep) {

    	//---Setting up Jobs

	    if (creep.memory.job != 'pickingup' && creep.carry.energy == 0) {

            creep.memory.job = 'pickingup';

	    }

	    else if (creep.memory.job != 'droppingoff' && creep.carry.energy == creep.carryCapacity) {

	        creep.memory.job = 'droppingoff';

	    }

	    //---Running Jobs

	    if (creep.memory.job == 'pickingup') {

	    	jobTransporting.run(creep);

	    }

	    else if (creep.memory.job == 'droppingoff') {

	    	jobStoring.run(creep);
	    	
	    }

	    else {

	    	console.log('roleTransporter Jobs not getting set!')

	    }

	}

};

module.exports = roleTransporter;