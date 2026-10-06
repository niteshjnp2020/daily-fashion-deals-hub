const buttons = document.querySelectorAll(".category");
const cards = document.querySelectorAll(".deal-card");
const count = document.getElementById("dealCount");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    let visible = 0;

    cards.forEach(card => {
      const categories = card.dataset.category.split(" ");
      const show = filter === "all" || categories.includes(filter);
      card.classList.toggle("hidden", !show);
      if (show) visible++;
    });

    count.textContent = visible;
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
