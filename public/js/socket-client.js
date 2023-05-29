const labelOnline = document.querySelector("#label-online");
const labelOffline = document.querySelector("#label-offline");
const customMessage = document.querySelector("#message");
const btnSend = document.querySelector("#send");
const socket = io();

socket.on("connect", () => {
  console.log("connect");
  labelOffline.style.display = "none";
  labelOnline.style.display = "";
});

socket.on("disconnect", () => {
  console.log("disconnect");
  labelOffline.style.display = "";
  labelOnline.style.display = "none";
});

btnSend.addEventListener("click", () => {
  const message = customMessage.value;
  const payload = {
    id: 123456,
    user: "suhkha",
    message,
  };
  socket.emit("send-message", payload);
});
