const linkInput = document.getElementById("link-input");
const saveButton = document.getElementById("save-button");

saveButton.addEventListener("click", () => {
  const link = linkInput.value;
  chrome.storage.sync.set({ link });
});