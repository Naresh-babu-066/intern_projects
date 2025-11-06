// Elements
const wrapper = document.querySelector(".wrapper");
const loginLink = document.getElementById("loginLink");
const registerLink = document.getElementById("registerLink");

// Toggle Animation
registerLink.onclick = () => {
  wrapper.classList.add("active");
};

loginLink.onclick = () => {
  wrapper.classList.remove("active");
};

// Show Login Popup
document.querySelector(".sidebar button:first-child").addEventListener("click", () => {
  document.getElementById("loginPage").style.display = "flex";
});

// Close on outside click
document.getElementById("loginPage").addEventListener("click", (e) => {
  if (e.target.id === "loginPage") {
    document.getElementById("loginPage").style.display = "none";
  }
});

// Alert Function
function showAlert(boxId, message, type) {
  const alertBox = document.getElementById(boxId);
  alertBox.textContent = message;
  alertBox.className = "alert-box " + (type === "success" ? "alert-success" : "alert-error");
  alertBox.style.display = "block";
  setTimeout(() => (alertBox.style.display = "none"), 2500);
}

// Login Validation
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("loginMail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  if (email === "" || password === "") {
    showAlert("alertBox", "Please fill all login fields!", "error");
  } else {
    showAlert("alertBox", "Login successful!", "success");
  }
});

// Signup Validation
document.getElementById("signupBtn").addEventListener("click", () => {
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupMail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  if (name === "" || email === "" || password === "") {
    showAlert("alertBox2", "Please fill all signup fields!", "error");
  } else {
    showAlert("alertBox2", "Signup successful!", "success");
  }
});

// Dropdown toggles
document.querySelectorAll(".dropbtn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const dropdown = this.nextElementSibling;
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });
});

// Close dropdowns on outside click
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    document.querySelectorAll(".dropdown-content").forEach((menu) => {
      menu.style.display = "none";
    });
  }
};

// Open Login Popup Example
const loginPage = document.getElementById("loginPage");
document.querySelectorAll(".sidebar button")[0].addEventListener("click", () => {
  loginPage.style.display = "flex";
});

// Close login on click outside
loginPage.addEventListener("click", (e) => {
  if (e.target.id === "loginPage") {
    loginPage.style.display = "none";
  }
});