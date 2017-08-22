
module.exports = {

    run: function() {

        //Clear Memory

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
        
        if(harvesters.length < 4) {

            //Spawn Creeps with less parts if Creeps die

            if(harvesters.lenght == 0){var newName = Game.spawns['JoshSpawn'].createCreep([WORK, CARRY, MOVE], undefined, {role: 'harvester'});
                console.log('Spawning new harvester: ' + newName);
            }
                
            //Spawn Creeps with more parts if I have more creeps

            else {
                var newName = Game.spawns['JoshSpawn'].createCreep([WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'harvester'});
                console.log('Spawning new harvester: ' + newName);
            }        
        }

        //Prioritize Harvesters
        
        else {
        
            //Count Upgraders
        
            var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
            console.log('Upgraders: ' + upgraders.length);
        
            //If Upgraders < 12, Spawn more
        
            if(upgraders.length < 12) {
                var newName = Game.spawns['JoshSpawn'].createCreep([WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'upgrader'});
                console.log('Spawning new upgrader: ' + newName);
            }
        
            //Count Builders
        
            var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
                console.log('Builders: ' + builders.length);
            
            //If Builders < 0, Spawn more
            
            if(builders.length < 0) {
                var newName = Game.spawns['JoshSpawn'].createCreep([WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'builder'});
                console.log('Spawning new builder: ' + newName);
            }
        }
    }
};