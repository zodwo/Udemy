const page2Sliderr = document.querySelector(".card-slide-wrapper");
const divIMG = document.querySelector(".bgimg");
const headTexts = document.querySelector(".headtexts");
const user = document.querySelector(".creator");
const rating = document.querySelector(".rating");
const star = document.querySelector(".star-wrapper");
const peopleNumber = document.querySelector(".nmbr-of-people");
const price = document.querySelector(".price");
const shopCartWrapper = document.querySelector(".shop-cart");
const shopInnerItem = document.querySelector(".shop-item-wrapper-all-wrapper");
const listEmpty = document.querySelector(".dn");
const cartNumber = document.querySelector(".counter");
const totalPriceWrapper = document.querySelector(".total");
const ShopScroll = document.querySelector(".shop-item-wrapper-all-wrapper");

let code;
let InShopCart;
let ShopCounter = 0;
let sum = 0;
let Id_Counter = 0;
// const allShopCarts = document.querySelectorAll(".shopcart")

class UI {
  static showSlideCard() {
    page2Sliderr.innerHTML = "";
    userData.forEach((item, indexsin) => {
      if (item.category === "python") {
        if (item.bestseller == true) {
          code = `
          <div class="card shopcart ${item.category}" id="${item.id}">
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
            <div class="best">Bestseller</div>
          </div>
        </div>
        `;
          page2Sliderr.innerHTML += code;
        } else {
          code = `
          <div class="card shopcart ${item.category}" id="${item.id}"> 
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
          page2Sliderr.innerHTML += code;
        }
      }
    });
  }

  static addToShopCart() {
    const allcard = document.querySelectorAll(".card");
    allcard.forEach((card, cardIndex) => {
      card.addEventListener("click", (e) => {
        UI.addShopItem(cardIndex, e, card.id);
      });
    });
  }

  static addShopItem(cardIndex, e, x) {
    Id_Counter = +x;
    const currentTarget = e.currentTarget;
    const shopItemWrapper = document.querySelectorAll(".shop-item-wrapper");

    const isAlreadyAdded = Array.from(shopItemWrapper).some((item) => {
      // console.log(+item.id);
      return item.id === currentTarget.id;
    });

    if (isAlreadyAdded) {
      return;
    }
    //call the cart

    userData.forEach((card, dataIndex) => {
      if (Id_Counter == dataIndex) {
        InShopCart = `
          <div class="shop-item-wrapper" id="${card.id}">
            <div class="left" style="background: url(${card.img}) no-repeat center/cover"></div>
            <div class="right">
              <h4 class="headtexts">${card.headTexts}</h4>
              <div class="creator">${card.user}</div>
              <div class="price">$${card.price}</div>
            </div>
          </div>
        `;
        UI.ShowShopCart(card.price);
      }
    });
    shopInnerItem.innerHTML += InShopCart;
    listEmpty.style.display = "none";
  }

  static ShowShopCart(price) {
    ShopCounter++;
    cartNumber.innerHTML = ShopCounter;
    cartNumber.style.display = "block";

    const shopCartPrice = price;

    function ShopCartPrice(shopCartPrice) {
      sum += parseFloat(shopCartPrice);
      return sum.toString().slice(0, 6);
    }

    if (ShopCounter > 0) {
      totalPriceWrapper.innerHTML = `
              <div class="total-price">
                <span class="current-price">Total: $${ShopCartPrice(
                  shopCartPrice
                )}</span>
                <a href="" class="btns">Go to card</a>
              </div>
      `;
    }
    if (ShopCounter >= 4) {
      ShopScroll.style.overflowY = "scroll";
    }
  }
}

UI.showSlideCard();

setTimeout(() => {
  UI.addToShopCart();
}, 200);
