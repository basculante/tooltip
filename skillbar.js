let setSkillBar = function(total) {
  let skillBarElements = Array.from(document.querySelectorAll(".skills"));
  console.log(skillBarElements)

  skillBarElements.forEach(function(elem) {
    elem.style.width = (elem.dataset.num / 100) * 100 + "%";
  });
};

setSkillBar();
