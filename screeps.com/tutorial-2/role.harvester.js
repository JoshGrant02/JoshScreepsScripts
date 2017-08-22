var roleHarvester = {

    /** @param {Creep} creep**/
    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            }
        }
        else if(Game.spawns['JoshSpawn'].energy < Game.spawns['JoshSpawn'].energyCapacity) {
            if(creep.transfer(Game.spawns['JoshSpawn'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['JoshSpawn']);
            }
        }
	}
};

module.exports = roleHarvester;