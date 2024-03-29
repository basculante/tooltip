let setUpToolTip = function() {
  let tooltip = "",
    toolTipDiv = document.querySelector(".div-tooltip"),
    toolTipElements = Array.from(document.querySelectorAll(".icon")),
    timer;

  let displayToolTip = function(e, obj) {
    tooltip = obj.dataset.tooltipicon;
    toolTipDiv.innerHTML = tooltip;
    toolTipDiv.style.top = e.pageY + "px";
    toolTipDiv.style.left = e.pageX + "px";
    // toolTipDiv.style.opacity = 1;
    fadeIn(toolTipDiv);
  };

  let fadeOut = function(element) {
    let op = 1;
    if (!timer) {
      timer = setInterval(function() {
        if (op <= 0.1) {
          clearInterval(timer);
          timer = null;
          element.style.opacity = 0;
          element.style.display = "none";
        }
        element.style.opacity = op;
        op -= op * 0.1;
      }, 10);
    }
  };

  let fadeIn = function(element) {
    var op = 0.1; // initial opacity
    element.style.display = "block";
    var timer = setInterval(function() {
      if (op >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = op;
      op += op * 0.1;
    }, 10);
  };

  toolTipElements.forEach(function(elem) {
    let timeout;
    elem.addEventListener("mouseenter", function(e) {
      let that = this;
      timeout = setTimeout(function() {
        displayToolTip(e, that);
      }, 200);
    });
    elem.addEventListener("mouseleave", function(e) {
      //   toolTipDiv.style.opacity = 0;
      clearTimeout(timeout);
      fadeOut(toolTipDiv);
    });
  });
};

setUpToolTip();
