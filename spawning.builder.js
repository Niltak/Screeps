var spawningBuilder = {

    run: function(spawnRoomName, control, creepBody) {

        console.log('builder being called ' + control);

        var spawningNow = false;

        if (control == 1) {

            spawningNow = true;

        }

        if (control == 2 && spawnRoomName.room.energyAvailable > 350) {
                    
            creepBody = [WORK,CARRY,MOVE,MOVE]; //---250energy

            spawningNow = true;
                    
        }
                
        else if (control > 2 && spawnRoomName.room.energyAvailable > 600) {
                    
            creepBody = [WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]; //---500energy

            spawningNow = true;
                    
        }

        if (spawningNow) {

            var newNameBuilder = spawnRoomName.createCreep(creepBody,
                                'builder' + Game.time.toString(),
                                {role: 'builder', spawnRoom: spawnRoomName.name, job: 'harvesting'});

        }
        
    }

};

module.exports = spawningBuilder;