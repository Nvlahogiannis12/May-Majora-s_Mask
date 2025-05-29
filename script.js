let page;
function checkPage() {
  page = window.location.href.split("/");
  page = page[page.length - 1];
}
checkPage();
if (page == "index.html") {
  document
    .querySelectorAll("#vanishify")
    .forEach((e) => e.classList.add("d-none"));
  type(
    document.getElementById("fateSeeled"),
    "You've met with a terrible fate, haven't you?"
  );
}
document.addEventListener("DOMContentLoaded", () => {
  if (page == "characters.html") {
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
                    <div class='badge-pos-${townsfolk.Role}'>
                        ${townsfolk.Role}
                    </div>
                    <p class="small text-muted mb-0">
                        
                    </p>
                </div>
            </div>
            `;

        grid.appendChild(col);
      });
    };

    render(townsfolk);
  } else if (page == "masks.html") {
    const grid = document.getElementById("rosterGrid");

    const render = (list) => {
      grid.innerHTML = "";

      list.forEach((masks) => {
        const col = document.createElement("div");

        col.className = "col-6 col-lg-2";

        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${masks.Photo}" class="card img-top" alt="${masks.Name}">
                <div class="card-body text-center">
                    <h5 class="card-title mb-1">
                    ${masks.Name}
                    </h5>
                    <div class='badge-pos-${masks.Purpose}'>
                        ${masks.Purpose}
                    </div>
                    <p class="small text-muted mb-0">
                        
                    </p>
                </div>
            </div>
            `;

        grid.appendChild(col);
      });
    };

    render(masks);
  }
});

function type(location, message) {
  message = message.split("");
  for (let i = 0; i < message.length; i++) {
    setTimeout(() => {
      location.append(message[i]);
    }, 90 * i);
  }
  let audio = new Audio("audio/Skull Kid.mp3");
  audio.play();
}
