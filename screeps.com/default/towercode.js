module.exports = {
    
    run: function() {

        var tower = Game.getObjectById('599cc0a9d70eef2835f3d4c9');
        if(tower) {

            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile) {
                tower.attack(closestHostile);
            }

            else {
                var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => {
                                return structure.structureType == STRUCTURE_ROAD && structure.hits < structure.hitsMax;
                }});
                if(closestDamagedStructure) {
                    tower.repair(closestDamagedStructure);
                }
            }
        }
    }
} 