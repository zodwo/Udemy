const userData = [
  {
    category: "python",
    img: "https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg",
    headTexts: "The Complete Python Bootcamp From Zero to Hero in Python",
    user: "Jose Portilla",
    rating: "4.6",
    starImg: `
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/halfStar.png">
        `,
    peopleNumber: "(465,229)",
    price: "89.99",
  },
  {
    category: "python",
    img: "https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg",
    headTexts: "Automate the Boring Stuff with Python Programming",
    user: "Al Sweigard",
    rating: "4.7",
    starImg: `
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/halfStar.png">
        `,
    peopleNumber: "(107,504)",
    price: "89.99",
  },
  {
    category: "python",
    img: "https://img-b.udemycdn.com/course/240x135/950390_270f_3.jpg",
    headTexts: "Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]",
    user: "Krill Ermenko",
    rating: "4.5",
    starImg: `
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/halfStar.png">
        `,
    peopleNumber: "(107,037)",
    price: "89.99",
  },
  {
    category: "python",
    img: "https://img-b.udemycdn.com/course/240x135/2776760_f176_10.jpg",
    headTexts: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
    user: "Dr.Angela Yu",
    rating: "4.7",
    starImg: `
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/halfStar.png">
        `,
    peopleNumber: "(203,321)",
    price: "74.99",
  },
  {
    category: "python",
    img: "https://img-b.udemycdn.com/course/240x135/2485240_d405_7.jpg",
    headTexts: "Python : Master Programming and Development with 15 Projects",
    user: "Jose Portilla",
    rating: "4.3",
    starImg: `
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/halfStar.png">
        `,
    peopleNumber: "(13,287)",
    price: "64.99",
  },
];

const mainHTML = document.querySelector(".card-slide-wrapper");
const divIMG = document.querySelector(".bgimg");
const headTexts = document.querySelector(".headtexts");
const user = document.querySelector(".creator");
const rating = document.querySelector(".rating");
const star = document.querySelector(".star-wrapper");
const peopleNumber = document.querySelector(".nmbr-of-people");
const price = document.querySelector(".price");

userData.forEach((item, index) => {
  let code = `
  <div class="card">
  <div class="img-border">
    <div class="bgimg" style="background: url(${item.img}) no-repeat center/cover"></div>
  </div>
  <div class="text-section">
    <h4 class="headtexts">
      ${item.headTexts}
    </h4>
    <div class="creator">${item.user}</div>
    <div class="score">
      <span class="rating">${item.rating}</span>
      <div class="star-wrapper">
        ${item.starImg}
      </div>
      <div class="nmbr-of-people">${item.peopleNumber}</div>
    </div>
    <div class="price">$${item.price}</div>
  </div>
</div>
`;

  mainHTML.innerHTML += code;
  console.log(item);
  console.log(index);
});

const shopCartWrapper = document.querySelector(".shop-cart");
const shopMainCartWrapper = document.querySelector(
  ".shop-item-wrapper-all-wrapper"
);
const shopItemWrapper = document.querySelector(".shop-item-wrapper");
const displayNone = document.querySelector(".dn");
const allcard = document.querySelectorAll(".card");
const cartCounter = document.querySelector(".counter");
const totalPriceWrapper = document.querySelector(".total");

let cntnbmr = 0;
allcard.forEach((card, index) => {
  userData.forEach((userd, i) => {
    card.addEventListener("click", (e) => {
      if (index == i) {
        cntnbmr += 1;
        checkCounter();

        displayNone.style.display = "none";
        let currentItem = e.currentTarget;
        let b = `
            <div class="shop-item-wrapper">
            <div class="left" style="background: url(${userd.img}) no-repeat center/cover"></div>
                <div class="right">
                    <h4 class="headtexts">
                        ${userd.headTexts}
                    </h4>
                    <div class="creator">${userd.user}</div> 
                    <div class="price">$${userd.price}</div>
            </div>
            </div>
            `;
        // console.log(currentItem);
        shopMainCartWrapper.innerHTML += b;

        if (cntnbmr == 1) {
          totalPriceWrapper.innerHTML = `
                  <div class="total-price">
                    <span class="current-price">Total: $335</span>
                    <a href="" class="btns">Go to card</a>
                  </div>
              `;
          console.log(totalPriceWrapper);
        }
      }
    });
  });
});
checkCounter();

function checkCounter() {
  if (cntnbmr == 0) {
    cartCounter.style.display = "none";
    cartCounter.innerHTML = cntnbmr;
  } else {
    cartCounter.style.display = "block";
    cartCounter.innerHTML = cntnbmr;
  }

  if (cntnbmr == 3) {
    totalPriceWrapper.style.position = "absolute"
  } else if (cntnbmr == 4) {
    shopCartWrapper.style.overflowY = "scroll";
  }
}

let x = 0;

for (i = 0; i < userData.length - 1; i++) {
  x += 25;
  mainHTML.style.width = x + "%";
  console.log(x);
}

// divIMG.style.background = `url(${item.img}) no-repeat center/cover`;
// headTexts.innerHTML = item.headTexts;
// user.innerHTML = item.user;
// rating.innerHTML = item.rating;
// star.innerHTML = item.starImg;
// peopleNumber.innerHTML = item.peopleNumber;
// price.innerHTML = item.price;
