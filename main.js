var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var creepRespawn = require('creep.respawn');

console.log('testing github go go go');

module.exports.loop = function () {

    var tower = Game.getObjectById('742be05fa93d984b9fdcb527');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }
    
    var spawn1 = Game.spawns['Spawn1'];
    var control = Game.spawns.Spawn1.room.controller;
    
    if(spawn1.energy == spawn1.energyCapacity && !(control.hasOwnProperty.spawning)) {

        creepRespawn.run('Spawn1');
    
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}