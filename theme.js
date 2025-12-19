document.addEventListener("DOMContentLoaded", () => {
 
  // ===============================
  // COOKIE POPUP
  // ===============================
  const cookiePopup = document.getElementById("cookie-popup");
  const acceptBtn = document.getElementById("accept-cookies");
  const rejectBtn = document.getElementById("reject-cookies");
 
  if (cookiePopup && !localStorage.getItem("cookiesChoice")) {
    cookiePopup.style.display = "flex";
  }
 
  function closeCookiePopup() {
    cookiePopup.classList.add("fade-out");
    setTimeout(() => cookiePopup.style.display = "none", 400);
  }
 
  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesChoice", "accepted");
      closeCookiePopup();
    });
  }
 
  if (rejectBtn) {
    rejectBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesChoice", "rejected");
      closeCookiePopup();
    });
  }
 
  // ===============================
  // DARK / LIGHT MODE
  // ===============================
  const themeSwitch = document.getElementById("theme-switch");
 
  // Thema laden
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (themeSwitch) themeSwitch.checked = true;
  }
 
  // Toggle wissel
  if (themeSwitch) {
    themeSwitch.addEventListener("change", () => {
      if (themeSwitch.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }
    });
  }
 
});

// ===============================
// TIJGEBONDEN BEGROETING
// ===============================
const greetingContainer = document.getElementById("greeting");
if (greetingContainer) {
  const now = new Date();
  const hour = now.getHours();
  let greeting;

  if (hour >= 5 && hour < 12) {
    greeting = "Goedemorgen";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Goedemiddag !";
  } else if (hour >= 18 && hour < 22) {
    greeting = "Goedenavond!";
  } else {
    greeting = "Goedenacht!";
  }

  greetingContainer.textContent = greeting;

  // Fade-in effect
  setTimeout(() => {
    greetingContainer.style.opacity = 1;
  }, 100);
}

// ===============================
// COUNTDOWN NAAR VERJAARDAG (3 FEBRUARI)
// ===============================
function startBirthdayCountdown() {
  const countdownEl = document.getElementById("countdown");
  if (!countdownEl) return;

  function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let birthday = new Date(`February 3, ${currentYear} 00:00:00`);

    // Als de verjaardag dit jaar al geweest is, neem volgend jaar
    if (now > birthday) {
      birthday = new Date(`February 3, ${currentYear + 1} 00:00:00`);
    }

    const diff = birthday - now;

    if (diff <= 0) {
      countdownEl.textContent = "🎉 Het is je verjaardag! 🎉";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.textContent = `${days} dagen ${hours}u ${minutes}m ${seconds}s tot je verjaardag!`;
  }

  updateCountdown(); // Eerste update direct
  const timer = setInterval(updateCountdown, 1000);
}

// Start de countdown zodra DOM geladen is
document.addEventListener("DOMContentLoaded", startBirthdayCountdown);

 
 
