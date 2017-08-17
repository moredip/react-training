export function deleteMessage(messageId){
  return delayFor(2000).then(function () {
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

