const guideList = document.querySelector(".guides");

//setup guides
const setupGuides = data => {
  let html = "";
  data.forEach(doc => {});
};

// setup materialize components
document.addEventListener("DOMContentLoaded", function() {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  var items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});
