document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('asdm_toogle');

    browser.storage.local.get(['asdm_toogle_checked'], (result) => {
        checkbox.checked = result.asdm_toogle_checked || false;
    });

    checkbox.addEventListener('click', function () {
        const checked = checkbox.checked;
        sendDesignMode(checked);
    });
});

function sendDesignMode(checked) {
    let mode = 'off';
    if (checked) {
        mode = 'on';
    }

    browser.storage.local.set({ asdm_toogle_checked: checked });

    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        browser.tabs.sendMessage(tabs[0].id, { action: 'designMode', mode: mode });
    });
}
