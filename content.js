browser.runtime.onMessage.addListener((request) => {
    if (request.action === 'designMode') {
        document.designMode = request.mode;
    }
});

window.addEventListener("load", function (event) {
    browser.storage.local.get(['asdm_toogle_checked'], (result) => {
        checked = result.asdm_toogle_checked || false;

        let mode = 'off';
        if (checked) {
            mode = 'on';
        }
        document.designMode = mode;
    });
}, false);
