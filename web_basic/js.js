const chatWrapper = document.querySelector(".chat-wrapper");
const chatInputWrapper = document.querySelector(".chat-input-wrapper");
const chatInput = document.querySelector(".chat-input");

chatInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
  else if (event.key === "Enter" && event.shiftKey) {
    let diff = chatInput.scrollHeight - parseInt(chatInput.style.height);
    diff = diff ? diff : 0;
    chatInput.style.height = chatInput.scrollHeight + "px";

    const chatInputWrapperHeight = parseInt(window.getComputedStyle(chatInputWrapper).height);
    chatInputWrapper.style.height = (chatInputWrapperHeight + diff) + "px";

    const currentHeight = parseInt(window.getComputedStyle(chatWrapper).height);
    chatWrapper.style.maxHeight = (currentHeight - diff) + "px";
  }
});

function sendMessage() {
  const message = chatInput.value.trim();
  if (message !== "") {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatWrapper.appendChild(messageElement);
    chatInput.value = "";
    chatInput.style.height = "";
    chatWrapper.style.maxHeight = "";
    chatInputWrapper.style.height = "";
    chatWrapper.scrollTop = chatWrapper.scrollHeight;
  }
}
