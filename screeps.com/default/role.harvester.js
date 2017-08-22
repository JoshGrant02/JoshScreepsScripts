var roleHarvester = {
    
        /** @param {Creep} creep **/
        run: function(creep) {
            if(creep.carry.energy < creep.carryCapacity) {
               // var sources = creep.room.find(FIND_SOURCES);
                var sources = Game.getObjectById('5982fc5fb097071b4adbd47c')
                if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources), {visualizePathStyle: {stroke: '#ffaa00'}};
                }
            }
            else {
                var targets = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                                structure.energy < structure.energyCapacity;
                        }
                });
                if(targets.length > 0) {
                    if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
            }
        }
    };
    
    module.exports = roleHarvester;