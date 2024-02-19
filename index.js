async function fetchData(type = "skills") {
    let response;
    if (type === "skills") {
        response = await fetch("skill.json");
    }
    const data = await response.json();
    return data;
}

async function init() {
    try {
        const skillsData = await fetchData();
        showSkills(skillsData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        const iconSrc = skill.icon ? `src="${skill.icon}"` : "";
        skillHTML += `
        <div class="bar">
            <div class="info">
                <img ${iconSrc} alt="skill" />
                <span>${skill.name}</span>
            </div>
        </div>`;
    });
    skillsContainer.innerHTML = skillHTML;
}

// Call the init function to start the process
init();


