document.querySelectorAll("pre").forEach((pre) => {
  if (pre.parentElement && pre.parentElement.classList.contains("code-wrap")) return;
  const wrap = document.createElement("div");
  wrap.className = "code-wrap";
  pre.parentNode.insertBefore(wrap, pre);
  wrap.appendChild(pre);

  const button = document.createElement("button");
  button.className = "copy-button";
  button.type = "button";
  button.textContent = "Copy";
  button.addEventListener("click", async () => {
    await navigator.clipboard.writeText(pre.innerText);
    button.textContent = "Copied";
    setTimeout(() => {
      button.textContent = "Copy";
    }, 1200);
  });
  wrap.appendChild(button);
});
