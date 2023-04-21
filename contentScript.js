chrome.storage.sync.get(["hideBlueChecks", "hideTweetsOption"], (data) => {
  function hideBlueChecks() {
    const blueCheckIcons = document.querySelectorAll(
      'svg[data-testid="icon-verified"]'
    );
    blueCheckIcons.forEach((icon) => {
      icon.style.display = "none";
    });
  }
  if (data.hideBlueChecks) {
    setInterval(hideBlueChecks, 25);
  }

  function hideTweets() {
    const tweetDivs = document.querySelectorAll(
      'div[data-testid="cellInnerDiv"]'
    );
    tweetDivs.forEach((div) => {
      if (div.querySelector('svg[data-testid="icon-verified"]')) {
        div.style.display = "none";
      }
    });
  }
  function isForYouTabActive() {
    const forYouTab = document.querySelector(
      'a[role="tab"][aria-selected="true"]'
    );
    return forYouTab && forYouTab.innerText.includes("For you");
  }
  if (data.hideTweetsOption !== "never") {
    setInterval(() => {
      if (
        data.hideTweetsOption === "always" ||
        (data.hideTweetsOption === "forYou" && isForYouTabActive())
      ) {
        hideTweets();
      }
    }, 10);
  }
});
