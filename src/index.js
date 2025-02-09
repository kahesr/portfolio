function createSkillElements() {
  const skillsContainer = document.querySelector("#skills-container"); // Select the parent row

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
        <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="0" data-aos-delay="300" class="skill-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: ${parseInt(
          skill.level
        )}%;"></div>
      </div>
    `;

    skillElements.push(skillDiv); // Store skillDiv for animation

    // Distribute skills
    if (index < skills.length / 2) {
      col1.appendChild(skillDiv);
    } else {
      col2.appendChild(skillDiv);
    }
  });

  // Append columns to the row skillsContainer
  skillsContainer.appendChild(col1);
  skillsContainer.appendChild(col2);
}

///////////////////////////////////////////
const skills = [
  { name: "HTML", level: "100%" },
  { name: "CSS", level: "90%" },
  { name: "JavaScript", level: "80%" },
  { name: "WordPress/CMS", level: "95%" },
  { name: "Photoshop", level: "60%" },
  { name: "php", level: "50%" },
];

const skillElements = []; // Store skill elements in order (so the skill-bar assignment do not be dependant on the order of skills distribution)

document.addEventListener("DOMContentLoaded", createSkillElements);
