let nav_bar_icon = document.querySelector(".nav-bar-icon");
let product_item = document.querySelector(".product-item");
let icons = document.querySelectorAll(".dropdown");
let left_icon = document.querySelector(".left-icon");
let right_icon = document.querySelector(".right-icon");
let hero_inner_contain = document.querySelector(".hero-inner-contain");
let hero_image = document.querySelector(".hero-image");
// nev bar icon

nav_bar_icon.addEventListener("click", () => {
  product_item.classList.toggle("nev-bar");
});

// dropdown icons
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    console.log(icon.parentElement.nextElementSibling);
    icon.classList.toggle("icon");
    icon.parentElement.nextElementSibling.classList.toggle("show-list");
  });
});

// left right icon

let hero_contain = [
  {
    image: "images/hero1.png",
    title: "Marble Products",
    description:
      "All King of Marble Product Used in Masjid Like Marble Wuzu Stand, Marble Mimber , MArble mehrab , Marble Jali for Dargah , Marble Parapet Jali , etc. ALL Over India Delivery Available.",
  },
  {
    image: "images/hero2.png",
    title: "Aman Gumbad",
    description:
      "Good quality RCC Gumbad & RCC Construction services and concrete products in large quantity to the construction industry to ensure timely completion of the project.",
  },
  {
    image: "images/hero3.png",
    title: "Masjid Minar Manufacturer",
    description:
      "All Type Of RCC Minar | ReadyMade Minar | Long and Strong Minar | Lighting Minar ALL Type Minar And Sizes are ready to Supply ALL Over India",
  },
  {
    image: "images/hero4.png",
    title: "Aman Parapate JAli",
    description:
      "Good Quality of Parapet Jali Available , Small Parapet | Big Parapet | Shahi Boundary | parapet BOundary Wall, etc. Available in Large Quantity.",
  },
];
let hero_src = hero_image.src;
let hero_h1 = hero_inner_contain.children[0].innerHTML;
let hero_p = hero_inner_contain.children[1].innerHTML;
let Count = 0;

left_icon.addEventListener("click", () => {
  hero_image.classList.add("hero-animate");
  hero_inner_contain.classList.add("hero-animate");
  if (Count >= hero_contain.length) Count = 0;
  let Data = hero_contain[Count];

  hero_image.src = Data.image;
  hero_inner_contain.children[0].innerHTML = Data.title;
  hero_inner_contain.children[1].innerHTML = Data.description;
  console.log(hero_p);
  Count++;
  setTimeout(() => {
    hero_image.classList.remove("hero-animate");
    hero_inner_contain.classList.remove("hero-animate");
  }, 600);
  console.log(Count);
});

right_icon.addEventListener("click", () => {
  hero_image.classList.add("hero-animate");
  hero_inner_contain.classList.add("hero-animate");
  if (Count <= 0) Count = hero_contain.length - 1;
  let Data = hero_contain[Count];
  hero_image.src = Data.image;
  hero_inner_contain.children[0].innerHTML = Data.title;
  hero_inner_contain.children[1].innerHTML = Data.description;
  Count--;
  setTimeout(() => {
    hero_image.classList.remove("hero-animate");
    hero_inner_contain.classList.remove("hero-animate");
  }, 600);
  console.log(Count);
});

document.addEventListener("DOMContentLoaded", () => {
  const productImages = document.querySelectorAll("#product-img img");
  const minarImage = document.getElementById("minar-image");
const  heroImage  = document.getElementById("hero-image")
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-zoom-in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  productImages.forEach((img, index) => {
    observer.observe(img);
  });

  // Observe Minar Image also
  if (minarImage) {
    observer.observe(minarImage);
  }
  if (heroImage) observer.observe(heroImage);
});
