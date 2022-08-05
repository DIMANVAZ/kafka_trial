
const Chance = require('chance');
const chance = new Chance();

const kafka = require('kafka-node'),
    Producer = kafka.Producer,
    KeyedMessage = kafka.KeyedMessage,
    client = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'}),
    producer = new Producer(client),
    km = new KeyedMessage('key', 'message'),
    payloads = [
        {topic: 'topec', messages: 'fakafaka', partition: 0 },
    ];
producer.on('ready', function () {
    setInterval(()=>{
        producer.send([
            {topic: 'topec', messages: chance.animal(), partition: 0 },
        ], function (err, data) {
            console.log(data);
        });
    }, 1000)

});

producer.on('error', function (err) {})