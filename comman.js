  let hambarger = document.querySelector('.hambarger');
  let navlist = document.querySelector('.all-li');

    hambarger.addEventListener("click", () => {
      navlist.classList.toggle('active');
    });