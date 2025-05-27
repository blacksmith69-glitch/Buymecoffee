
function copyToClipboard(id) {
  const el = document.getElementById(id);
  navigator.clipboard.writeText(el.innerText).then(() => {
    const notif = document.getElementById("copied-" + id);
    notif.style.display = "block";
    setTimeout(() => notif.style.display = "none", 1500);
  });
}
