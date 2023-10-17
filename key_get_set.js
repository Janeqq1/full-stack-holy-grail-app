var redis = require("redis");
var client = redis.createClient();

client.set("qq_key", "Hello Qinqin!");
client.get("qq_key", function(err, reply) {
  console.log(reply);
});

client.mset('header', 0, 'left', 1, 'article', 2, 'right', 3, 'footer', 4);
client.mget(['header', 'left', 'article', 'right', 'footer'],
  function(err, value) {
    console.log(value);
});

client.quit();

