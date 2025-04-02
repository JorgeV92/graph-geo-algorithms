document.getElementById("searchBox").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const links = document.querySelectorAll(".sidebar ul li");
  
    links.forEach((li) => {
      const text = li.textContent.toLowerCase();
      li.style.display = text.includes(query) ? "block" : "none";
    });
  });
  