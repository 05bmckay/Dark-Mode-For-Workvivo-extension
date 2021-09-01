let state = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  
  chrome.tabs.insertCSS(null, { file: "dark_mode.css" });
  state = !state;
});