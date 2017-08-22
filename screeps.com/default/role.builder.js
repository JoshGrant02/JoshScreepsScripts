var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }

	    if(creep.memory.building) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
			if(targets.length) {
				if(creep.build(targets) == ERR_INVALID_TARGET) {
					creep.moveTo(36, 45);
				}
                else if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#5463f5'}});
                }
            }
	    }
	    else {
	        var sources = Game.getObjectById('5982fc5fb097071b4adbd47c')
			if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources), {visualizePathStyle: {stroke: '#ed6301'}};
            }
		}



	}
};

module.exports = roleBuilder;