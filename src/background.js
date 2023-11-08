let url;

chrome.webRequest.onCompleted.addListener(
  (details) => {
    url = details.url;
  },
  {
    urls: ['https://cdn.studydrive.net/d/prod/documents/*'],
  },
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'getUrl') {
    sendResponse(url);
  }
});
