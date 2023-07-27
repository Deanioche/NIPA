import { home, dm, mention, you, pages } from './pages/pages.js';

document.querySelectorAll('.toolbar-button').forEach(function(button) {
  button.addEventListener('click', async function(e) {
    /**
     * e.target : 마우스가 클릭한 요소 (div > span)
     * e.currentTarget : 이벤트가 발생한 요소 (div)
     */
    var pageName = e.currentTarget.getAttribute('data-page');
    var pageContent = await pages[pageName]();
    document.querySelector('.main').innerHTML = `${pageContent}`;
  });
});

document.querySelectorAll('.toolbar-button')[0].click();
