var spawningTransporter = {

    run: function(spawnRoomName, control, creepBody) {

        var spawningNow = false;

        if (control == 1) {

            spawningNow = true;

        }

        if (control == 2 && spawnRoomName.room.energyAvailable > 350) {
                    
            creepBody = [WORK,CARRY,MOVE,MOVE]; //---250energy

            spawningNow = true;
                    
        }
                
        else if (control > 2 && spawnRoomName.room.energyAvailable > 750) {
                    
            creepBody = [WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]; //---650energy

            spawningNow = true;
                    
        }

        if (spawningNow) {

            console.log('New transporter');

            var newNameTransporter = spawnRoomName.createCreep(creepBody,
                                'transporter' + Game.time.toString(),
                                {role: 'transporter', spawnRoom: spawnRoomName.name, job: 'pickingup'});

        }

        else {

            //console.log('transporter failed ' + spawnRoomName.room.energyAvailable);

        }

    }

};

module.exports = spawningTransporter;