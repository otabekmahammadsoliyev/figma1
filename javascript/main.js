let form = document.querySelector(".form");
let ic1 = document.querySelector(".icon1");
let ic2 = document.querySelector(".icon2");

form.addEventListener("click", () => {
  ic1.classList.toggle("active");
  ic2.classList.toggle("active2");
});

// //////////////
let box = document.querySelector(".bottom");
const Bace_Url = "https://dummyjson.com";

fetch(`${Bace_Url}/products`)
  .then((res) => res.json())
  .then((data) => MapHtml(data));

function MapHtml(data) {
  let product = data.products;
  console.log(product);
  data.products.forEach((element) => {
    box.innerHTML += `
          <div class="sas">
            <img src="${element.thumbnail}" alt="" />
            <div class="sa">
              <h1>${element.title}</h1>
              <p>${element.Amalyot}</p>
            </div>
             </div>`;
  });
}
MapHtml();
