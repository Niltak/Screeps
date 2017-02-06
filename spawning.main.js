var spawningHarvester = require('spawning.harvester');
var spawningBuilder = require('spawning.builder');
var spawningTransporter = require('spawning.transporter');
var spawningUpgrader = require('spawning.upgrader');
var spawningAttacker = require('spawning.attacker');
var spawningMaintainer = require('spawning.maintainer');

var spawningMain = {

    run: function(spawnName) {

        var spawnRoomName = Game.spawns[spawnName];
        var control = Game.spawns[spawnName].room.controller.level;
        var creepBody = [WORK,CARRY,MOVE];
        var energyNeeded = 0;
        var nodeNum = 1;

        if (control == 1) {

            var energyNeeded = 300;

        }

        else if (control > 1) {

            var energyNeeded = 400;

        }
        
        if (/*spawnRoomName.room.energyAvailable >= energyNeeded &&*/ !(spawnRoomName.hasOwnProperty.spawning)) {

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
                    
                howManyHarvesters = 3;
                howManyUpgraders = 4;
                howManyBuilders = 2;
                howManyTransporters = 2;
                howManyMaintainers = 2;
                    
            }
                
            var harvestersNodeOne = _.filter(Game.creeps, (creep) => ((creep.memory.role == 'harvester') && (creep.memory.node == 1)));
            var harvestersNodeTwo = _.filter(Game.creeps, (creep) => ((creep.memory.role == 'harvester') && (creep.memory.node == 2)));
            var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
            var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
            var transporters = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter');
            var maintainers = _.filter(Game.creeps, (creep) => creep.memory.role == 'maintainer');

            if ((harvestersNodeOne.length + upgraders.length + builders.length + transporters.length + harvestersNodeTwo.length) > 2) {

                if ((harvestersNodeOne.length + harvestersNodeTwo.length) < howManyHarvesters && harvestersNodeOne.length < 2) {
                    spawningHarvester.run(spawnRoomName, control, creepBody, nodeNum);
                }
                else if ((harvestersNodeTwo.length + harvestersNodeOne.length) < howManyHarvesters && harvestersNodeOne.length == 2) {
                    nodeNum = '2';
                    spawningHarvester.run(spawnRoomName, control, creepBody, nodeNum);
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
                else if (maintainers.length < howManyMaintainers) {
                    spawningMaintainer.run(spawnRoomName, control, creepBody);
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