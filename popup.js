document.getElementById('suspendTabs').addEventListener('click', () => {
  chrome.tabs.query({ active: false }, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.update(tab.id, { muted: true }); // Mute inactive tabs
    });
  });
});
