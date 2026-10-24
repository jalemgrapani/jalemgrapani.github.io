// Variables
var themeButton = document.getElementById("themeButton");
var themeRoot = document.documentElement;
var iconElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');

// Functions
function getThemeText() {
  if (themeRoot.getAttribute("data-theme") === "dark") {
    return "Switch to light mode";
  }

  return "Switch to dark mode";
}

function updateThemeTooltip() {
  themeTooltip.setContent({ ".tooltip-inner": getThemeText() });
}

function removeNativeTitle() {
  themeButton.removeAttribute("title");
}

function hideAfterDelay(event) {
  var element = event.target;
  var tooltip = bootstrap.Tooltip.getInstance(element);

  clearTimeout(element.tooltipTimer);
  element.tooltipTimer = setTimeout(function () {
    tooltip.hide();
  }, 3000);
}

// Tooltips
removeNativeTitle();

iconElements.forEach(function (element) {
  new bootstrap.Tooltip(element, { trigger: "hover" });
});

var themeTooltip = new bootstrap.Tooltip(themeButton, {
  title: getThemeText,
  placement: "auto",
  trigger: "hover",
});

// Events
document.addEventListener("shown.bs.tooltip", hideAfterDelay);

new MutationObserver(updateThemeTooltip).observe(themeRoot, {
  attributes: true,
  attributeFilter: ["data-theme"],
});

new MutationObserver(removeNativeTitle).observe(themeButton, {
  attributes: true,
  attributeFilter: ["title"],
});
