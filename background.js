;(() => {
    chrome.tabs.onActivated.addListener((activeInfo) => {
        browser.storage.local.get(['asdm_toogle_checked'], (result) => {
            checked = result.asdm_toogle_checked || false;
            sendDesignMode(checked);
        });
    });
})()

function sendDesignMode(checked) {
    let mode = 'off';
    if (checked) {
        mode = 'on';
    }
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        browser.tabs.sendMessage(tabs[0].id, { action: 'designMode', mode: mode });
    });
}
