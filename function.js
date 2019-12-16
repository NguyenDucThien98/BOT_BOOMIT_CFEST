let count = 0;
let wayInfo = {
    check: false,
    way: [],
    length: 100,
    target: [],
    source: [],
    map: []
};
function reset() {
    queue = [];
    wayInfo = {
        check: false,
        way: [],
        length: 100,
        target: [],
        source: [],
        map: []
    };
}
//>>>>>>>>>>>>>>>Build_Map 7X7>>>>>>>>>>>>>>>>>>
let MAP;
let MAP7;
async function buildMap(resMap, size) {
    const myPosition = _.clone(Player1.position);
    MAP = {
        left0__: ((myPosition.row - 3) >= 0) && ((myPosition.col - 3) >= 0) ? resMap[myPosition.row - 3][myPosition.col - 3] : 1,
        left1__: ((myPosition.row - 2) >= 0) && ((myPosition.col - 3) >= 0) ? resMap[myPosition.row - 2][myPosition.col - 3] : 1,
        left2__: (myPosition.col - 3) >= 0 ? resMap[myPosition.row - 1][myPosition.col - 3] : 1,
        left3__: (myPosition.col - 3) >= 0 ? resMap[myPosition.row][myPosition.col - 3] : 1,
        left4__: (myPosition.col - 3) >= 0 ? resMap[myPosition.row + 1][myPosition.col - 3] : 1,
        left5__: ((myPosition.row + 2) < size.rows) && ((myPosition.col - 3) >= 0) ? resMap[myPosition.row + 2][myPosition.col - 3] : 1,
        left6__: ((myPosition.row + 3) < size.rows) && ((myPosition.col - 3) >= 0) ? resMap[myPosition.row + 3][myPosition.col - 3] : 1,

        left0_: ((myPosition.row - 3) >= 0) && ((myPosition.col - 2) >= 0) ? resMap[myPosition.row - 3][myPosition.col - 2] : 1,
        left1_: ((myPosition.row - 2) >= 0) && ((myPosition.col - 2) >= 0) ? resMap[myPosition.row - 2][myPosition.col - 2] : 1,
        left2_: (myPosition.col - 2) >= 0 ? resMap[myPosition.row - 1][myPosition.col - 2] : 1,
        left3_: (myPosition.col - 2) >= 0 ? resMap[myPosition.row][myPosition.col - 2] : 1,
        left4_: (myPosition.col - 2) >= 0 ? resMap[myPosition.row + 1][myPosition.col - 2] : 1,
        left5_: ((myPosition.row + 2) < size.rows) && ((myPosition.col - 2) >= 0) ? resMap[myPosition.row + 2][myPosition.col - 2] : 1,
        left6_: ((myPosition.row + 3) < size.rows) && ((myPosition.col - 2) >= 0) ? resMap[myPosition.row + 3][myPosition.col - 2] : 1,

        left0: ((myPosition.row - 3) >= 0) ? resMap[myPosition.row - 3][myPosition.col - 1] : 1,
        left1: ((myPosition.row - 2) >= 0) ? resMap[myPosition.row - 2][myPosition.col - 1] : 1,
        left2: resMap[myPosition.row - 1][myPosition.col - 1],
        left3: resMap[myPosition.row][myPosition.col - 1],
        left4: resMap[myPosition.row + 1][myPosition.col - 1],
        left5: ((myPosition.row + 2) < size.rows) ? resMap[myPosition.row + 2][myPosition.col - 1] : 1,
        left6: ((myPosition.row + 3) < size.rows) ? resMap[myPosition.row + 3][myPosition.col - 1] : 1,

        mid0: ((myPosition.row - 3) >= 0) ? resMap[myPosition.row - 3][myPosition.col] : 1,
        mid1: ((myPosition.row - 2) >= 0) ? resMap[myPosition.row - 2][myPosition.col] : 1,
        mid2: resMap[myPosition.row - 1][myPosition.col],
        mid3: resMap[myPosition.row][myPosition.col],
        mid4: resMap[myPosition.row + 1][myPosition.col],
        mid5: ((myPosition.row + 2) < size.rows) ? resMap[myPosition.row + 2][myPosition.col] : 1,
        mid6: ((myPosition.row + 3) < size.rows) ? resMap[myPosition.row + 3][myPosition.col] : 1,

        right0: ((myPosition.row - 3) >= 0) ? resMap[myPosition.row - 3][myPosition.col + 1] : 1,
        right1: ((myPosition.row - 2) >= 0) ? resMap[myPosition.row - 2][myPosition.col + 1] : 1,
        right2: resMap[myPosition.row - 1][myPosition.col + 1],
        right3: resMap[myPosition.row][myPosition.col + 1],
        right4: resMap[myPosition.row + 1][myPosition.col + 1],
        right5: ((myPosition.row + 2) < size.rows) ? resMap[myPosition.row + 2][myPosition.col + 1] : 1,
        right6: ((myPosition.row + 3) < size.rows) ? resMap[myPosition.row + 3][myPosition.col + 1] : 1,

        right0_: ((myPosition.row - 3) >= 0) && ((myPosition.col + 2) < size.cols) ? resMap[myPosition.row - 3][myPosition.col + 2] : 1,
        right1_: ((myPosition.row - 2) >= 0) && ((myPosition.col + 2) < size.cols) ? resMap[myPosition.row - 2][myPosition.col + 2] : 1,
        right2_: ((myPosition.col + 2) < size.cols) ? resMap[myPosition.row - 1][myPosition.col + 2] : 1,
        right3_: ((myPosition.col + 2) < size.cols) ? resMap[myPosition.row][myPosition.col + 2] : 1,
        right4_: ((myPosition.col + 2) < size.cols) ? resMap[myPosition.row + 1][myPosition.col + 2] : 1,
        right5_: ((myPosition.row + 2) < size.rows) && ((myPosition.col + 2) < size.cols) ? resMap[myPosition.row + 2][myPosition.col + 2] : 1,
        right6_: ((myPosition.row + 3) < size.rows) && ((myPosition.col + 2) < size.cols) ? resMap[myPosition.row + 3][myPosition.col + 2] : 1,

        right0__: ((myPosition.row - 3) >= 0) && ((myPosition.col + 3) < size.cols) ? resMap[myPosition.row - 3][myPosition.col + 3] : 1,
        right1__: ((myPosition.row - 2) >= 0) && ((myPosition.col + 3) < size.cols) ? resMap[myPosition.row - 2][myPosition.col + 3] : 1,
        right2__: ((myPosition.col + 3) < size.cols) ? resMap[myPosition.row - 1][myPosition.col + 3] : 1,
        right3__: ((myPosition.col + 3) < size.cols) ? resMap[myPosition.row][myPosition.col + 3] : 1,
        right4__: ((myPosition.col + 3) < size.cols) ? resMap[myPosition.row + 1][myPosition.col + 3] : 1,
        right5__: ((myPosition.row + 2) < size.rows) && ((myPosition.col + 3) < size.cols) ? resMap[myPosition.row + 2][myPosition.col + 3] : 1,
        right6__: ((myPosition.row + 3) < size.rows) && ((myPosition.col + 3) < size.cols) ? resMap[myPosition.row + 3][myPosition.col + 3] : 1
    }
    MAP7 = [
        [MAP.left0__, MAP.left0_, MAP.left0, MAP.mid0, MAP.right0, MAP.right0_, MAP.right0__],
        [MAP.left1__, MAP.left1_, MAP.left1, MAP.mid1, MAP.right1, MAP.right1_, MAP.right1__],
        [MAP.left2__, MAP.left2_, MAP.left2, MAP.mid2, MAP.right2, MAP.right2_, MAP.right2__],
        [MAP.left3__, MAP.left3_, MAP.left3, MAP.mid3, MAP.right3, MAP.right3_, MAP.right3__],
        [MAP.left4__, MAP.left4_, MAP.left4, MAP.mid4, MAP.right4, MAP.right4_, MAP.right4__],
        [MAP.left5__, MAP.left5_, MAP.left5, MAP.mid5, MAP.right5, MAP.right5_, MAP.right5__],
        [MAP.left6__, MAP.left6_, MAP.left6, MAP.mid6, MAP.right6, MAP.right6_, MAP.right6__]
    ]
    MAP5 = [
        [MAP.left1_, MAP.left1, MAP.mid1, MAP.right1, MAP.right1_],
        [MAP.left2_, MAP.left2, MAP.mid2, MAP.right2, MAP.right2_],
        [MAP.left3_, MAP.left3, MAP.mid3, MAP.right3, MAP.right3_],
        [MAP.left4_, MAP.left4, MAP.mid4, MAP.right4, MAP.right4_],
        [MAP.left5_, MAP.left5, MAP.mid5, MAP.right5, MAP.right5_]
    ]

}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//>>>>>>>>>>>>>>>ExcuteDATA>>>>>>>>>>>>>>>>>>
let queue = [];
let target;
async function excute(queue) {
    let cmd = '';
    cmd = queue.toString();
    cmd = cmd.replace(/,/gmi, '');
    move(cmd);
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//>>>>>>>>>>>>>>>CHECK_NEAR_POSITION>>>>>>>>>>>>>>>>>>
function isNearOther() {
    let x = 0, y = 0;
    x = Math.abs(Player2.position.row - Player1.position.row);
    y = Math.abs(Player2.position.col - Player1.position.col);
    return x <= 3 && y <= 3;
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
async function handleWays(map, source, target, type) {
    const target2 = _.clone(target);
    wayInfo.source = _.clone(source);
    if (type !== 1) {
        map = map.map(item => {
            return item.map(xitem => {
                return xitem === 2 ? 1 : xitem;
            })
        });
    }
    let node = await getWay(source, target, map);
    if (node != -1) {
        wayInfo.check = true;
        let way = [];
        do {
            if (node.row < target[0]) {
                way.push(4);
                target[0] -= 1;
            } else if (node.row > target[0]) {
                way.push(3);
                target[0] += 1;
            }
            else if (node.row === target[0]) {
                if (node.col < target[1]) {
                    target[1] -= 1;
                    way.push(2);
                } else if (node.col > target[1]) {
                    target[1] += 1;
                    way.push(1);
                }
            }
            node = node.parent;
        } while (node);
        way = way.reverse();
        if (type === 1) {
            way.splice(way.length - 1, 1);
        }

        if (way.length <= wayInfo.length) {
            wayInfo.target = target2;
            wayInfo.way = _.clone(way);
            wayInfo.length = way.length;
            wayInfo.map = _.clone(map);
        }
    }
}
async function runBOMB(data) {
    reset();
    const sourceRow = Player1.position.row;
    const sourceCol = Player1.position.col;
    const rows = data.map_info.size.rows;
    const cols = data.map_info.size.cols;
    const dr = (rows / 2) > (sourceRow + 1) ? rows - sourceRow - 2 : sourceRow - 1;
    const dc = (cols / 2) > (sourceCol + 1) ? cols - sourceCol - 2 : sourceCol - 1;
    const d = dr > dc ? dr : dc;
    const serverMap = data.map_info.map;
    let mapRUN = [];
    let temp = [];
    let listTarget = [];
    for (let i = 1; i <= d; i++) {
        mapRUN = [];
        if (i > Math.ceil((cols > rows ? cols : rows) / 2)) {
            // full map
            for (let x = 0; x < data.map_info.map.length; x++) {
                for (let z = 0; z < data.map_info.map[0].length; z++) {
                    if (data.map_info.map[x][z] !== 1 && data.map_info.map[x][z] !== 9) {
                        await handleWays(data.map_info.map, [Player1.position.row, Player1.position.col], [x, z], 2);
                    }
                }
            }
        } else {
            for (let x = -i; x <= i; x++) {
                temp = [];
                for (let y = -i; y <= i; y++) {
                    const r = sourceRow + x;
                    const c = sourceCol + y;
                    if ((Math.abs(x) !== i && Math.abs(y) !== i) || r < 0 || c < 0 || r > rows - 1 || c > cols - 1) {
                        if (r < 0 || c < 0 || r > rows - 1 || c > cols - 1) {
                            temp.push(1);
                        }
                        else {
                            temp.push(serverMap[r][c]);
                        }
                        continue;
                    }
                    temp.push(serverMap[r][c]);
                    if (serverMap[r][c] !== 1 && serverMap[r][c] !== 9) {
                        listTarget.push([x + i, y + i]);
                    }

                }
                mapRUN.push(temp);
            }
            if (listTarget.length !== 0) {
                for (const iterator of listTarget) {
                    await handleWays(mapRUN, [Math.floor(mapRUN.length / 2), Math.floor(mapRUN.length / 2)], iterator, 2);
                }
            }
        }
        if (wayInfo.check) {
            return true;
        }
    }
    return false;
}
async function setBOM(res, bomb) {
    res.map_info.map[bomb.row][bomb.col] = 1;
    let c1 = true;
    let c2 = true;
    let c3 = true;
    let c4 = true;
    const check = checkID(bomb.playerId);
    if (check) {
        length = Player1.power;
    } else {
        length = Player2.power;
    }
    for (let i = 1; i <= length; i++) {
        if ((bomb.row - i) >= 0 && c1) {
            if (res.map_info.map[bomb.row - i][bomb.col] === 2 || res.map_info.map[bomb.row - i][bomb.col] === 1) {
                c1 = false;
                res.map_info.map[bomb.row - i][bomb.col] === 1;
            } else {
                res.map_info.map[bomb.row - i][bomb.col] = 9;
            }
        }
        if ((bomb.row + i) < res.map_info.map.length && c2) {
            if (res.map_info.map[bomb.row + i][bomb.col] === 2 || res.map_info.map[bomb.row + i][bomb.col] === 1) {
                c2 = false;
                res.map_info.map[bomb.row + i][bomb.col] = 1;
            } else {
                res.map_info.map[bomb.row + i][bomb.col] = 9;

            }
        }

        if ((bomb.col + i) < res.map_info.map[0].length && c3) {
            if (res.map_info.map[bomb.row][bomb.col + i] === 2 || res.map_info.map[bomb.row][bomb.col + i] === 1) {
                c3 = false;
                res.map_info.map[bomb.row][bomb.col + i] = 1;
            }
            else {
                res.map_info.map[bomb.row][bomb.col + i] = 9;

            }

        }
        if ((bomb.col - i) >= 0 && c4) {
            if (res.map_info.map[bomb.row][bomb.col - i] === 2 || res.map_info.map[bomb.row][bomb.col - i] === 1) {
                c4 = false;
                res.map_info.map[bomb.row][bomb.col - i] = 1;
            }
            else {
                res.map_info.map[bomb.row][bomb.col - i] = 9;
            }
        }
    }
    return res.map_info.map;
}
async function setMapBomb(res) {
    if (res.map_info.spoils.length !== 0) {
        for (const iterator of res.map_info.spoils) {
            res.map_info.map[iterator.row][iterator.col] = iterator.spoil_type;
        }
    }
    res.map_info.map[Player2.position.row][Player2.position.col] = 1;
    if (res.map_info.bombs.length !== 0) {
        for (let x = 0; x < res.map_info.bombs.length; x++) {
            res.map_info.map = await setBOM(res, res.map_info.bombs[x]);
        }
    }
    if ((res.map_info.map[Player1.position.row][Player1.position.col] === 9 || res.map_info.map[Player1.position.row][Player1.position.col] === 1) && (res.tag === 'player:stop-moving' || res.tag === 'bomb:setup')) {
        if (await runBOMB(_.clone(res))) {
            //console.log('RUN BOMB', _.clone(wayInfo));
            excute(_.clone(wayInfo.way));
        }
    }
    res.map_info.map = res.map_info.map.map(row => {
        return row.map(e => {
            return e === 9 ? 1 : e;
        })
    })
    return res;
}

async function handleSpoils(map) {
    reset();
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
            if (Player1.speed <= 200 && map[i][j] === 4) {
                map[i][j] = 1;
            }
            else if (map[i][j] === 3 || map[i][j] === 5 || map[i][j] === 6 || map[i][j] === 7 || map[i][j] === 8 || map[i][j] === 4) {
                await handleWays(map, [2, 2], [i, j], 2);
            }
        }
    }
    if (wayInfo.way.length !== 0) {
        //console.log('Queue Spoils', _.clone(wayInfo.way));
        await excute(_.clone(wayInfo.way));
        return true;
    } else {
        return false;
    }
}

