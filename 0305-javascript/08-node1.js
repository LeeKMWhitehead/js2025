console.log("안녕하세요? 반갑습니다.");

const fs = require('fs');
const input = fs.readFileSync(
    process.platform === "linux" ? 
    "/dev/stdin" : "./input.txt").toString().trim().split("\r\n");

    var result = parseInt(input[0])+parseInt(input[1]);
    console.log(result);
    

// console.log(input[0]);
// console.log(input[1]);
// console.log(input);
// console.log(typeof input);