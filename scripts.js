const correctPassword = "Братва";

const passwordPage = document.getElementById("passwordPage");
const mainPage = document.getElementById("mainPage");
const errorPage = document.getElementById("errorPage");
const passwordInput = document.getElementById("passwordInput");
const submitBtn = document.getElementById("submitBtn");
const participantsList = document.getElementById("participantsList");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.getElementById("closeBtn");

submitBtn.addEventListener("click", function() {
    const enteredPassword = passwordInput.value;
    if (enteredPassword === correctPassword) {
        passwordPage.style.display = "none";
        mainPage.style.display = "block";
    } else {
        passwordPage.style.display = "none";
        errorPage.style.display = "block";
    }
});

participantsList.addEventListener("click", function(event) {
    const participant = event.target;
    if (participant.tagName.toLowerCase() === "li") {
        const participantInfo = participant.getAttribute("data-info");
        modalContent.textContent = participantInfo;
        modal.style.display = "flex";
    }
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});