async function findBOX(data, source, map) {
    reset();
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
            if (Player1.speed <= 200 && map[i][j] === 4) {
                map[i][j] = 1;
            }
            if (map[i][j] === 2) {
                await handleWays(map, source, [i, j], 1);
            }
        }
    }
    if (wayInfo.way.length != 0) {
        queue = _.clone(wayInfo.way);
        //console.log('QUEUE findBOX', queue);
        excute(queue);
    } else {
        await findBOXSCALE(data);
    }

}
async function findBOXSCALE(data) {
    reset();
    const myPosition = _.clone(Player1.position);
    for (let i = 0; i < data.map_info.size.rows; i++) {
        for (let j = 0; j < data.map_info.size.cols; j++) {
            if (data.map_info.map[i][j] === 2) {
                await handleWays(data.map_info.map, [myPosition.row, myPosition.col], [i, j], 1);
            }
        }
    }
    if (wayInfo.way.length !== 0) {
        queue = _.clone(wayInfo.way);
        //console.log('QUEUE findBOXSCALE', queue);
        excute(queue);
    } else {
        reset();
        for (let i = 0; i < data.map_info.size.rows; i++) {
            for (let j = 0; j < data.map_info.size.cols; j++) {
                if (data.map_info.map[i][j] !== 0 && data.map_info.map[i][j] !== 1 && data.map_info.map[i][j] !== 2) {
                    await handleWays(data.map_info.map, [myPosition.row, myPosition.col], [i, j], 2);
                }
            }
        }
        if (wayInfo.way.length !== 0) {
            queue = _.clone(wayInfo.way);
            console.log('QUEUE SPOILS AND FIND OTHER', queue);
            excute(queue);
        }
    }

}


