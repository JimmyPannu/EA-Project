
const apiCallFromRequest = require('./request')
const http = require('http')

http.createServer((req, res) => {
    if(req.url === '/request') {
        apiCallFromRequest.callApi(function(response){
            res.write(JSON.stringify(response));
            // response.sort(function(a, b) {
            //     a = a.name.toLowerCase();
            //     b = b.name.toLowerCase();
            //     return a < b ? -1 : a > b ? 1 : 0;
            // })
            res.end();
        })
    }
}).listen(8080);
console.log('service running on 8080 port..')




// app.get('/', (req, res) => {
//     res.send('hello!');
// });

// app.get('/api/v1/festivals',(req, res) => {
    
//     res.status(200).send({
//         name: "LOL-palooza",
//         bands: [
//             {
//             name: "Werewolf Weekday",
//             recordLabel: "XS Recordings"
//         },
//         {
//             name: "Jill Black",
//             recordLabel: "Fourth Woman Records"
//         }
//     ]
//     })

// });
