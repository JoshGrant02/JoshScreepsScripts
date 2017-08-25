var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepair = require('role.repair');
var Autospawn = require('Autospawn');

//var roleRepair = require('role.repair')

module.exports.loop = function () {

    
    Autospawn.run();

    if(Game.time % 10 == 0) {
        console.log('-------------------------------------------------------------------');

        //GCL and RCL
        console.log('GCL: ' + Game.gcl.level + ', ' + Game.gcl.progress + ' of ' + Game.gcl.progressTotal);
        for (var r in Game.rooms) {
            console.log(r + ': ' + Game.rooms[r].controller.level + ', ' + Game.rooms[r].controller.progress + ' of ' + Game.rooms[r].controller.progressTotal);

            //Creeps
            var counts = {};
            for(var name in Memory.creeps) {
                if (counts.hasOwnProperty(Game.creeps[name].memory.role))
                    counts[Game.creeps[name].memory.role]++;
                else
                    counts[Game.creeps[name].memory.role] = 1;
            } 
            for(var role in counts) {
                console.log((" " + role + ":        ").substring(0, 14) + counts[role]);
            }   
        }

        console.log('-------------------------------------------------------------------');
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
        if(creep.memory.role == 'repair') {
            roleRepair.run(creep);
        }
    }
}
