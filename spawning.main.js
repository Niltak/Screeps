var spawningHarvester = require('spawning.harvester');
var spawningBuilder = require('spawning.builder');
var spawningTransporter = require('spawning.transporter');
var spawningUpgrader = require('spawning.upgrader');
var spawningAttacker = require('spawning.attacker');

var spawningMain = {

    run: function(spawnName) {

        var spawnRoomName = Game.spawns[spawnName];
        var control = Game.spawns[spawnName].room.controller.level;
        var creepBody = [WORK,CARRY,MOVE];
        var energyNeeded = 0;

        if (control == 1) {

            var energyNeeded = 300;

        }

        else if (control > 1) {

            var energyNeeded = 400;

        }
        
        if (spawnRoomName.room.energyAvailable >= energyNeeded && !(spawnRoomName.hasOwnProperty.spawning)) {

            var howManyHarvesters = 2;
            var howManyUpgraders = 1;
            var howManyBuilders = 0;
            var howManyTransporters = 0;
                
            if (control == 2) {
                    
                howManyHarvesters = 2;
                howManyUpgraders = 2;
                howManyBuilders = 2;
                    
            }
                
            else if (control > 2) {
                    
                howManyHarvesters = 2;
                howManyUpgraders = 1;
                howManyBuilders = 2;
                howManyTransporters = 3;
                    
            }
                
            var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
            var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
            var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
            var transporters = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter');

            if ((harvesters.length + upgraders.length + builders.length + transporters.length) > 2) {

                if (harvesters.length < howManyHarvesters) {
                    spawningHarvester.run(spawnRoomName, control, creepBody);
                }        
                else if (upgraders.length < howManyUpgraders) {
                    spawningUpgrader.run(spawnRoomName, control, creepBody);
                }            
                else if (builders.length < howManyBuilders) {
                    spawningBuilder.run(spawnRoomName, control, creepBody);
                }
                else if (transporters.length < howManyTransporters) {
                    spawningTransporter.run(spawnRoomName, control, creepBody);
                }

            }

            else { //---Emergency Fall Back

                console.log('something is broken');
                //var newNameHarvester = spawnRoomName.createCreep(creepBody,
                            //'harvester' + Game.time.toString(),
                            //{role: 'harvester', spawnRoom: spawnName, job: 'harvesting'});

            }

        }

    }
    
};

module.exports = spawningMain;