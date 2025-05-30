let page;
function checkPage() {
  page = window.location.href.split("/");
  page = page[page.length - 1];
}
checkPage();
if (document.body.classList.contains("in")) {
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

      list.forEach((townsfolk, index) => {
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
                    
            <button class="btn btn-sm btn-primary show-info-btn" data-player-index="${index}" data-bs-toggle="modal" data-bs-target="#playerModal">
            More Info
          </button>

                </div>
            </div>
            `;

        grid.appendChild(col);
        get(`button[data-player-index="${index}"]`).addEventListener(
          "click",
          () => {
            get(".modal-title").textContent = townsfolk.Name;
            get(".modal-body").textContent = townsfolk.Story;
          }
        );
      });
    };
    render(townsfolk);
  } else if (page == "masks.html") {
    const grid = document.getElementById("rosterGrid");

    const render = (list) => {
      grid.innerHTML = "";

      list.forEach((masks, index) => {
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
            <button class="btn btn-sm btn-primary show-info-btn" data-player-index="${index}" data-bs-toggle="modal" data-bs-target="#playerModal">
            More Info
          </button>

                </div>
            </div>
            `;

        grid.appendChild(col);
        get(`button[data-player-index="${index}"]`).addEventListener(
          "click",
          () => {
            get(".modal-title").textContent = masks.Name;
            get(".modal-body").textContent = masks.Obtained;
          }
        );
      });
      };
    render(masks);
  }
});

function type(location, message) {
  message = message.split("");
  for (let i = 0; i < message.length; i++) {
    setTimeout(() => location.append(message[i]), 90 * i);
  }
  setTimeout(() => {
    let audio = new Audio("audio/Skull Kid.mp3");
    audio.play();
    document.getElementById("fateSeeled").classList.add("d-none");
    document.getElementById("skullKid").classList.add("d-none");
    document
      .querySelectorAll("#vanishify")
      .forEach((e) => e.classList.remove("d-none"));
  }, 90 * message.length);
}
function get(arg) {
  return document.querySelector(arg);
}
