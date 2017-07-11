const uuid = require('uuid/v4');

export default function createMessage(text){
  const id = uuid();

  return {
    getId(){
      return id;
    },
    getText(){
      return text;
    },
    getStarState(){
      return 'unstarred';
    }
  };
}
