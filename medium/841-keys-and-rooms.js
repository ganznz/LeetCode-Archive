/*
bfs implementation:

    increments distance variable for each room entered, if distance !== rooms.length
    then not every room has been visited 🤯 🤯 🤯 
*/
const canVisitAllRooms = rooms => {
    let dist = 0;
    const queue = [];
    const seen = new Map();
    seen.set(0, true);
    do {
        const curr = !queue.length ? rooms[0] : rooms[queue.shift()];
        dist++;
        for (let i = 0; i < curr.length; i++) {
            if (!seen.has(curr[i])) queue.push(curr[i]);
            seen.set(curr[i], true);
        }
    } while (queue.length);

    return dist == rooms.length;
}

canVisitAllRooms([[1],[2],[3],[]]);
/*
    Output: true
    
    Explanation: 
    We visit room 0 and pick up key 1.
    We then visit room 1 and pick up key 2.
    We then visit room 2 and pick up key 3.
    We then visit room 3.
    Since we were able to visit every room, we return true.
*/

canVisitAllRooms([[1,3],[3,0,1],[2],[0]]);
/*
    Output: false
    Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.
*/