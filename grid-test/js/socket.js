/* var gameSocket = new WebSocket('ws://' + window.location.host + '/socket');



 client = {
 type: 'choice, join, start',
 choice: 3,
 data: 'ass'
 }

 server = {
 type: 'status',
 stage: 'id',
 isMain: false,
 data:
 }

 'type': 'status',
 'stage': new_st,
 'hand': player['user_hand'],
 'main': isMain,
 'table': [x['c_id'] for x in logic.table],
 'score': [x['score'] for x in logic.players]


 # 0 - Lobby
 # 1 - Main turn
 # 2 - Players turn
 # 3 - Voting
 # 4 - Score

 

gameSocket.onopen = function () {
    console.log('WebSocket Ready')
}

gameSocket.onmessage = function (event) {
    var data = JSON.parse(event.data)
    if (data.type == 'status') {
        switch (data.stage) {
            default:
                console.log(data)
                break
        }
    }
}

function send(mes) {
    gameSocket.send(JSON.stringify(mes))
}

function join() {
    var name = document.body.getElementsByClassName('page-lobby-dcontainer-join-form-ninput').item(0).nodeValue
    send({
        type: 'join',
        data: name
    })
}

 */