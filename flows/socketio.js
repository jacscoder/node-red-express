[{
    "id": "3c716ae9.f3afc6",
    "type": "socketio-in",
    "z": "844ac53f.fd94d8",
    "name": "",
    "server": "56d65eff.cbb5d",
    "rules": [{
        "v": "light"
    }, {
        "v": "humidity"
    }, {
        "v": "ultraviolet"
    }, {
        "v": "pressure"
    }, {
        "v": "temperature"
    }],
    "x": 92.54764556884766,
    "y": 388.5238437652588,
    "wires": [
        [
            "e5d86905.d68588"
        ]
    ]
}, {
    "id": "eb1ec020.e69b6",
    "type": "socketio-out",
    "z": "844ac53f.fd94d8",
    "name": "",
    "server": "56d65eff.cbb5d",
    "x": 822.4048118591309,
    "y": 399.2857332229614,
    "wires": []
}, {
    "id": "53dc217c.5202e",
    "type": "debug",
    "z": "844ac53f.fd94d8",
    "name": "",
    "active": true,
    "console": "false",
    "complete": "payload.message",
    "x": 544.8969650268555,
    "y": 503.0952320098877,
    "wires": []
}, {
    "id": "e5d86905.d68588",
    "type": "switch",
    "z": "844ac53f.fd94d8",
    "name": "",
    "property": "socketIOEvent",
    "propertyType": "msg",
    "rules": [{
        "t": "eq",
        "v": "light",
        "vt": "str"
    }, {
        "t": "eq",
        "v": "humidity",
        "vt": "str"
    }, {
        "t": "eq",
        "v": "ultraviolet",
        "vt": "str"
    }, {
        "t": "eq",
        "v": "pressure",
        "vt": "str"
    }, {
        "t": "eq",
        "v": "temperature",
        "vt": "str"
    }],
    "checkall": "false",
    "outputs": 5,
    "x": 276.26192474365234,
    "y": 388.3810386657715,
    "wires": [
        [
            "7133185b.554478"
        ],
        [
            "77acb7c6.9d76a8"
        ],
        [
            "b24df76f.621e98"
        ],
        [
            "92e31ba2.068768"
        ],
        [
            "f8906135.d0419",
            "53dc217c.5202e"
        ]
    ]
}, {
    "id": "cefd809a.d62f9",
    "type": "inject",
    "z": "844ac53f.fd94d8",
    "name": "",
    "topic": "",
    "payload": "",
    "payloadType": "date",
    "repeat": "1",
    "crontab": "",
    "once": false,
    "x": 139.2777862548828,
    "y": 135.44444465637207,
    "wires": [
        [
            "c1bcc08f.3b032",
            "92e7cde2.2af89",
            "4d562cf3.aeed44",
            "aec349f3.8e01a8",
            "abc75930.f0f978"
        ]
    ]
}, {
    "id": "c1bcc08f.3b032",
    "type": "function",
    "z": "844ac53f.fd94d8",
    "name": "light sensor",
    "func": "// create fake data\nglobal.set('light', Math.random() * 700);\n\n// only for debug\nmsg.payload = {light: global.get('light')};\n\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 513.2778091430664,
    "y": 61.98415279388428,
    "wires": [
        [
            "19aeefb7.51d83"
        ]
    ]
}, {
    "id": "92e7cde2.2af89",
    "type": "function",
    "z": "844ac53f.fd94d8",
    "name": "humidity sensor",
    "func": "// create fake data\nglobal.set('humidity', Math.random() * 200);\n\n// only for debug\nmsg.payload = {humidity: global.get('humidity')};\n\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 514.4286651611328,
    "y": 99.98416709899902,
    "wires": [
        [
            "c6542c05.c912d"
        ]
    ]
}, {
    "id": "4d562cf3.aeed44",
    "type": "function",
    "z": "844ac53f.fd94d8",
    "name": "ultraviolet sensor",
    "func": "// create fake data\nglobal.set('ultraviolet', Math.random() * 100);\n\n// only for debug\nmsg.payload = {ultraviolet: global.get('ultraviolet')};\n\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 517.2222442626953,
    "y": 136.23811149597168,
    "wires": [
        [
            "5b642dd5.38bce4"
        ]
    ]
}, {
    "id": "aec349f3.8e01a8",
    "type": "function",
    "z": "844ac53f.fd94d8",
    "name": "pressure sensor",
    "func": "// create fake data\nglobal.set('pressure', Math.random() * 500);\n\n// only for debug\nmsg.payload = {pressure: global.get('pressure')};\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 517.5396881103516,
    "y": 174.0793857574463,
    "wires": [
        [
            "c37ba7a2.4b9af8"
        ]
    ]
}, {
    "id": "abc75930.f0f978",
    "type": "function",
    "z": "844ac53f.fd94d8",
    "name": "temperature sensor",
    "func": "// create fake data\nglobal.set('temperature', Math.random() * 50);\n\n// only for debug\nmsg.payload = {temperature: global.get('temperature')};\n\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 519.9206161499023,
    "y": 213.6666669845581,
    "wires": [
        [
            "f79a0302.1e6b4"
        ]
    ]
}, {
    "id": "19aeefb7.51d83",
    "type": "debug",
    "z": "844ac53f.fd94d8",
    "name": "",
    "active": true,
    "console": "false",
    "complete": "false",
    "x": 798.3332977294922,
    "y": 62.38095474243164,
    "wires": []
}, {
    "id": "c6542c05.c912d",
    "type": "debug",
    "z": "844ac53f.fd94d8",
    "name": "",
    "active": true,
    "console": "false",
    "complete": "false",
    "x": 798.3333778381348,
    "y": 99.5238208770752,
    "wires": []
}, {
    "id": "5b642dd5.38bce4",
    "type": "debug",
    "z": "844ac53f.fd94d8",
    "name": "",
    "active": true,
    "console": "false",
    "complete": "false",
    "x": 798.8097229003906,
    "y": 137.14288902282715,
    "wires": []
}, {
    "id": "c37ba7a2.4b9af8",
    "type": "debug",
    "z": "844ac53f.fd94d8",
    "name": "",
    "active": true,
    "console": "false",
    "complete": "false",
    "x": 798.3333892822266,
    "y": 174.76192092895508,
    "wires": []
}, {
    "id": "f79a0302.1e6b4",
    "type": "debug",
    "z": "844ac53f.fd94d8",
    "name": "",
    "active": true,
    "console": "false",
    "complete": "false",
    "x": 798.3333587646484,
    "y": 216.82541418075562,
    "wires": []
}, {
    "id": "7133185b.554478",
    "type": "function",
    "z": "844ac53f.fd94d8",
    "name": "light package",
    "func": "// get data from global and make a package for emit\nmsg.payload = { light: global.get('light') };\n\n// setup emit function\nRED.util.setMessageProperty(msg, 'socketIOEmit', 'emit', true);\n\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 539.7619476318359,
    "y": 313.9523410797119,
    "wires": [
        [
            "eb1ec020.e69b6"
        ]
    ]
}, {
    "id": "77acb7c6.9d76a8",
    "type": "function",
    "z": "844ac53f.fd94d8",
    "name": "humidity package",
    "func": "// get data from global and make a package for emit\nmsg.payload = { humidity: global.get('humidity') };\n\n// setup emit function\nRED.util.setMessageProperty(msg, 'socketIOEmit', 'emit', true);\n\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 539.0476150512695,
    "y": 352.0475959777832,
    "wires": [
        [
            "eb1ec020.e69b6"
        ]
    ]
}, {
    "id": "b24df76f.621e98",
    "type": "function",
    "z": "844ac53f.fd94d8",
    "name": "ultraviolet package",
    "func": "// get data from global and make a package for emit\nmsg.payload = { ultraviolet: global.get('ultraviolet') };\n\n// setup emit function\nRED.util.setMessageProperty(msg, 'socketIOEmit', 'emit', true);\n\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 539.0475540161133,
    "y": 389.19048500061035,
    "wires": [
        [
            "eb1ec020.e69b6"
        ]
    ]
}, {
    "id": "92e31ba2.068768",
    "type": "function",
    "z": "844ac53f.fd94d8",
    "name": "pressure package",
    "func": "// get data from global and make a package for emit\nmsg.payload = { pressure: global.get('pressure') };\n\n// setup emit function\nRED.util.setMessageProperty(msg, 'socketIOEmit', 'emit', true);\n\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 539.0475692749023,
    "y": 426.3333053588867,
    "wires": [
        [
            "eb1ec020.e69b6"
        ]
    ]
}, {
    "id": "f8906135.d0419",
    "type": "function",
    "z": "844ac53f.fd94d8",
    "name": "temperature package",
    "func": "// get data from global and make a package for emit\nmsg.payload = { temperature: global.get('temperature') };\n\n// setup emit function\nRED.util.setMessageProperty(msg, 'socketIOEmit', 'emit', true);\n\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 543.3333053588867,
    "y": 463.47616958618164,
    "wires": [
        [
            "eb1ec020.e69b6"
        ]
    ]
}, {
    "id": "56d65eff.cbb5d",
    "type": "socketio-config",
    "z": "844ac53f.fd94d8",
    "port": "1881",
    "sendClient": "true",
    "path": "/socket.io",
    "bindToNode": true
}]
