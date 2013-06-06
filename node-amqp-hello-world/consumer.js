var amqp = require('amqp');

var conn = amqp.createConnection({ host: 'localhost' });
conn.on('ready', function() {
    console.log("connected");
    
    var queue = conn.queue('test-hello-world-queue', function(q) {
	console.log("queue " + q.name + " is open");
	
	q.subscribe(function(message) {
	    console.log("Received message: " + message.body);
	});
    });

});
