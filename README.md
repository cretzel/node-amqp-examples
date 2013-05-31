node-amqp-examples
==================

Implementation of the RabbitMQ tutorial examples (http://www.rabbitmq.com/tutorials/). 
Each example is a separate node application. To get the examples running, install rabbitmq, node.js and 
run npm install in one of the example subfolders.

4. Routing: node-amqp-direct-routing
------------------------

This is an implemenation of the 4th RabbitMQ tutorial example "Routing": 
A producer sends messages to direct exchange, each with a simple routing key ('black', 'white', ...). 
Each consumer creates one queue and binds it to the same exchange with one of the routing keys.

### Usage

Create a couple of consumers with a routing key:

```shell
node consumer black
node consumer white
node consumer red
```

Run the producer with a routing key and a message:

```shell
node producer black "Hello World"
node producer white "Can't touch this"
```

X. More Examples 
Not yet available, mate!
