var creepRespawn = {

    run: function(spawnName) {

        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var control = Game.spawns.Spawn1.room.controller;

        if (harvesters.length < 1) {
            var newNameHarvester = Game.spawns[spawnName].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
            console.log('Spawning new harvester: ' + newNameHarvester);
        }
    
        else if (upgraders.length < 1) {
            var newNameUpgrader = Game.spawns[spawnName].createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
            console.log('Spawning new upgrader: ' + newNameUpgrader);
        }
        
        else if (builders.length < 1) {
            var newNameBuilder = Game.spawns[spawnName].createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
            console.log('Spawning new builder: ' + newNameUpgrader);
        }
        
        else if (control.level > 1) {
            
            console.log('level > 1');
            
            if (control.level == 2) {
                
                Game.spawns.Spawn1.room.createConstructionSite((Game.spawns.Spawn1.pos.x + 1), (Game.spawns.Spawn1.pos.y + 1), STRUCTURE_EXTENSION);
                console.log('Creating Construction Site');
                
            }
            
            else if (control.level > 2) {
                
                Room.createConstructionSite;
                console.log('Creating Higher level Construction Site');
                
            }
            
        }
        
    }
    
};

module.exports = creepRespawn;