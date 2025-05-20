document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("rosterGrid");

  const render = (list) => {
    grid.innerHTML = "";

    list.forEach((townsfolk) => {
      const col = document.createElement("div");

      col.className = "col-6 col-lg-2";

      col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${townsfolk.Photo}" class="card img-top" alt="${townsfolk.Name}}">
                <div class="card-body text-center">
                    <h5 class="card-title mb-1">
                    ${townsfolk.Name}
                    </h5>
                    <div class='badge badge-position badge-pos-${townsfolk.Role}'>
                        ${townsfolk.Role}
                    </div>
                    <p class="small text-muted mb-0">
                        words
                    </p>
                </div>
            </div>
            `;

      grid.appendChild(col);
    });
  };

  render(townsfolk);
});
