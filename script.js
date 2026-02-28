const cards = document.querySelectorAll(".card");

const show = () => {
    const t = window.innerHeight * .9;
    cards.forEach(c => {
        if (c.getBoundingClientRect().top < t) c.classList.add("show");
    });
};

show();
window.addEventListener("scroll", show);