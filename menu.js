let veg_tble = document.querySelector('.veg');
let veg_btn = document.querySelector('.veg-heading');
let non_veg_tble = document.querySelector('.non-veg');
let non_veg_btn = document.querySelector('.non-veg-heading')

veg_btn.addEventListener("click", () => {
  veg_tble.classList.toggle("open-table");
  
});

non_veg_btn.addEventListener("click", () => {
  non_veg_tble.classList.toggle("open-table2");
})