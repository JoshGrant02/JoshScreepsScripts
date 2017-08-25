module.exports = {

    run: function() {

        if(Game.time % 10 == 0) {

            console.log('-------------------------------------------------------------------');

            //GCL and RCL

            console.log('GCL: ' + Game.gcl.level + ', ' + Game.gcl.progress + ' of ' + Game.gcl.progressTotal);
            for (var r in Game.rooms) {
                console.log(r + ': ' + Game.rooms[r].controller.level + ', ' + Game.rooms[r].controller.progress + ' of ' + Game.rooms[r].controller.progressTotal);

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