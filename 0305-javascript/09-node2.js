const fs = require('fs');
const [n, input] = fs.readFileSync(
    process.platform === "linux" ? 
    "/dev/stdin" : "./input.txt").toString().trim().split("\r\n");

    console.log(n);
    console.log(input.split(" "));
    console.log(input.split(" ")[0]);
    console.log(input.split(" ")[1]);
    console.log(input.split(" ")[2]);
    console.log(typeof input.split(" ")[2])