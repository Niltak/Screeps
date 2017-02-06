var spawningMaintainer = {

    run: function(spawnRoomName, control, creepBody) {

        var spawningNow = false;

        if (control == 1) {

            spawningNow = true;

        }

        if (control == 2 && spawnRoomName.room.energyAvailable > 350) {
                    
            creepBody = [WORK,CARRY,MOVE,MOVE]; //---250energy

            spawningNow = true;
                    
        }
                
        else if (control > 2 && spawnRoomName.room.energyAvailable > 600) {
                    
            creepBody = [WORK,CARRY,CARRY,MOVE,MOVE,MOVE]; //---500energy

            spawningNow = true;
                    
        }

        if (spawningNow) {

            console.log('New maintainer');

            var newNameTransporter = spawnRoomName.createCreep(creepBody,
                                'maintainer' + Game.time.toString(),
                                {role: 'maintainer', spawnRoom: spawnRoomName.name, job: 'gettingEnergy'});

        }

        else {

            //console.log('transporter failed ' + spawnRoomName.room.energyAvailable);

        }

    }

};

module.exports = spawningMaintainer;