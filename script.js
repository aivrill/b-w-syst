// Sidebar toggle
const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.querySelector(".sidebar");

if (toggleBtn && sidebar) {
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  document.addEventListener("click", e => {
    if (window.innerWidth <= 768) {
      if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
        sidebar.classList.remove("open");
      }
    }
  });
}

// Switch
const toggleSwitch = document.getElementById("toggleSwitch");
if (toggleSwitch) {
  toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
      console.log("Trip Album selected");
    } else {
      console.log("Feedback selected");
    }
  });
}