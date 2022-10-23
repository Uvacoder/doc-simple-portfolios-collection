// disable unuseable links
const links = document.querySelectorAll("a");
links.forEach((a) => {
    a.onclick = () => {
        let link = a.href.split("#");
        if (link[1] == "") {
            return false;
        }
    };
});

// testimonials Cards
const bolits = document.querySelectorAll(".bolit");
const cards = document.querySelectorAll(".card");

bolits.forEach((bolit) => {
    bolit.onclick = () => {
        bolits.forEach((bolite) => {
            bolite.classList.remove("active");
        });
        bolit.classList.add("active");
        cards.forEach((card) => {
            if (bolit.dataset.target == card.dataset.target) {
                card.classList.add("active");
            } else {
                card.classList.remove("active");
            }
        });
    };
});

// Back to top Button
const btn = document.querySelector(".back__to__top");

window.onscroll = () => {
    if (window.scrollY >= 1000) {
        btn.classList.add("active");
    } else {
        btn.classList.remove("active");
    }
};
