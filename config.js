
let gameId = '1d7b5a31-5c4a-4947-a983-c2814a3ca900';
//const apiServer = 'http://localhost:3000';
const apiServer = 'http://10.17.74.92/';
// const apiServer = 'http://localhost:3000/';
// const apiServer = 'https://codefest.techover.io';
const socket = io.connect(apiServer, { reconnect: true, transports: ['websocket'] });
// It it required to emit `join channel` event every time connection is happened
function checkID(id) {
    return id + playerId.substring(13, playerId.length) === playerId;
    // return id === playerId;
}

async function getInfoPlayer(res) {
    let x;
    x = checkID(res.map_info.players[0].id) ? 0 : 1;
    player = res.map_info.players[x];
    Player1.speed = player.speed ? player.speed : Player1.speed;
    Player1.delay = player.delay ? player.delay : Player1.delay;
    Player1.power = player.power ? player.power : Player1.power;
    Player1.powerStone = player.powerStone ? player.powerStone : Player1.powerStone;
    Player1.position = player.currentPosition;
    Player1.point = player.score;
    x = x === 0 ? 1 : 0;
    player = res.map_info.players[x];
    Player2.speed = player.speed ? player.speed : Player2.speed;
    Player2.delay = player.delay ? player.delay : Player2.delay;
    Player2.power = player.power ? player.power : Player2.power;
    Player2.powerStone = player.powerStone ? player.powerStone : Player2.powerStone;
    Player2.position = player.currentPosition;
    Player2.point = player.score;
}


socket.on('connect', () => {
    document.getElementById('connected-status').innerHTML = 'ON';
    document.getElementById('socket-status').innerHTML = 'Connected';
    socket.emit('join game', { game_id: gameId, player_id: playerId });
});

socket.on('disconnect', () => {
    console.warn('[Socket] disconnected');
    document.getElementById('socket-status').innerHTML = 'Disconnected';
    socket.emit('join game', { game_id: gameId, player_id: playerId });

});

socket.on('connect_failed', () => {
    console.warn('[Socket] connect_failed');
    document.getElementById('socket-status').innerHTML = 'Connected Failed';
    socket.emit('join game', { game_id: gameId, player_id: playerId });

});
let Player1 = {
    speed: 150,
    delay: 1200,
    power: 1,
    point: 0,
    position: ''
};
let Player2 = {
    speed: 150,
    delay: 1200,
    power: 1,
    point: 0,
    position: ''
};



socket.on('error', (err) => {
    console.error('[Socket] error ', err);
    document.getElementById('socket-status').innerHTML = 'Error!';
});

// API-1b
socket.on('join game', (res) => {
    document.getElementById('joingame-status').innerHTML = 'ON';
});

function connect() {
    gameId = document.getElementById('gameid').value;
    playerId = document.getElementById('playerID').value;
    //console.log(gameId)
    socket.emit('join game', { game_id: gameId, player_id: playerId });
}

function sleep(time) {
    //console.log('Waiting for' + time + 'ms');
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
function move(x) {
    socket.emit('drive player', {
        direction: '' + x
    })
}

function keypress() {
    if (event.keyCode === 97) {
        move(1);
    }
    if (event.keyCode === 119) {
        move(3);
    }
    if (event.keyCode === 100) {
        move(2);
    }
    if (event.keyCode === 115) {
        move(4);
    }
    if (event.keyCode === 32) {
        move('b');
    }
}

//>>>>>>>>>>>>>>>BOMB>>>>>>>>>>>>>>>>>>
function bomb() {
    socket.emit('drive player', {
        direction: 'b'
    })
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function run1() {
    move('33333333')
}
function run2() {
    move('44444444')
}
function stop() {
    move('x');
}