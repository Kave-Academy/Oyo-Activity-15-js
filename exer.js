function run(){

    const toTruncates = document.getElementById('output').innerHTML =  
      truncate('We are doing JS string exercises.') + " <br> " + 
      truncate('We are doing JS string exercises.',19) +"<br> "+ 
      truncate('We are doing JS string exercises.',15,'!!');
  
  function truncate(str, limit, ending) {
    if (limit && ending == null) {
        end = '...'
    }
    if (str.length > limit) str = str.substring (0, limit - end.length) + ending;
        return str;
  
  };
  
  tippy('#output', {
    content: 'Hooray, You did the activity correctly. Good job!',
    });
  
  console.log(toTruncates) 
  }
  
  