document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".project-modal");
    const closeBtn = document.getElementById("modal_close");

    if (modal) {
        // Hide modal initially
        modal.style.display = "none";

        // Close modal when close button is clicked
        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                modal.style.display = "none";
            });
        }

        // Close modal when clicking outside of the modal container
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // Handle "Voir le projet" buttons
    const projectButtons = document.querySelectorAll(".project-card button");

    projectButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const projectId = e.target.id;
            
            // Find project in the data array provided by data.js
            const project = data.projects.find(p => p.id === projectId);

            if (project && modal) {
                // Populate modal data
                const titleEl = document.getElementById("project_title");
                if (titleEl) titleEl.textContent = project.title;

                const descEl = document.getElementById("descrption");
                if (descEl) descEl.textContent = project.description;
                
                // Select the main cover image
                const mainCover = document.querySelector(".project-modal .content > img");
                if (mainCover) {
                    mainCover.src = project.cover2 || project.cover;
                }

                // Problem & Solution
                const problemEl = document.getElementById("problem");
                const solutionEl = document.getElementById("solution");
                if (problemEl) problemEl.textContent = project.problem || "Non spécifié.";
                if (solutionEl) solutionEl.textContent = project.solution || "Non spécifiée.";

                // Visuels
                const visuelsContainer = document.querySelector("#visuels .images");
                if (visuelsContainer) {
                    visuelsContainer.innerHTML = ""; // Clear existing images
                    if (project.visuels && project.visuels.length > 0) {
                        project.visuels.forEach(visuel => {
                            const img = document.createElement("img");
                            img.src = visuel.src;
                            img.alt = visuel.alt || "Visuel du projet";
                            visuelsContainer.appendChild(img);
                        });
                    }
                }

                // Show modal
                modal.style.display = "flex";
            }
        });
    });

    // Handle navigation active state
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove("active"));
            // Add active class to clicked link
            link.classList.add("active");
            
            // Note: Since only the #projects section is defined in HTML, 
            // we just update the active states here for visual feedback.
        });
    });
});
