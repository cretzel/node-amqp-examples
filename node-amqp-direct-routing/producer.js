var amqp = require('amqp');

var routingKey = process.argv[2];
var message = process.argv[3] || "Hello World";
if (!routingKey) {
    console.log("Usage: node producer <routingKey> <message>");
    process.exit();
}

var conn = amqp.createConnection({ host: 'localhost' });
conn.on('ready', function() {
    console.log("connected");

    var exchange = conn.exchange('test-direct-routing-exchange', {type:'direct'}, function(ex) {
	console.log("exchange ready");

	console.log("sending message");
	ex.publish(routingKey, {body: message});
        process.exit();
    });
});
