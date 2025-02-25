chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    // Logic to reduce lag, e.g., suspend inactive tabs
    chrome.tabs.query({ active: false }, (tabs) => {
      tabs.forEach((tab) => {
        chrome.tabs.update(tab.id, { muted: true }); // Mute inactive tabs
      });
    });
  }
});
