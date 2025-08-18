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
      icon: 'warning',
      text: 'Enter your Name please!'
    });
    return;
  }
  else if (num.value.trim() === '') {
    Swal.fire({
      icon: 'warning',
      text: 'Enter your ph.Number please!'
    });
    return;
  }
  else if (per_count.value.trim() === '') {
    Swal.fire({
      icon: 'warning',
      text: 'add person count please!'
    });
    return;
  }
  else if (date_odr.value.trim() === '') {
    Swal.fire({
      icon: 'warning',
      text: 'add date please!'
    });
    return;
  }
  else if (time_odr.value.trim() === '') {
    Swal.fire({
      icon: 'warning',
      text: 'add time please!'
    });
    return;
  }
  else {
    Swal.fire({
      icon: "success", // remove the width
      title: "Order Confirmed 😊",
    });
    show_odr_box.classList.remove("view");
  }

});

let online_odr = document.querySelector('.order');
let show_odr_box = document.querySelector('.order-box');
let close_box = document.querySelector('.close-btn');
let background_blur = document.querySelector('.overlay');

 
online_odr.addEventListener("click", () => {
  show_odr_box.classList.add("view");
  background_blur.classList.add("overlay");
   background_blur.classList.add("on");
});

  close_box.addEventListener("click", () => {
    show_odr_box.classList.remove("view");
    background_blur.classList.remove("overlay");
    
  });
background_blur.addEventListener("click", (e) => {
  if (e.target === background_blur) {
    show_odr_box.classList.remove("view");
    background_blur.classList.remove("overlay");
  };
});
show_odr_box.addEventListener("click", (e) => {
  e.stopPropagation(); //prevents from box click remove
});


let order_btn = document.querySelector('.order-box-btn');
order_btn.addEventListener("click", () => {
   
  let information = {
    name1: document.querySelector('#name').value,
    no1: document.querySelector('#ph-num').value,
    count1: document.querySelector('#box-person').value,
    date1: document.querySelector('.box-date-form').value,
    time1: document.querySelector('.box-time-form').value,
  };

  let orders = JSON.parse(localStorage.getItem("information")) || [];
  orders.push(information);

  localStorage.setItem("information", JSON.stringify(orders));

  console.log("All orders:", orders);

 
  
});



