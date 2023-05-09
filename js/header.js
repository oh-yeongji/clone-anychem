// 웹브라우저에 html,css,js, image를
// 모두 불러들여서 렌더링 준비가 끝나면
// 그때 function의 블럭 안쪽 {}를 실행!
window.onload = function () {
  // header nav에 마우스 오버하면 header높이 260px변화주기
  // nav에 마우스 아웃하면 header 높이 100px변경하기
  // header를 js로 저장해보자(변수 정의해보자)
  let header = document.querySelector(".header");
  // nav를 js 로 저장해보자 (변수 정의해보자)
  let nav = document.querySelector(".nav");
  // console.log(header);
  // console.log(nav);

  // nav에 마우스올린다.(마우스오버처리)
  // html요소에 마우스 오버 처리하는법
  nav.addEventListener("mouseenter", function () {
    // header.style.height = "260px";
    // 우리는260픽셀로 변경되는 class를 만들어두었다.
    header.classList.add("header-active");
  });
  // haeder 의 높이를 260픽셀로 고치고 싶다.

  // nav에 마우스 아웃 처리
  // html요소에 마우스 아웃처리하는법
  nav.addEventListener("mouseleave", function () {
    // header의 높이를 100px로 고치고싶다.
    // header.style.height = "100px";
    // 클래스를 제거한다.
    header.classList.remove("header-active");
  });
};
