var roleRepair = {
    
        /** @param {Creep} creep **/
        run: function(creep) {

            //Repairing or Harvesting

            if(creep.memory.repairing && creep.carry.energy == 0) {
                creep.memory.repairing = false;
                creep.say('🔄 harvest');
            }
            if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
                creep.memory.repairing = true;
                creep.say('⚡ repair');
            }

            //Repairing
    
            if(creep.memory.repairing) {
                var roadToRepair = creep.room.find(FIND_STRUCTURES, {
                    filter: function(object) {
                    return object.structureType === STRUCTURE_ROAD && (object.hits < 3000);}
                });

                if(roadToRepair.length) {
                    if(creep.repair(roadToRepair[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(roadToRepair[0], {visualizePathStyle: {stroke: '#5463f5'}});
                    }
                }
            }

            //Harvest

            else {
                var sources = Game.getObjectById('5982fc5fb097071b4adbd47c')
                if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources), {visualizePathStyle: {stroke: '#00ffff'}};
                }
            }
        }
    };
    
    module.exports = roleRepair;