function openDetails() {
  document.getElementById("sidebar").style.left = "-400px";
  document.getElementById("content").style.marginLeft = "0";
  document.getElementById("content").style.width = "50%";
  document.getElementById("content").style.marginRight = "50%";
  document.getElementById("detail").style.right = "0";
}

function closeDetails() {
  document.getElementById("sidebar").style.left = "0";
  document.getElementById("content").style.marginLeft = "400px";
  document.getElementById("content").style.width = "calc(100% - 400px)";
  document.getElementById("content").style.marginRight = "0";
  document.getElementById("detail").style.right = "-50%";
}
