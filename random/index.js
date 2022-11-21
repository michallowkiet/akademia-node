const http = require("http");
const rand = require("./random");

const server = http.createServer((req, res) => {
  const randomNumber = rand.randNumber(1, 222);
  const randomArray = rand.randArray(1, 222, 10);
  const randomString = rand.randString(40);

  const data = JSON.stringify({
    randomNumber,
    randomArray,
    randomString,
  });

  console.log(data);

  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  return res.end(data);
});

server.listen(3000, () => {
  console.log("Serwer started on port 3000");
});
