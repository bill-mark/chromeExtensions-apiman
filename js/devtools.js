let anniu_1 = document.getElementById('changeColor');
  
  anniu_1.onclick = function(element) {
  	
    let color = "yellow";
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };