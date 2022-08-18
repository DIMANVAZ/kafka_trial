//https://www.npmjs.com/package/dotenv
//https://devcenter.heroku.com/articles/cloudkarafka#node-js
//https://api.cloudkarafka.com/console/a48ed08f-fb00-4e0e-a5cf-32aef9c1619e/details
// установлены kafka-node и node-rdkafka

require('dotenv').config({ debug: true, path: './karafka/.env' });
console.log(process.env);

//---- 1. Пример Producer для node-rdKafka и Кондуктора: -----------------------------
const Kafka = require("node-rdkafka");

/*const kafkaConf = {
    "group.id": "cloudkarafka-example",
    "metadata.broker.list": "127.0.0.1:9092",
    "socket.keepalive.enable": true,
};

const topic = `first_topic`;

const genMessage = i => new Buffer(`Kafka example, message number ${i}`);
const producer = new Kafka.Producer(kafkaConf);
const maxMessages = 20;

producer.on("ready", function(arg) {
    console.log(`producer ${arg.name} ready.`);
    for (let i = 0; i < maxMessages; i++) {
        producer.produce(topic, -1, genMessage(i), i); // Если прямо написать 0 - будет писать в P0. А вот -1
    }
    setTimeout(() => producer.disconnect(), 0);
});

producer.on("disconnected", function(arg) {
    process.exit();
});

producer.on('event.error', function(err) {
    console.error(err);
    process.exit(1);
});
producer.on('event.log', function(log) {
    console.log(log);
});
producer.connect();*/

//---- 2. Пример Producer для node-rdKafka и CloudKarafka: -----------------------------
const kafkaConf2 = {
    "group.id": "cloudkarafka-example",
    "metadata.broker.list": process.env.CLOUDKARAFKA_BROKERS.split(","),
    "socket.keepalive.enable": true,
    "security.protocol": "SASL_SSL",
    "sasl.mechanisms": "SCRAM-SHA-256",
    "sasl.username": process.env.CLOUDKARAFKA_USERNAME,
    "sasl.password": process.env.CLOUDKARAFKA_PASSWORD,
    "debug": "generic,broker,security"
};

const topic2 = `soyh3hjc-default`;

const genMessage2 = (i) => new Buffer(`"${i}":"${Date.now()}"`);
const producer2 = new Kafka.Producer(kafkaConf2);
const maxMessages2 = 20;

producer2.on("ready", function(arg) {
    console.log(`producer ${arg.name} ready.`);
    for (let i = 0; i < maxMessages2; i++) {
        producer2.produce(topic2, -1, genMessage2(i), i); // Если прямо написать 0 - будет писать в P0. А вот -1
    }
    setTimeout(() => producer2.disconnect(), 0);
});

producer2.on("disconnected", function(arg) {
    process.exit();
});

producer2.on('event.error', function(err) {
    console.error(err);
    process.exit(1);
});
producer2.on('event.log', function(log) {
    console.log(log);
});
producer2.connect();