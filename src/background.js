let url;

chrome.webRequest.onCompleted.addListener(
  (details) => {
    url = details.url;
  },
  {
    urls: ['*://*.studydrive.net/d/prod/documents/*'],
  },
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'getUrl') {
    sendResponse(url);
  }
});
