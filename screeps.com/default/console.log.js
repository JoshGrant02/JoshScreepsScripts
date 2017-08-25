module.exports = {

    run: function() {

        if(Game.time % 10 == 0) {

            console.log('-------------------------------------------------------------------');

            //GCL and RCL

            console.log('Game Controller Lvl: ' + Game.gcl.level + ', ' + Math.round(Game.gcl.progress/1000) + 'k of ' + Math.round(Game.gcl.progressTotal/1000000) + 'M');
            for (var r in Game.rooms) {
                console.log('Room ' + r + ' Lvl: ' + Game.rooms[r].controller.level + ', ' + Math.round(Game.rooms[r].controller.progress/1000) + 'k of ' + Math.round(Game.rooms[r].controller.progressTotal/1000) + 'k');

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
    }
}