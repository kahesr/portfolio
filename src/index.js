document.addEventListener("DOMContentLoaded", function () {
  // Skill data: name and percentage
  const skills = [
    { name: "HTML", level: "100%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "80%" },
    { name: "WordPress", level: "95%" },
    { name: "Node.js", level: "70%" },
    { name: "Python", level: "85%" },
  ];

  const container = document.querySelector("#skills-container"); // Select the parent row

  // Create two column divs
  const col1 = document.createElement("div");
  col1.classList.add("col-sm-6");

  const col2 = document.createElement("div");
  col2.classList.add("col-sm-6");

  skills.forEach((skill, index) => {
    // Create the skill element
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");

    // Add the skill content
    skillDiv.innerHTML = `
      <div class="d-flex justify-content-between align-items-center pb-2">
        <h3>${skill.name}</h3>
        <span class="skill-lvl">${skill.level}</span>
      </div>
      <div class="progress-bar">
        <div class="skill-bar" style="width: 0;"></div>
      </div>
    `;

    // Distribute skills
    if (index < skills.length / 2) {
      col1.appendChild(skillDiv);
    } else {
      col2.appendChild(skillDiv);
    }
  });

  // Append columns to the row container
  container.appendChild(col1);
  container.appendChild(col2);

  // Animate progress bars
  setTimeout(() => {
    document.querySelectorAll(".skill").forEach((skill, index) => {
      let value = parseInt(skills[index].level);
      let bar = skill.querySelector(".skill-bar");
      bar.style.width = value + "%";
      bar.style.transition = "width 1.5s ease-in-out";
    });
  }, 200);
});
