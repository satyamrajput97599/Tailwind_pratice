document.addEventListener('DOMContentLoaded', () => {
    const navDialog = document.getElementById('nav-dialog');
  
    function handleMenu() {
      console.log('first');
      navDialog.classList.toggle('hidden');
    }
  
    const initialTranslateLTR = -48 * 4;
    const initialTranslateRTL = 36 * 4;
  
    function setupIntersectionObserve(element, isLTR, speed) {
      const intersectionCallBack = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
          document.addEventListener('scroll', scrollHandler);
        } else {
          document.removeEventListener('scroll', scrollHandler);
        }
      };
  
      const intersectionObserver = new IntersectionObserver(intersectionCallBack);
      intersectionObserver.observe(element);
  
      function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        let totalTranslate = isLTR ? translateX + initialTranslateLTR : -(translateX + initialTranslateRTL);
        element.style.transform = `translateX(${totalTranslate}px)`;
      }
    }
  
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    const line4 = document.getElementById('line4');
  
    setupIntersectionObserve(line1, true, 0.15);
    setupIntersectionObserve(line2, false, 0.15);
    setupIntersectionObserve(line3, true, 0.15);
    setupIntersectionObserve(line4, true, 0.8);
  
    document.querySelector('button[onclick="handleMenu()"]').addEventListener('click', handleMenu);
  });
  