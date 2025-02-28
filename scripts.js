document.addEventListener("DOMContentLoaded", function() {
    const skillButtons = document.querySelectorAll(".skill");
    
    skillButtons.forEach(skill => {
        const decreaseButton = skill.querySelector(".decrease");
        const increaseButton = skill.querySelector(".increase");
        const levelDisplay = skill.querySelector(".skill-level");
        
        let skillLevel = 0;
        
        decreaseButton.addEventListener("click", function() {
            if (skillLevel > 0) {
                skillLevel--;
                levelDisplay.textContent = skillLevel;
            }
        });
        
        increaseButton.addEventListener("click", function() {
            if (skillLevel < 10) {
                skillLevel++;
                levelDisplay.textContent = skillLevel;
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");
    const modal = document.getElementById("skill-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");

    skills.forEach(skill => {
        skill.addEventListener("click", () => {
            const skillName = skill.querySelector(".skill-name").textContent;
            const skillDescription = skill.getAttribute("data-description");

            modalTitle.textContent = skillName;
            modalDescription.textContent = skillDescription;
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const skillButtons = document.querySelectorAll(".skill");
    const spCounter = document.getElementById("sp-count");
    let totalSP = 0;

    skillButtons.forEach(skill => {
        const decreaseButton = skill.querySelector(".decrease");
        const increaseButton = skill.querySelector(".increase");
        const levelDisplay = skill.querySelector(".skill-level");
        
        let skillLevel = 0;
        
        decreaseButton.addEventListener("click", function() {
            if (skillLevel > 0) {
                skillLevel--;
                totalSP--;
                levelDisplay.textContent = skillLevel;
                spCounter.textContent = totalSP;
            }
        });
        
        increaseButton.addEventListener("click", function() {
            if (skillLevel < 10) {
                skillLevel++;
                totalSP++;
                levelDisplay.textContent = skillLevel;
                spCounter.textContent = totalSP;
            }
        });
    });
});
/* mobile responsiveness */
document.addEventListener("DOMContentLoaded", function() {
    function adjustLayout() {
        const skills = document.querySelectorAll(".skill-category");
        if (window.innerWidth <= 600) {
            skills.forEach(skill => {
                skill.style.width = "90%";
            });
        } else {
            skills.forEach(skill => {
                skill.style.width = "250px";
            });
        }
    }
    
    adjustLayout();
    window.addEventListener("resize", adjustLayout);
});
