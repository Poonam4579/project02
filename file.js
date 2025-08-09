
let box1 = document.querySelector('.food-title');
    let box2 = document.querySelector('.sub-title');
    let box3 = document.querySelector('.ser-heading');

    setTimeout(() => {
      box1.classList.add("show");
    }, 1000);

    setTimeout(() => {
      box2.classList.add("show");
    }, 2000);

setTimeout(() => {
  box3.classList.add("show");
}, 5000);

let images = [
  'https://media.istockphoto.com/id/803934008/photo/female-chef-in-kitchen.jpg?s=612x612&w=0&k=20&c=jYq8CNkSAvzu8QwpKY71xQ2HuqKPWqDjBUcj72XtyEU=',
  'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1572715376701-98568319fd0b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D',
  'https://img.freepik.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208288.jpg'

]
 
let index = 0;
function changeBackground() {
  let forImg = document.querySelector('.images-of-chefs');
  forImg.style.opacity = 0;

  setTimeout(() => {
    forImg.style.backgroundImage = `url('${images[index]}')`;
    forImg.style.opacity = 1;

    index = (index + 1) % images.length;

    setTimeout(changeBackground, 2000);
  }, 1000);
};
changeBackground();

let timingOFmeal = document.querySelector('.timing-break');
let image1 = document.querySelector('.food-img-01');
let image2 = document.querySelector('.food-img-02');
let image3 = document.querySelector('.food-img-03');
let image4 = document.querySelector('.food-img-04');


timingOFmeal.addEventListener("click", function () {
  image1.style.backgroundImage = `url('https://www.eatingwell.com/thmb/LDIBwmudY5tgy12dBKoqXKPBfhQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6183602-b3e4206d75dd4925954984e0745bac58.jpg')`;
  image2.style.backgroundImage = `url('https://images.services.kitchenstories.io/gxInWDQniM21aQiVgvnXmDrMnvo=/3840x0/filters:quality(85)/images.kitchenstories.io/communityImages/f4604e05f6a9eaca99afddd69e849005_c02485d4-0841-4de6-b152-69deb38693f2.jpg')`;
  image3.style.backgroundImage = `url('https://www.eatingwell.com/thmb/6LNvymxtOtz4IDeUWj6mZhdGV3E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blistered-cherry-tomato-toast-fried-egg-beauty1x1-957-c2201d6dc4114fe8b0342ea96b98ff71.jpg')`;
  image4.style.backgroundImage = `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAnBIfWMRurAnRjtDb-yvhxaehAQv7uDZzQ&s')`;

  image1.classList.add("showO");
  image2.classList.add("showO");
  image3.classList.add("showO");
  image4.classList.add("showO");
 
})

let timingOFmeal02 = document.querySelector('.timing-lunch');
let image5 = document.querySelector('.food-img-01');
let image6 = document.querySelector('.food-img-02');
let image7 = document.querySelector('.food-img-03');
let image8 = document.querySelector('.food-img-04');

timingOFmeal02.addEventListener("click", function () {
  image5.style.backgroundImage = `url('https://media.istockphoto.com/id/1321195683/photo/woman-having-healthy-lunch.jpg?s=612x612&w=0&k=20&c=buB2Jla5pWRfAt_Nu92if0WWprQxe_jMufq91s7Ici8=')`;
  image6.style.backgroundImage = `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL-HhlXVSthA9mRrZoUvXAGnDJ-EVQgxg5eA&s')`;
  image7.style.backgroundImage = `url('https://media.istockphoto.com/id/1218956575/photo/healthy-school-lunch-box.jpg?s=612x612&w=0&k=20&c=um_cKYyJz5I_AkXYrOyIo8Bx7NGaAxy4vvbZDUhV2y4=')`;
  image8.style.backgroundImage = `url('https://www.realsimple.com/thmb/J-yTeuQATW5kaE6RyqLVOkH5vVo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cantaloupe-and-Cucumber-Salad-0723fea-healthy-salads-ec245e29b1554a19964996e10cae5cdd.jpg')`;

  image5.classList.add("showO");
  image6.classList.add("showO");
  image7.classList.add("showO");
  image8.classList.add("showO");
})

let timingOFmeal03 = document.querySelector('.timing-dinner');
let image9 = document.querySelector('.food-img-01');
let image10 = document.querySelector('.food-img-02');
let image11 = document.querySelector('.food-img-03');
let image12 = document.querySelector('.food-img-04');

timingOFmeal03.addEventListener("click", function () {
  image9.style.backgroundImage = `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdquqAkNBIyIG0hKP3tAazey-J2OyWWuj3sw&s')`;
  image10.style.backgroundImage = `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5FoNXxxl__MvsxxerFAKSD8Z53wtzx5JXim_hJNuSopu_QQ1O9BOa5F9NS87L-TLgm4&usqp=CAU')`;
  image11.style.backgroundImage = `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNckSsBg9LfOkfBSlzfPDXTjMeGBkZ5ws4dAcN3Gkb7vj5LsIpT9z-X9vquiohiSZrm8o&usqp=CAU')`;
  image12.style.backgroundImage = `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUA9JD48vpzuSSoup8Mn5utB0qRmKV4NaNg&s')`;

  image9.classList.add("showO");
  image10.classList.add("showO");
  image11.classList.add("showO");
  image12.classList.add("showO");
})

let timingOFmeal04 = document.querySelector('.timing-offer');
let image13 = document.querySelector('.food-img-01');
let image14 = document.querySelector('.food-img-02');
let image15 = document.querySelector('.food-img-03');
let image16 = document.querySelector('.food-img-04');

timingOFmeal04.addEventListener("click", function () {
  image13.style.backgroundImage = `url('https://img.freepik.com/premium-psd/food-menu-social-media-promotion-discount-20-percent_508381-1036.jpg?w=360')`;
  image14.style.backgroundImage = `url('https://img.freepik.com/premium-psd/food-social-media-post-design_935878-132.jpg')`;
  image15.style.backgroundImage = `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdFfSYgEd9YeMMphkd2oPUjiA01Pci4Bllg&s')`;
  image16.style.backgroundImage = `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpTrQ4r0mNSDqaaCCc6aH2sS-MelcCU7EWwvNaaCskZ3pbJr0O6gGWOEhiwOw6bDIXJew&usqp=CAU')`;

  image13.classList.add("showO");
  image14.classList.add("showO");
  image15.classList.add("showO");
  image16.classList.add("showO");
})

function conditions(event) {
  event.preventDefault();

  let form_person = document.querySelector('#person');
  let form_date = document.querySelector('.date-form');
  let form_time = document.querySelector('.time-form');

  if (form_person.value === '') {
    Swal.fire({
      icon: 'warning',
      title: 'Missing Info',
      text: 'Please add person count'
    });
  }
  else if (form_date.value === '') {
    Swal.fire({
      icon: 'warning',
      title: 'Missing info',
      text: 'Please add date'
    });
  }
  else if (form_time.value === '') {
    Swal.fire({
      icon: 'warning',
      title: 'Missing info',
      text: 'Please add time'
    });
  }
  else {
    Swal.fire({
      icon: 'Success',
      title: 'Booked',
      text: 'Your table got Booked 😊'
    });
  }
}

 



