var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepair = require('role.repair');
var spawncode = require('spawncode');
var towercode = require('towercode');
var consoleLog = require('console.log');

//var roleRepair = require('role.repair')

module.exports.loop = function () {

    spawncode.run();
    towercode.run();
    consoleLog.run();


    //Spawn Info

    if(Game.spawns['JoshSpawn'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['JoshSpawn'].spawning.name];
        Game.spawns['JoshSpawn'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['JoshSpawn'].pos.x + 1, 
            Game.spawns['JoshSpawn'].pos.y, 
            {align: 'left', opacity: 0.8});
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
        if(creep.memory.role == 'repair') {
            roleRepair.run(creep);
        }
    }
}
