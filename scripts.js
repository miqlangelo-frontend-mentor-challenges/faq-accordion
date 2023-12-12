document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll(".question").forEach((button) => {
        button.addEventListener("click", () => {
            const item = button.parentNode;
            const answer = item.querySelector(".answer");

            answer.style.display =
                answer.style.display === "block" ? "none" : "block";
            button.classList.toggle("active");
        });
    });
});
