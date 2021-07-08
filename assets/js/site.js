var details_visible = null;

// Open the details pane
document.querySelectorAll(".details_btn").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e);
    document.getElementById("sidebar").style.left = "-400px";
    document.getElementById("content").style.marginLeft = "0";
    document.getElementById("content").style.width = "calc(50% - 30px)";
    document.getElementById("content").style.marginRight = "50%";
    document.getElementById("detail").style.right = "60px";
  });
});

// Close the details pane
document.querySelectorAll(".close_details_btn").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("content").style.marginLeft = "400px";
    document.getElementById("content").style.width = "calc(100% - 460px)";
    document.getElementById("content").style.marginRight = "0";
    document.getElementById("detail").style.right = "calc(-50% - 30px)";
  });
});

// Enable bootstrap tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
