```javascript
import { captureScreenshot } from './screenshot.js';

let screenshotData;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'capture_screenshot') {
    captureScreenshot().then(data => {
      screenshotData = data;
      saveScreenshot();
    });
  } else if (request.message === 'save_comment') {
    saveComment(request.comment);
  }
});

function saveScreenshot() {
  const link = document.createElement('a');
  link.href = screenshotData;
  link.download = 'screenshot.png';
  link.click();
}

function saveComment(comment) {
  const commentSchema = {
    url: window.location.href,
    comment: comment
  };

  chrome.storage.sync.set({[window.location.href]: commentSchema}, function() {
    console.log('Comment saved');
  });
}
```