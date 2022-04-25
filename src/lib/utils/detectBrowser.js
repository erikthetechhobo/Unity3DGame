import {browser, os, displayInstall, isPWArunning} from '$lib/stores/browserData';

async function PWAcheck() {
    // For Safari
    if(window.navigator.standalone) {
        isPWArunning.set(true);
        return true;
    }

    // For Chrome
    if(window.matchMedia('(display-mode: standalone)').matches) {
        isPWArunning.set(true);
        return true;
    }

    // If neither is true, it's not installed
    isPWArunning.set(false);
    return false
}
async function readBrowser() {
    let browserData = await navigator;
    //console.log(browserData);
    if(browserData.vendor == 'Google Inc.') {
        browser.set('Chrome');
        return 'Chrome';
    }
    if(browserData.vendor == 'Apple Computer, Inc.') {
        browser.set('Safari');
        return 'Safari';
    }
    else {
        browser.set('Other');
        return 'Other';
    }
}

async function readOS() {
    let osData = await navigator;
    //console.log(osData);
    if(osData.platform == 'Win32') {
        os.set('Windows');
        return 'Windows';
    }
    if(osData.platform == 'MacIntel') {
        os.set('Mac');
        return 'Mac';
    }
    if(osData.platform == 'iPhone') {
        os.set('iOS');
        return 'iOS';
    }
    if(osData.platform == 'Linux x86_64') {
        os.set('Linux');
        return 'Linux';
    }
    if(osData.platform.includes('Linux') || osData.platform.includes('Android')) {
        os.set('Android');
        return 'Android';
    }
    else {
        return 'Other OS';
    }
}

async function isInstallable() {
    let pwaChecker = await PWAcheck();
    let browserDetected = await readBrowser();
    let osDetected = await readOS();
    if(pwaChecker) {
        displayInstall.set(false);
        return;
    }
    else{
        if(browserDetected == 'Safari' && osDetected == 'iOS') {
            displayInstall.set(true);
            return;
        }
        if(browserDetected == 'Chrome' && (osDetected == 'Android' || osDetected == 'Windows' || osDetected == 'Mac')) {
            displayInstall.set(true);
            return;
        }
        else{
            displayInstall.set(false);
            return;
        }
    }
}

const detectBrowser = {
    isInstallable,
    PWAcheck,
}

export default detectBrowser;