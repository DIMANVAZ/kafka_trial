//https://www.npmjs.com/package/dotenv
//https://devcenter.heroku.com/articles/cloudkarafka#node-js
//https://api.cloudkarafka.com/console/a48ed08f-fb00-4e0e-a5cf-32aef9c1619e/details
// установлены kafka-node и node-rdkafka

//require('dotenv').config({ debug: true, path: './karafka/.env' });
require('dotenv').config({ debug: true, path: './karafka/cond/.env' });
console.log(process.env);

const Chance = require('chance'); //генератор рандомной фигни
const chance = new Chance();

const Kafka = require("node-rdkafka");
/*const kafkaConf = {
    "group.id": "cloudkarafka-example",
    "metadata.broker.list": process.env.CLOUDKARAFKA_BROKERS.split(","),
    "socket.keepalive.enable": true,
    "security.protocol": "SASL_SSL",
    "sasl.mechanisms": "SCRAM-SHA-256",
    "sasl.username": process.env.CLOUDKARAFKA_USERNAME,
    "sasl.password": process.env.CLOUDKARAFKA_PASSWORD
};
const prefix = process.env.CLOUDKARAFKA_TOPIC_PREFIX;
const topic = `${prefix}.test`;
const producer = new Kafka.Producer(kafkaConf);
const maxMessages = 20;
const genMessage = i => new Buffer(`Kafka example, message number ${i}`);
producer.on("ready", function(arg) {
    console.log(`producer ${arg.name} ready.`);
    for (var i = 0; i < maxMessages; i++) {
        producer.produce(topic, -1, genMessage(i), i);
    }
    setTimeout(() => producer.disconnect(), 0);
});
producer.on("disconnected", function(arg) {
    process.exit();
});
producer.connect();*/

