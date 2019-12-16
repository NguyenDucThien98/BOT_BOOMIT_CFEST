
let DATA;
//>>>>>>>>>>>>>>>DATA_FROM_SERVER>>>>>>>>>>>>>>>>>>
socket.on('ticktack player', async (res) => {
    await getInfoPlayer(res);
    res = _.clone(await setMapBomb(res));
    DATA = res;
    if (res.tag === 'start-game') {
        console.log('START')
        await buildMap(res.map_info.map, res.map_info.size);
        await sleep(500);
        await breakBox(DATA, MAP);

    } else {
        await handleDATA_1(_.clone(DATA));
    }
});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//>>>>>>>>>>>>>>>HANDLE_DATA_FROM_SERVER>>>>>>>>>>>>>>>>>>w
async function handleDATA_1(res) {
    if (isNearOther()) {
        //console.log('NEAR!!!!!!!!!!!');
        count = 0;
        // const check = !checkID(res.player_id);
        if (res.tag === 'player:stop-moving') {
            res.map_info.map[Player2.position.row][Player2.position.col] = 'xx';
            await buildMap(res.map_info.map, res.map_info.size);
            await Fighting(MAP);
        }
    } else {

        if ((Player1.point - Player2.point) > 30) {
            await buildMap(res.map_info.map, res.map_info.size);
            if (_.includes(MAP, 3) || _.includes(MAP, 5) || _.includes(MAP, 6) || _.includes(MAP, 7) || _.includes(MAP, 8) || _.includes(MAP, 4)) {
                await handleSpoils(res, MAP7);
            }
        } else {
            const check = checkID(res.player_id);
            if (check) {
                count = 0;
                await run(res);
            } else {
                if (count > 5) {
                    await buildMap(res.map_info.map, res.map_info.size);
                    count = 0;
                    if (MAP.right3 === 0) {
                        move(2);
                    }
                    else if (MAP.mid2 === 0) {
                        move(3);
                    } else if (MAP.left3 === 0) {
                        move(1);
                    } else if (MAP.mid4 === 0) {
                        move(4);
                    }
                }
                count++;
            }
        }
    }




}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
async function run(res) {
    if (res.tag === 'player:stop-moving' || res.tag === 'bomb:explosed') {
        await buildMap(res.map_info.map, res.map_info.size);
        if (!await handleSpoils(_.clone(MAP5))) {
            await breakBox(res, _.clone(MAP));
        }
    }

}
