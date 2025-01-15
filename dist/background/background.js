"use strict";
chrome.runtime.onInstalled.addListener(() => {
    console.log("Scam Recognizer extension installed!");
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
        chrome.scripting.executeScript({
            target: { tabId },
            files: ["content/contentScript.js"],
        });
    }
});
