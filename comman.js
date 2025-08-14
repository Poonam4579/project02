  let hambarger = document.querySelector('.hambarger');
  let navlist = document.querySelector('.all-li');

    hambarger.addEventListener("click", () => {
      navlist.classList.toggle('active');
    });

    let confirm_order = document.querySelector('.order-box-btn');

confirm_order.addEventListener("click", (e) => {

  e.preventDefault();

  let name = document.querySelector('#name');
  let num = document.querySelector('#ph-num');
  let per_count = document.querySelector('#box-person');
  let date_odr = document.querySelector('.box-date-form');
  let time_odr = document.querySelector('.box-time-form');

  if (name.value.trim() === '') {
    Swal.fire({
      width: '30%',
      icon: 'warning',
      text: 'Enter your Name please!'
    });
    return;
  }
  else if (num.value.trim() === '') {
    Swal.fire({
      width: '30%',
      icon: 'warning',
      text: 'Enter your ph.Number please!'
    });
    return;
  }
  else if (per_count.value.trim() === '') {
    Swal.fire({
      width: '30%',
      icon: 'warning',
      text: 'add person count please!'
    });
    return;
  }
  else if (date_odr.value.trim() === '') {
    Swal.fire({
      width: '30%',
      icon: 'warning',
      text: 'add date please!'
    });
    return;
  }
  else if (time_odr.value.trim() === '') {
    Swal.fire({
      width: '30%',
      icon: 'warning',
      text: 'add time please!'
    });
    return;
  }
  else {
    Swal.fire({
      width: '30%',
      icon: "success",
      title: "Order Confirmed 😊",
    });
    show_odr_box.classList.remove("view");
  }

})

let online_odr = document.querySelector('.order');
let show_odr_box = document.querySelector('.order-box');
let close_box = document.querySelector('.close-btn');
 
online_odr.addEventListener("click", () => {
  show_odr_box.classList.add("view");
});

  close_box.addEventListener("click", () => {
    show_odr_box.classList.remove("view");
    
  });
  



