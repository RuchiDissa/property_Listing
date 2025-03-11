const propertyCards = document.querySelectorAll(".property-card");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentPage = 1;
const itemsPerPage = 4;

// Function to render the current page
function renderPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    propertyCards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });

    // Disable buttons if at the start or end of pages
    prevButton.disabled = page === 1;
    nextButton.disabled = endIndex >= propertyCards.length;
}

// Event listeners for pagination buttons
prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
    }
});

nextButton.addEventListener("click", () => {
    if (currentPage * itemsPerPage < propertyCards.length) {
        currentPage++;
        renderPage(currentPage);
    }
});

// Initialize the first page
renderPage(currentPage);
