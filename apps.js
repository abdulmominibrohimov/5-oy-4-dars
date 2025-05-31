const buttons = document.querySelectorAll(".button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const element = document.documentElement;
        element.dataset.theme = button.dataset.theme;
    })
})