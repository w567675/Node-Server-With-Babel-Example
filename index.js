import net from 'net';

let count = 0;
let users = {};
var server  = net.createServer((conn) => {
    
    conn.setEncoding('utf-8');

    conn.write('\n > people numbers: ' + count);

    conn.write('\n > enter your username:')

    count ++;


    conn.on('close', () => {
        count --;
    });

    conn.on('data', (data) => {
        console.log(data);
    });

});

server.listen(3000, function() {
    console.log('server is run on *:3000 ');
})