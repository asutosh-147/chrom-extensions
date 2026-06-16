function main() {
  const node = document.getElementById("fh-notice");
  node.remove();
  document.documentElement.style.removeProperty("overflow");
}

// waiting 2 sec for pop up to appear
setTimeout(() => main(), 2000);
