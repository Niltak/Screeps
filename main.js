var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var spawningMain = require('spawning.main');
var roleAttacker = require('role.attacker');
var roleTransporter = require('role.transporter');
var roleMaintainer = require('role.maintainer');

module.exports.loop = function () {

    var tower = Game.getObjectById('e1555a7a22bb30d');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => (structure.hits < (structure.hitsMax - 1000) && !(structure.structureType == 'constructedWall'))
        });

        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

    spawningMain.run('Spawn1');

    /*

    var creepRenewing = spawn1.pos.findInRange(FIND_MY_CREEPS, 3);
    
    if(creepRenewing.length > 0 && !(control.hasOwnProperty.spawning) && (creepRenewing[0].ticksToLive < 400)) {
    
        spawn1.renewCreep(creepRenewing[0]);

    }

    */

    for (var i in Memory.creeps) {
        if (!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
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
        if(creep.memory.role == 'transporter') {
            roleTransporter.run(creep);
        }
        if(creep.memory.role == 'maintainer') {
            roleMaintainer.run(creep);
        }
    }
}