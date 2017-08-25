
module.exports = {

    run: function() {

        //Clear Memory

        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('RIP', name);
            }
        }
        
        //Count Harvesters
        
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        
        //If Harvesters < 3, Spawn more
        
        if(harvesters.length < 3) {

            //Spawn Creeps with less parts if Creeps die

            if(harvesters.length == 0) {
                if(Game.spawns['JoshSpawn'].canCreateCreep([WORK, CARRY, MOVE], undefined) == OK) {
                    var newName = Game.spawns['JoshSpawn'].createCreep([WORK, CARRY, MOVE], undefined, {role: 'harvester'});
                    console.log('Spawning new harvester: ' + newName);
                }
            }
                
            //Spawn Creeps with more parts if I have more creeps

            else {
                if(Game.spawns['JoshSpawn'].canCreateCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE], undefined) == OK) {
                    var newName = Game.spawns['JoshSpawn'].createCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'harvester'});
                    console.log('Spawning new harvester: ' + newName);
                }
            }           
        }

        //Prioritize Harvesters
        
        else {
            
            //Count Repairers
        
            var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repair');
            
            //If Repairers < 0, Spawn more
        
            if(repairers.length < 0) {
                if(Game.spawns['JoshSpawn'].canCreateCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], undefined) == OK) {
                    var newName = Game.spawns['JoshSpawn'].createCreep([WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE], undefined, {role: 'repair'});
                    console.log('Spawning new repairer: ' + newName);
                }
            }

            //Prioritize Repairers

            else {
                //Count Upgraders
            
                var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
            
                //If Upgraders < 12, Spawn more
            
                if(upgraders.length < 12) {
                    if(Game.spawns['JoshSpawn'].canCreateCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], undefined) == OK) {
                        var newName = Game.spawns['JoshSpawn'].createCreep([WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'upgrader'});
                        console.log('Spawning new upgrader: ' + newName);
                    }
                }
            
                //Count Builders
            
                var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
                
                //If Builders < 1, Spawn more
                
                if(builders.length < 1) {
                    if(Game.spawns['JoshSpawn'].canCreateCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], undefined) == OK) {
                        var newName = Game.spawns['JoshSpawn'].createCreep([WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'builder'});
                        console.log('Spawning new builder: ' + newName);
                    }
                }
            }
        }
    }
}