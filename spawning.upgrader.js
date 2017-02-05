var spawningUpgrader = {

    run: function(spawnRoomName, control, creepBody) {

        console.log('upgrader being called ' + control + ' ' + spawnRoomName.room.energyAvailable);

        var spawningNow = false;

        if (control == 1) {

            spawningNow = true;

        }

        if (control == 2 && spawnRoomName.room.energyAvailable > 350) {
                    
            creepBody = [WORK,CARRY,MOVE,MOVE]; //---250energy

            spawningNow = true;
                    
        }
                
        else if (control > 2 && spawnRoomName.room.energyAvailable > 600) {
                    
            creepBody = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE]; //---500energy

            spawningNow = true;
                    
        }

        if (spawningNow) {

            var newNameUpgrader = spawnRoomName.createCreep(creepBody,
                                'upgrader' + Game.time.toString(),
                                {role: 'upgrader', spawnRoom: spawnRoomName.name, job: 'harvesting'});

        }

    }

};

module.exports = spawningUpgrader;