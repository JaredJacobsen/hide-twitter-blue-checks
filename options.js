document.addEventListener("DOMContentLoaded", () => {
  const hideBlueChecksCheckbox = document.getElementById("hideBlueChecks");
  const hideTweetsOption = document.getElementById("hideTweetsOption");

  chrome.storage.sync.get(["hideBlueChecks", "hideTweetsOption"], (data) => {
    hideBlueChecksCheckbox.checked = data.hideBlueChecks ?? true;
    hideTweetsOption.value = data.hideTweetsOption ?? "forYou";
  });

  hideBlueChecksCheckbox.addEventListener("change", () => {
    chrome.storage.sync.set({ hideBlueChecks: hideBlueChecksCheckbox.checked });
  });

  hideTweetsOption.addEventListener("change", () => {
    chrome.storage.sync.set({ hideTweetsOption: hideTweetsOption.value });
  });
});
