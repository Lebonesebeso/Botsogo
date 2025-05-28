// Feedback form submission and display
document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedback-form");
    const feedbackList = document.getElementById("feedback-list");
  
    if (feedbackForm && feedbackList) {
      feedbackForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = document.getElementById("feedback-name").value.trim();
        const message = document.getElementById("feedback-message").value.trim();
  
        if (name && message) {
          const entry = document.createElement("div");
          entry.className = "feedback-entry p-3 rounded shadow-sm mb-3";
  
          const content = `
            <h5>${name}</h5>
            <p>${message}</p>
          `;
          entry.innerHTML = content;
          feedbackList.prepend(entry);
  
          feedbackForm.reset();
        } else {
          alert("Please enter both your name and feedback.");
        }
      });
    }
  });
  
  // Accordion toggle icon behavior (optional)
  const accordionToggles = document.querySelectorAll(".accordion-button");
  
  accordionToggles.forEach(button => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      accordionToggles.forEach(btn => {
        if (btn !== button) {
          btn.setAttribute("aria-expanded", "false");
        }
      });
      button.setAttribute("aria-expanded", !expanded);
    });
  });
  
  // Scroll to top button (optional enhancement)
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
  if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });
  
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  