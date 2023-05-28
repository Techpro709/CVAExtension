const linkInput = document.getElementById("link-input");
const saveButton = document.getElementById("save-button");

chrome.storage.sync.get(["link"], (result) => {
  const link = result.link;
  if (link) {
    linkInput.value = link;
  }
});

saveButton.addEventListener("click", () => {
  const link = linkInput.value;
  chrome.storage.sync.set({ link });
});