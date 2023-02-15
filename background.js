chrome.action.onClicked.addListener(function (tab) {
    chrome.tabs.query({}, function (tabs) {
      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].id != tab.id) {
          chrome.tabs.remove(tabs[i].id);
        }
      }
    });
  });