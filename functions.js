window.onbeforeunload = function(e) {
    chrome.runtime.sendMessage({msg : 'closing'}, function(response){
      console.log('eh nois');
    });
};

