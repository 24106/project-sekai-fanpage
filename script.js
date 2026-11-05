document.addEventListener("DOMContentLoaded", () => {
    // mobile navigation
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");
    if (toggle && nav) {
        toggle. addEventListener("click", () => {
            const isOpen = nav.classList.toggle("open");
            toggle.setAttribute("aria-expanded", String(isOpen));
            toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
            toggle.textContent = isOpen ? "✕" : "☰";
        });
    }

    // music page filters
    const filterButtons = document.querySelectorAll(".filter-button");
    const songCards = document.querySelectorAll(".song-card");
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;
            filterButtons.forEach((item) => item.classList.remove("active"));
            button.classList.add("active");
            songCards.forEach((card) => {
                card.hidden = filter !== "all" && card.dataset.category !== filter;
            });
        });
    });
});