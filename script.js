// Function to open the modal with the enlarged portrait
function openModal() {
    var modal = document.getElementById("portraitModal");
    var modal_content = document.getElementById("enlargedPortrait");
    modal.style.display = "block";
    modal_content.style.display = "flex";
    // document.body.style.overflow = "hidden"; // Disable scrolling
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("portraitModal");
    modal.style.display = "none";
    // document.body.style.overflow = "show"; // Enable scrolling
}

// Close the modal if clicking anywhere outside the image
window.onclick = function (event) {
    var modal = document.getElementById("portraitModal");
    if (event.target == modal) {
        closeModal();
    }
};

// Add an event listener to the portrait image
var portraitImage = document.getElementById("portraitImage");
portraitImage.addEventListener("click", function () {
    // Set the enlarged portrait image source
    var enlargedPortrait = document.getElementById("enlargedPortrait");
    enlargedPortrait.src = this.src;

    // Open the modal
    openModal();
});