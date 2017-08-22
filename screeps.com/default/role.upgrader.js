var roleUpgrader = {
    
        /** @param {Creep} creep **/
        run: function(creep) {
            
            if(creep.ticksToLive > 1484) {
                creep.moveTo(29, 27);
            }

            //Upgrading or Harvesting

            if(creep.memory.upgrading && creep.carry.energy == 0) {
                creep.memory.upgrading = false;
                creep.say('🔄 harvest');
            }
            if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
                creep.memory.upgrading = true;
                creep.say('⚡ upgrade');
            }

            //Upgrade
    
            if(creep.memory.upgrading) {
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#97e401'}});
                }
            }

            //Harvest

            else {
                var sources = Game.getObjectById('5982fc5fb097071b4adbd47a');
                if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources, {visualizePathStyle: {stroke: '#ed6301'}});
                }
            }
        }
    };
    
    module.exports = roleUpgrader;