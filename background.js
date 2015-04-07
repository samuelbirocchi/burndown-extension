chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.msg == "closing")
    	var r = confirm('Você já preencheu o burndown?\nCaso não tenha, clique OK para ir para a planilha.');
    	if(r){
    		chrome.storage.local.get({
    			spreedsheetUrl : ''
    		}, function(item){
    			if (item.spreedsheetUrl) {
    				window.open(item.spreedsheetUrl+'#gid=583963610');	
    			} else {
    				window.open('https://drive.google.com');
    			}    			
    		});    		
    	}
  });