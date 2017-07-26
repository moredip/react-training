// This is a fake gateway to our backend server. It demonstrates the need to manage asynchronous interactions.

export function starMessage(messageId){
  return delayFor(5000).then(function () {
    return true;
  });
}

function delayFor(duration) {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve();
    }, duration)
  });
}

