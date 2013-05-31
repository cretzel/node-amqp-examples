var amqp = require('amqp');

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

var routingKey = process.argv[2];
if (!routingKey) {
    console.log("Usage: node consumer <routingKey>");
    process.exit();
}

var conn = amqp.createConnection({ host: 'localhost' });
conn.on('ready', function() {
    console.log("connected");

    var exchange = conn.exchange('test-direct-routing-exchange', {type:'direct'}, function() {
	console.log("exchange ready");

	var queue = conn.queue('', function(q) {
	    console.log("queue " + q.name + " set up");
	    q.bind('test-direct-routing-exchange', routingKey);
            q.subscribe(function(message) {
		console.log("Received " + routingKey + " message: " + message.body);
	    });
	});

    });
});
