window.addEventListener("load", function (event) {
  const swVisualWrap = document.querySelector(".sw-visual .swiper-wrapper");

  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function (event) {
    let req = event.target;
    if (req.readyState === XMLHttpRequest.DONE) {
      let data = JSON.parse(req.response);
      makeVisualHtml(data);
    }
  });
  xhr.open("GET", "data/visualdata.json");
  xhr.send();

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
    });
  }
});
