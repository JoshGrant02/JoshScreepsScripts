var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    //Count Harvesters

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);

    //If Harvesters < 3, Spawn more

    if(harvesters.length < 3) {
        var newName = Game.spawns['JoshSpawn'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }
    
     //Count Upgraders

    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);

    //If Upgraders < 6, Spawn more

    if(upgraders.length < 6) {
        var newName = Game.spawns['JoshSpawn'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);
    }

     //Count Builders

     var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
     console.log('Builders: ' + builders.length);
 
     //If Builders < 3, Spawn more
 
    if(builders.length < 3) {
         var newName = Game.spawns['JoshSpawn'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
         console.log('Spawning new builder: ' + newName);
     }

    
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
    }
}
