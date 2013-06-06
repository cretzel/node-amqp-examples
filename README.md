node-amqp-examples
==================

Implementation of the RabbitMQ tutorial examples (http://www.rabbitmq.com/tutorials/). 
Each example is a separate node application. To get the examples running, install rabbitmq, node.js and 
run npm install in one of the example subfolders.

1. Hello World: node-amqp-hello-world
------------------------

This example implements the 1st RabbitMQ tutorial example "Hello World":
A producer sends a message 'directly' to a queue. Here 'directly' means that the message is send to the default exchange (named '') which forwards it to the named queue. The consumer subscribes to the queue with the same name.

    P -> (Direct '') -> |Q| -> C

### Usage
 
```shell
node consumer
node producer "Hello World"
```

4. Routing: node-amqp-direct-routing
------------------------

This is an implemenation of the 4th RabbitMQ tutorial example "Routing": 
A producer sends messages to direct exchange, each with a simple routing key ('black', 'white', ...). 
Each consumer creates one queue and binds it to the same exchange with one of the routing keys.
            
              /> |Q1| -> C1
    P -> (Direct) 
              \> |Q2| -> C2

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
