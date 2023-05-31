/**
 * 작성자: 오영지
 * 작성일:2023-05-26
 * 기능업데이트: json데이터를 이용한 html구조 생성 적용
 *  */

window.addEventListener("load", function (event) {
  const swVisualWrap = document.querySelector(".sw-visual .swiper-wrapper");

  // const xhr = new XMLHttpRequest();
  // xhr.addEventListener("readystatechange", function (event) {
  //   let req = event.target;
  //   if (req.readyState === XMLHttpRequest.DONE) {
  //     let data = JSON.parse(req.response);
  //     makeVisualHtml(data);
  //   }
  // });
  // xhr.open("GET", "data/visualdata.json");
  // xhr.send();
  fetch("data/visualdata.json")
    .then((res) => res.json())
    .then((result) => makeVisualHtml(result))
    .catch((err) => console.log(err));

  function makeVisualHtml(_data) {
    let html = ``;
    _data.img.forEach((item) => {
      let temp = `
            <div class="swiper-slide" style="background-image: url(images/${item})"></div>
        `;
      html += temp;
    });

    swVisualWrap.innerHTML = html;

    const swVisual = new Swiper(".sw-visual", {
      loop: true,
      effect: "fade",
      speed: 800,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".sw-visual-pg",
        clickable: true,
      },
    });
    //위의 구문을 통해서 slide 완료되면
    // .sw-visual-pg .swiper-pagination-bullet 이 생성됨
    // innerHTML을 이용해서 내용을 넣어보자.
    const swVisualBullets = document.querySelectorAll(
      ".sw-visual-pg .swiper-pagination-bullet"
    );
    // swVisualBullets = [span , span]
    swVisualBullets.forEach((item, index, arr) => {
      //1번째 방법
      if (index < 9) {
        item.innerHTML = `<em>0${index + 1}</em>`;
      } else {
        
        item.innerHTML = `<em>${index+1}</em>`;
      }
      //상렬님 및 GPT코드
      item.innerHTML = `<em>${index < 9 ? "0" : ""}${index + 1}</em>`;

      // console.log(index);
      // console.log(arr);
    }); //forEach앞에 배열이 들어와야함.
  }
});
