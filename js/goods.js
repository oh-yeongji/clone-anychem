window.addEventListener("load", function () {
  // fetch("data/gooddata.json")
  //   .then((res) => res.json())
  //   .then((result) => console.log(result))
  //   .catch((err) => console.log(err));
  let swGoods;
  const SLIDECOUNT = 4;

  const getData = async function () {
    try {
      let res = await fetch("data/gooddata.json");
      let result = await res.json();
      makeSlide(result);
      makeSlideShow();
      makeMenu(result);
    } catch (err) {
      console.log(err);
    }
  };

  function makeSlide(_data) {
    let html = ``;
    let copyArr = [..._data.goods];

    if (copyArr.length <= SLIDECOUNT) {
      copyArr = [..._data.goods, ..._data.goods];
    }

    copyArr.forEach((item, index, arr) => {
      let tag = `  <div class="swiper-slide">
      <a href="${item.link}" class="good-link">
        <div class="good-item">
          <div class="good-item-img">
            <img src="images/${item.image}" alt="${item.alt}" />
          </div>
          <div class="good-item-txt">
            <p>${item.title}</p>
            <span>${item.desc}</span>
          </div>
        </div>
      </a>
    </div>`;
      html += tag;
    });
    document.querySelector(".sw-goods .swiper-wrapper").innerHTML = html;
  }

  function makeSlideShow() {
    swGoods = new Swiper(".sw-goods", {
      slidesPerView: 3,
      loop: true,
      navigation: {
        prevEl: ".sw-goods-prev",
        nextEl: ".sw-goods-next",
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    });
    swGoods.on("slideChange", function () {
      let count = this.realIndex % SLIDECOUNT;
      focusMenu(count);
    });
  }
  function focusMenu(_index) {
    let lis = document.querySelectorAll(".goods-list li a");
    lis.forEach((item, index, arr) => {
      if (index === _index) {
        //순서번호랑 슬라이드 번호가 같다면 add
        item.classList.add("focus");
      } else {
        item.classList.remove("focus");
      }
    });
  }
  function makeMenu(_data) {
    let html = ``;
    // let copyArr = [..._data.goods];
    // if (copyArr.length <= 4) {
    //   copyArr = [..._data.goods, ..._data.goods];
    // }
    _data.goods.forEach((item, index, arr) => {
      let tag = `
      <li>
      <a href="${item.link}">${item.title}</a>
    </li>
      `;
      html += tag;
    });
    document.querySelector(".goods-list").innerHTML = html;

    // li 의 태그를 클릭을 하는 경우 슬라이드이동
    let lis = document.querySelectorAll(".goods-list li a");
    lis.forEach((item, index, arr) => {
      item.onclick = function (event) {
        // a 태그의 href 막기
        event.preventDefault();

        swGoods.slideToLoop(index);
      };
    });
  }

  getData();
});
