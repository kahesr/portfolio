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
        <div class="skill-bar" style="width: 0;"></div>
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

  setupIntersectionObserver();
}

function setupIntersectionObserver() {
  const skillsContainer = document.querySelector("#skills-container");
  const observer = new IntersectionObserver(animateSkillBars, {
    threshold: 0.5,
  });

  observer.observe(skillsContainer);
}

// Function to animate skill bars when visible
function animateSkillBars(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      skillElements.forEach((skillDiv, index) => {
        let value = parseInt(skills[index].level);
        let bar = skillDiv.querySelector(".skill-bar");
        bar.style.width = value + "%";
        bar.style.transition = "width 1.5s ease-in-out";
      });

      observer.disconnect(); // Stops observing after animation is triggered
    }
  });
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