async function breakBox(res, myMapExcute) {
    reset();
    let check = false;
    if (!check && myMapExcute.left3 === 1 && myMapExcute.mid4 === 0 && myMapExcute.left4 === 0 && myMapExcute.left4_ === 2) { queue = [4, 1, 'b']; check = true; }
    if (!check && myMapExcute.right3 === 1 && myMapExcute.mid2 === 0 && myMapExcute.right2 === 0 && myMapExcute.right2_ === 2) { queue = [3, 2, 'b']; check = true; }
    if (!check && (myMapExcute.mid2 == 2 || myMapExcute.left3 == 2 || myMapExcute.mid4 == 2 || myMapExcute.right3 == 2)) {
        if (!check && myMapExcute.mid4 === 0 && (myMapExcute.left4 === 0 || myMapExcute.right4 === 0)) { queue = ['b']; check = true; }
        if (!check && myMapExcute.mid4 === 0 && myMapExcute.mid5 === 0 && (myMapExcute.left5 === 0 || myMapExcute.right5 === 0)) { queue = ['b', 4, 4]; check = true; }
        if (!check && myMapExcute.mid4 === 0 && myMapExcute.mid5 === 0 && myMapExcute.mid6 === 0 && (myMapExcute.left6 === 0 || myMapExcute.right6 === 0)) { queue = ['b', 4, 4, 4]; check = true; }
        if (!check && myMapExcute.mid2 === 0 && (myMapExcute.left2 === 0 || myMapExcute.right2 === 0)) { queue = ['b']; check = true; }
        if (!check && myMapExcute.mid2 === 0 && myMapExcute.mid1 === 0 && (myMapExcute.left1 === 0 || myMapExcute.right1 === 0)) { queue = ['b', 3, 3]; check = true; }
        if (!check && myMapExcute.mid2 === 0 && myMapExcute.mid1 === 0 && myMapExcute.mid0 === 0 && (myMapExcute.left0 === 0 || myMapExcute.right0 === 0)) { queue = ['b', 3, 3, 3]; check = true; }
        if (!check && myMapExcute.right3 === 0 && (myMapExcute.right2 === 0 || myMapExcute.right4 === 0)) { queue = ['b', 2]; check = true; }
        if (!check && myMapExcute.right3 === 0 && myMapExcute.right3_ === 0 && (myMapExcute.right2_ === 0 || myMapExcute.right4_ === 0)) { queue = ['b', 2, 2]; check = true; }
        if (!check && myMapExcute.right3 === 0 && myMapExcute.right3_ === 0 && myMapExcute.right3__ === 0 && (myMapExcute.right2__ === 0 || myMapExcute.right4__ === 0)) { queue = ['b', 2, 2, 2]; check = true; }
        if (!check && myMapExcute.left3 === 0 && (myMapExcute.left2 === 0 || myMapExcute.left4 === 0)) { queue = ['b', 1]; check = true; }
        if (!check && myMapExcute.left3 === 0 && myMapExcute.left3_ === 0 && (myMapExcute.left2_ === 0 || myMapExcute.left4_ === 0)) { queue = ['b', 1, 1]; check = true; }
        if (!check && myMapExcute.left3 === 0 && myMapExcute.left3_ === 0 && myMapExcute.left3__ === 0 && (myMapExcute.left2__ === 0 || myMapExcute.left4__ === 0)) { queue = ['b', 1, 1, 1]; check = true; }
        if (!check && myMapExcute.mid4 === 0 && myMapExcute.mid5 === 0 && myMapExcute.mid6 === 0) { queue = ['b', 4, 4, 4]; check = true; }
        if (!check && myMapExcute.mid2 === 0 && myMapExcute.mid1 === 0 && myMapExcute.mid0 === 0) { queue = ['b', 3, 3, 3]; check = true; }
        if (!check && myMapExcute.right3 === 0 && myMapExcute.right3_ === 0 && myMapExcute.right3__ === 0) { queue = ['b', 2, 2, 2]; check = true; }
        if (!check && myMapExcute.left3 === 0 && myMapExcute.left3_ === 0 && myMapExcute.left3__ === 0) { queue = ['b', 1, 1, 1]; check = true; }
    }
    if (queue.length !== 0) {
        //console.log('QUEUE BREAKBOX', queue);
        await excute(queue);
        return true;
    }
    if (!check) {
        await findBOX(res, [3, 3], MAP7);
    }
    return false;
}

