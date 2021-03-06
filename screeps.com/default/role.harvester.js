var roleHarvester = {
    
        /** @param {Creep} creep **/
        run: function(creep) {

            if(creep.carry.energy < creep.carryCapacity) {
                var sources = Game.getObjectById('5982fc5fb097071b4adbd47c')
                if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources), {visualizePathStyle: {stroke: '#00ffff'}};
                }
            }
            
            

            else {

                var tower = creep.room.find(FIND_STRUCTURES, { 
                    filter: (structure) => { return (structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                    }})

                if(tower.length > 0) {
                    if(creep.transfer(tower[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(tower[0], {visualizePathStyle: {stroke: '#00ffff'}});
                    }
                }

                else {

                    var extension = creep.room.find(FIND_STRUCTURES, {
                            filter: (structure) => {
                                return (structure.structureType == STRUCTURE_EXTENSION) &&
                                    structure.energy < structure.energyCapacity;
                            }
                    });

                    if(extension.length)
                        if(creep.transfer(extension[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(extension[0], {visualizePathStyle: {stroke: '#00ffff'}});
                        }

                    else {

                        var spawn = creep.room.find(FIND_STRUCTURES, {
                            filter: (structure) => {
                                return (structure.structureType == STRUCTURE_SPAWN) &&
                                    structure.energy < structure.energyCapacity;
                            }
                        });
                        
                        if(!spawn.length) {
                            creep.moveTo(43, 45);
                        }

                        else {
                            if(creep.transfer(extension[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(extension[0], {visualizePathStyle: {stroke: '#00ffff'}});
                            }
                        }
                    }
                }
            }
        }
    };
    
    module.exports = roleHarvester;