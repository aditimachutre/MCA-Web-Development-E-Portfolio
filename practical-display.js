
const practicalContainer = document.getElementById("practical-container");

practicalFiles.forEach((file, index) => {
    const title = file
        .replace(".html", "")
        .replace(/^Q\d+_/, "")
        .replace(/_/g, " ");

    const card = document.createElement("div");
    card.className = "document-card";

    card.innerHTML = `
        <div class="document-icon">${index + 1}</div>
        <h3>Q${index + 1}. ${title}</h3>
        <a href="${file}" target="_blank">View Practical</a>
    `;

    practicalContainer.appendChild(card);
});

// SEARCH PRACTICALS
const searchInput = document.getElementById("practical-search");
const practicalCount = document.getElementById("practical-count");

searchInput.addEventListener("input", function () {
    const searchText = this.value.toLowerCase();
    let visibleCount = 0;

    document.querySelectorAll(".document-card").forEach(card => {
        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    practicalCount.textContent =
        `Showing ${visibleCount} of ${practicalFiles.length} practicals`;
});

// SCROLL TO TOP
const topButton = document.getElementById("scroll-top");

if (topButton) {
    topButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// SCROLL TO BOTTOM
const bottomButton = document.getElementById("scroll-bottom");

if (bottomButton) {
    bottomButton.addEventListener("click", function () {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    });
}