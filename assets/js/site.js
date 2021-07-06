function openDetails() {
  document.getElementById("primary_nav").style.left = "-400px";
  document.getElementById("overview_content").style.marginLeft = "0";
  document.getElementById("overview_content").style.marginRight = "50%";
  document.getElementById("detail_content").style.right = "0";
}

function closeDetails() {
  document.getElementById("primary_nav").style.left = "0";
  document.getElementById("overview_content").style.marginLeft = "400px";
  document.getElementById("overview_content").style.marginRight = "0";
  document.getElementById("detail_content").style.right = "-50%";
}
