const participantsList = document.getElementById("participantsList");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.getElementById("closeBtn");

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
