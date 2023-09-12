```javascript
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('screenshotButton').addEventListener('click', function() {
        chrome.runtime.sendMessage({type: 'capture_screenshot'}, function(response) {
            console.log(response);
        });
    });

    document.getElementById('commentBox').addEventListener('blur', function() {
        let comment = document.getElementById('commentBox').value;
        chrome.runtime.sendMessage({type: 'save_comment', data: comment}, function(response) {
            console.log(response);
        });
    });

    loadComments();
});

function loadComments() {
    chrome.storage.sync.get(['comments'], function(result) {
        if (result.comments) {
            document.getElementById('commentBox').value = result.comments;
        }
    });
}
```