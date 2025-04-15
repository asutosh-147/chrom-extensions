window.addEventListener("keydown", (event) => {
  const isMac = navigator.userAgent.includes("Mac");
  const isCtrlOrCmd = isMac ? event.metaKey : event.ctrlKey;

  if (isCtrlOrCmd && event.key.toLowerCase() === "k") {
    event.preventDefault();
  }
});
