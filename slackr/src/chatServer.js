// This is a fake chat server. It demonstrates the need to manage asynchronous interactions.

const HARDCODED_MESSAGES = [
  "This is a message from the server",
  "This is another one"
];

export function getRemoteMessages(){
  delayFor(1000).then(function () {
    return HARDCODED_MESSAGES;
  });
}

function delayFor(duration) {
	return function(){
		return new Promise(function(resolve, reject){
			setTimeout(function(){
				resolve();
			}, duration)
		});
	};
}

