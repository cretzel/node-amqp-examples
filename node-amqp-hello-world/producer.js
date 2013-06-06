var amqp = require('amqp');

var message = process.argv[2] || "Hello World";

var conn = amqp.createConnection({ host: 'localhost' });
conn.on('ready', function() {
    console.log("connected");

    var queue = conn.queue('test-hello-world-queue', function(q) {
	console.log("queue " + q.name  + " is open");

	console.log("sending message");
	conn.publish(q.name, {body: message});
        setTimeout(process.exit, 10);
    });
});
