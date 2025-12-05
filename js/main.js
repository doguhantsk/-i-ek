
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('çiçeğe çiçek hediye edilmez ama bunlar senin güzelim💓').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 300ms gecikme
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};