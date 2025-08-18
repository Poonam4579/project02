// let veg_tble = document.querySelector('.veg');
// let veg_btn = document.querySelector('.veg-heading');
// let non_veg_tble = document.querySelector('.non-veg');
// let non_veg_btn = document.querySelector('.non-veg-heading')
// let for_all = document.querySelector('.all');

// veg_btn.addEventListener("click", () => {
//   veg_tble.classList.toggle("open-table");
// });
// non_veg_btn.addEventListener("click", () => {
//   non_veg_tble.classList.toggle("open-table2");
// })

let veg_tble = document.querySelector('.veg');
let non_veg_tble = document.querySelector('.non-veg');
let for_all = document.querySelector('.all');
let all_btns = document.querySelectorAll('.veg-heading, .non-veg-heading, .all');

all_btns.forEach(btn => {
  btn.addEventListener("click", () => {
    let three_btn_filter = btn.dataset.filter;

    if (three_btn_filter === "Veg") {
      // veg_tble.style.display = "table";
      veg_tble.classList.toggle("showOn");
      // non_veg_tble.style.display = "none";
      non_veg_tble.classList.remove("showOn");
    }
    else if (three_btn_filter === "nonVeg") {
      // veg_tble.style.display = "none";
      veg_tble.classList.remove("showOn")
      // non_veg_tble.style.display = "table";
      non_veg_tble.classList.toggle("showOn");
    }
    else if(three_btn_filter === "all"){
      // veg_tble.style.display = "table";
      // non_veg_tble.style.display = "table";
       veg_tble.classList.toggle("showOn");
      
      non_veg_tble.classList.toggle("showOn");
    }
  });
});

