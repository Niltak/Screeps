var jobTransporting = require('job.transporting');
var	jobStoring = require('job.storing');

var roleTransporter = {

    run: function(creep) {

    	//var path = undefined;

    	if (creep.memory.pathing == undefined) {

    		creep.memory.pathing = '2429555545555556565445';

    	}

    	//---Setting up Jobs

	    if (creep.memory.job != 'pickingup' && creep.carry.energy == 0) {

            creep.memory.job = 'pickingup';
                
            creep.memory.pathing = '2429555545555556565445';

	    }

	    else if (creep.memory.job != 'droppingoff' && creep.carry.energy == creep.carryCapacity) {

	        creep.memory.job = 'droppingoff';

	        //var path = creep.pos.findPathTo(Game.getObjectById('f2ae4ff54f0057a'));

	        //console.log(Room.serializePath(path));
                
            creep.memory.pathing = '2444881221111118818123';

	    }

	    //---Running Jobs

	    if (creep.memory.job == 'pickingup') {

	    	jobTransporting.run(creep);

	    }

	    else if (creep.memory.job == 'droppingoff') {

	    	jobStoring.run(creep);
	    	
	    }

	    else {

	    	console.log('roleTransporter Jobs not getting set!');

	    	creep.memory.job = 'droppingoff';

	    }

	}

};

module.exports = roleTransporter;