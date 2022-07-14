// dropdown menu
const dropdown = document.querySelector(".dropdown");

const select = dropdown.querySelector(".select");
const caret = dropdown.querySelector(".caret");
const menu = dropdown.querySelector(".menu");
const options = dropdown.querySelectorAll(".menu li");
const selected = dropdown.querySelector(".selected");

select.addEventListener("click", () => {
  select.classList.toggle("select-clicked");
  caret.classList.toggle("caret-rotate");
  menu.classList.toggle("menu-open");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    selected.innerText = option.innerText;
    select.classList.remove("select-clicked");
    caret.classList.remove("caret-rotate");
    menu.classList.remove("menu-open");
    options.forEach((item) => {
      item.classList.remove("active");
    });
    option.classList.add("active");
  });
});

// sending the color
document.getElementById("submit-color").addEventListener("click", () => {
  getColorScheme();
});

function getColorScheme() {
  const color = document.getElementById("color-input").value.slice(1);
  const colorMode = document.getElementById("selected").textContent.toLowerCase();
  const url = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${colorMode}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const colors = data.colors;
      const colorsHtml = colors
        .map((col) => {
          return `
        <div class="color">
          <div class="color-color" style="background-color: ${col.hex.value}"></div>
          <p class="color-hex">${col.hex.value}</p>
        </div>`;
        })
        .join("");
      document.getElementById("color-container").innerHTML = colorsHtml;
    });
}

getColorScheme();
