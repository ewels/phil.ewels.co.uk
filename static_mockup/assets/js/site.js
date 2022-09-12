var details_visible = null;

// Open the details pane
document.querySelectorAll(".details_btn").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all buttons
    var details_btns = document.querySelectorAll(".details_btn");
    [].forEach.call(details_btns, function (el) {
      el.classList.remove("clicked");
    });

    // Add active class to clicked button
    var btn = e.target.closest(".details_btn");
    btn.classList.add("clicked");

    // Get the target
    var target_id = btn.getAttribute("href");
    document.location.hash = target_id;

    // Show the details pane
    document.getElementById("sidebar").style.left = "calc(-1 * var(--sidebar-width))";
    document.getElementById("content").style.marginLeft = "0";
    document.getElementById("content").style.width = "calc(50% - (var(--borderbar-width) / 2))";
    document.getElementById("content").style.marginRight = "50%";
    document.getElementById("detail").style.right = "var(--borderbar-width)";
  });
});

// Close the details pane
document.querySelectorAll(".close_details_btn").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all buttons
    var details_btns = document.querySelectorAll(".details_btn");
    [].forEach.call(details_btns, function (el) {
      el.classList.remove("clicked");
    });

    // Hide the details pane
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("content").style.marginLeft = "var(--sidebar-width)";
    document.getElementById("content").style.width = "calc(100% - var(--sidebar-width) - var(--borderbar-width))";
    document.getElementById("content").style.marginRight = "0";
    document.getElementById("detail").style.right = "calc(-50% - (var(--borderbar-width) / 2))";
  });
});

// Enable bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
