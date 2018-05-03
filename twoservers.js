let http = require("http");


const PORTONE = 7000;
const PORTTWO = 7500;


function handleRequestOne(request, response) {
	var url = request.url;
	response.end("Feel good about yourself!" + url);
}

function handleRequestTwo(request, response) {
	var url = request.url;
	response.end("Feel bad about yourself." + url);
}


let serverOne = http.createServer(handleRequestOne);
let serverTwo = http.createServer(handleRequestTwo);


serverOne.listen(PORTONE, function() {
	console.log(`The server is running on port ${PORTONE}`);
});

serverTwo.listen(PORTTWO, function() {
	console.log(`The server is running on port ${PORTTWO}`);
});
