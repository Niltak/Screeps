var spawningHarvester = {

    run: function(spawnRoomName, control, creepBody, nodeNum) {

        var spawningNow = false;

        if (control == 1) {

            spawningNow = true;

        }

        if (control == 2 && spawnRoomName.room.energyAvailable > 400) {
                    
            creepBody = [WORK,WORK,CARRY,MOVE,MOVE]; //---300energy

            spawningNow = true;
                    
        }
                
        else if (control > 2 && spawnRoomName.room.energyAvailable > 550) {
                    
            creepBody = [WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE]; //---450energy

            spawningNow = true;
                    
        }

        if (spawningNow) {

            console.log('New harvester');

            var newNameHarvester = spawnRoomName.createCreep(creepBody,
                                'harvester' + Game.time.toString(),
                                {role: 'harvester', spawnRoom: spawnRoomName.name, job: 'harvesting', node: nodeNum});

        }

        else {

            //console.log('harvester failed ' + spawnRoomName.energyAvailable);

        }

    }

};

module.exports = spawningHarvester;