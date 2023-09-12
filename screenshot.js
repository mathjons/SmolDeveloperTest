let screenshotData = null;

function captureScreenshot() {
    chrome.tabs.captureVisibleTab(null, {format: 'png'}, function(img) {
        screenshotData = img;
    });
}