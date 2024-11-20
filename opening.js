window.addEventListener('scroll', function () {
    // 스크롤 이벤트 리스너 등록
    const sections = document.querySelectorAll('.section'); // 모든 섹션을 가져옴
  
    sections.forEach(function (section) {
      // 각 섹션에 대해 반복
      let bounds = section.getBoundingClientRect(); // 섹션의 위치와 크기 정보를 가져옴
      const background = section.querySelector('.background'); // 배경 요소
      const title = section.querySelector('.title'); // 제목 요소
      const circle = section.querySelector('.circle'); // 원 요소
      const square = section.querySelector('.square'); // 사각형 요소
  
      if (bounds.top < window.innerHeight && bounds.bottom >= 0) {
        // 섹션이 뷰포트 내에 있을 때
        var scrolled = window.pageYOffset - section.offsetTop; // 섹션의 시작점에서 스크롤된 거리를 계산
        background.style.transform = `translateY(${scrolled * 0.8}px)`; // 제목을 스크롤 속도의 80%(빠르게)로 이동
        title.style.transform = `translateY(${scrolled * 0.3}px)`; // 배경을 스크롤 속도의 30%(느리게)로 이동
        circle.style.transform = `translate(${scrolled * 0.5}px, ${scrolled * 0.5}px)`; // circle 왼쪽에서 오른쪽으로 이동
        square.style.transform = `translate(${scrolled * -0.5}px)`; // square 오른쪽에서 왼쪽으로 이동
      }
    });
  });