async function Fighting(map) {
    reset();
    let check = false;
    if (!check && (map.right3 === 'xx' || map.right3_ === 'xx' || map.right3__ === 'xx' || map.left3 === 'xx' || map.left3_ === 'xx' || map.left3__ === 'xx' || map.mid2 === 'xx' || map.mid1 === 'xx' || map.mid0 === 'xx' || map.mid4 === 'xx' || map.mid5 === 'xx' || map.mid6 === 'xx')) {
        const myMapExcute = _.mapValues(map, item => {
            return item === 2 || item === 'xx' ? 1 : item;
        })
        if (!check && myMapExcute.right3 !== 1 && myMapExcute.right3_ !== 1 && myMapExcute.right3__ !== 1 && (myMapExcute.right2__ !== 1 || myMapExcute.right4__ !== 1)) { queue = ['b', 2, 'b', 2, 'b', 2]; check = true; }
        if (!check && myMapExcute.left3 !== 1 && myMapExcute.left3_ !== 1 && myMapExcute.left3__ !== 1 && (myMapExcute.left2__ !== 1 || myMapExcute.left4__ !== 1)) { queue = ['b', 1, 'b', 1, 'b', 1]; check = true; }
        if (!check && myMapExcute.mid2 !== 1 && myMapExcute.mid1 !== 1 && myMapExcute.mid0 !== 1 && (myMapExcute.right0 !== 1 || myMapExcute.left0 !== 1)) { queue = ['b', 3, 'b', 3, 'b', 3]; check = true; }
        if (!check && myMapExcute.mid4 !== 1 && myMapExcute.mid5 !== 1 && myMapExcute.mid6 !== 1 && (myMapExcute.right6 !== 1 || myMapExcute.left6 !== 1)) { queue = ['b', 4, 'b', 4, 'b', 4]; check = true; }
        if (!check && myMapExcute.right3 !== 1 && myMapExcute.right3_ !== 1 && (myMapExcute.right2_ !== 1 || myMapExcute.right4_ !== 1)) { queue = ['b', 2, 'b', 2]; check = true; }
        if (!check && myMapExcute.left3 !== 1 && myMapExcute.left3_ !== 1 && (myMapExcute.left2_ !== 1 || myMapExcute.left4_ !== 1)) { queue = ['b', 1, 'b', 1]; check = true; }
        if (!check && myMapExcute.mid4 !== 1 && myMapExcute.mid5 !== 1 && (myMapExcute.right5 !== 1 || myMapExcute.left5 !== 1)) { queue = ['b', 4, 'b', 4]; check = true; }
        if (!check && myMapExcute.mid2 !== 1 && myMapExcute.mid1 !== 1 && (myMapExcute.right1 !== 1 || myMapExcute.left1 !== 1)) { queue = ['b', 3, 'b', 3]; check = true; }
        if (!check && myMapExcute.mid2 !== 1 && (myMapExcute.right2 !== 1 || myMapExcute.left2 !== 1)) { queue = ['b', 3]; check = true; }
        if (!check && myMapExcute.mid4 !== 1 && (myMapExcute.right4 !== 1 || myMapExcute.left4 !== 1)) { queue = ['b', 4]; check = true; }
        if (!check && myMapExcute.left3 !== 1 && (myMapExcute.left2 !== 1 || myMapExcute.left4 !== 1)) { queue = ['b', 1]; check = true; }
        if (!check && myMapExcute.right3 !== 1 && (myMapExcute.right2 !== 1 || myMapExcute.right4 !== 1)) { queue = ['b', 2]; check = true; }
    }
    if (!check) {
        reset();
        let map = MAP7.map(item => {
            return item.map(xitem => {
                return xitem === 2 ? 1 : xitem;
            })
        });
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[0].length; j++) {
                if (map[i][j] === 'xx') {
                    map[i][j] = 1;
                    await handleWays(map, [3, 3], [i, j], 1);
                }
            }
        }
        if (wayInfo.way.length != 0) {
            //console.log('QUEUE Fighting', _.clone(wayInfo.way));
            excute(_.clone(wayInfo.way));
        } else {
            await breakBox(DATA, MAP);
        }
    }
    if (queue.length !== 0) {
        // //console.log('QUEUE Fighting', queue);
        await excute(queue);
        return true;
    }
    return false;
}