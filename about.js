let staff_img = [
  'https://st2.depositphotos.com/4196725/6214/i/950/depositphotos_62149719-stock-photo-senior-cool-man-cheff-all.jpg',
  'https://t3.ftcdn.net/jpg/04/94/90/68/360_F_494906852_BMrMlMnXnlhwyCvH0mPWFfuINE36enEe.jpg',
  'https://t4.ftcdn.net/jpg/14/47/69/41/360_F_1447694108_SoRIiTPNc0vSFms76kBBvbiGa3ql4vkn.jpg',
  'https://img.freepik.com/free-photo/young-male-cook-wearing-chef-uniform-crossing-hands-holding-frying-pan-spoon-isolated-white-wall-with-copy-space_141793-36737.jpg?semt=ais_items_boosted&w=740',
  'https://img.freepik.com/free-photo/medium-shot-professional-chef-working_23-2151232222.jpg',
  'https://images.stockcake.com/public/e/e/b/eeb5dabf-68b9-4c49-9bdb-327df9f458a0_large/confident-professional-chef-stockcake.jpg'

];

let bio = [
  {
    name: 'Rman tryer',
    age: '78',
    experience: 'A chef is a professional cook and trained culinary professional, skilled in all aspects of food preparation. They often specialize in a particular cuisine and work in various settings like restaurants, hotels, or catering services.',
    achievement: 'Achieving sales targets ✨',

  },
  {
    name: 'Riya sharma',
    age: '45',
    experience: 'Chef possess a wide range of cooking skills and techniques, including menu planning, food preparation, and plating design. ',
    achievement: 'Developing innovative solutions 🎗️',
  },
  {
    name: 'Ganzze aktr',
    age: '34',
    experience: 'Chef is responsible for creating and developing menus, often experimenting with new dishes and flavors. He manage kitchen staff, oversee operations, and ensure a smooth workflow in the kitchen. ',
    achievement: 'Improving customer satisfaction 🛃',
  },
  {
    name: 'Ron donson',
    age: '32',
    experience: 'A chef is a professional cook and trained culinary professional, skilled in all aspects of food preparation. ',
    achievement: 'Customer Service Champion💫',
  },
  {
    name: 'Brannie',
    age: '40',
    experience: 'The fast-paced environment of a kitchen requires chefs to be adaptable, work under pressure, and maintain stamina. She need strong organizational skills to manage inventory.',
    achievement: 'Innovation Award🏆',
  },
  {
    name: 'Jazz ramaon',
    age: '38',
    experience: 'Chef use science to develop his food preparation techniques and invent new methods of cooking. Chefs understand how cutting, heating and cooling food change its composition. Cooking and food preparation are applied sciences , and chefs understand them fully to succeed at their job.',
    achievement: 'Sales Superstar🌟',
  },
  
]

let img_num = 0;

function Updating(index) {
  let staff = document.querySelector('.all-staff-img');
  let fName = document.querySelector('.for-name');
  let fAge = document.querySelector('.for-age');
  let fExperience = document.querySelector('.for-experience');
  let fAchive = document.querySelector('.for-achieve');

  staff.classList.add('fade-out');
  fName.classList.add('fade-out');
  fAge.classList.add('fade-out');
  fExperience.classList.add('fade-out');
  fAchive.classList.add('fade-out');
  
  setTimeout(() => {
    staff.style.backgroundImage = `url('${staff_img[index]}')`;
    fName.textContent = `Name: ${bio[index].name}`;
    fAge.textContent = `Age: ${bio[index].age}`;
    fExperience.textContent = `Experience: ${bio[index].experience}`;
    fAchive.textContent = `Achievements: ${bio[index].achievement}`;

    staff.classList.remove('fade-out');
    fName.classList.remove('fade-out');
    fAge.classList.remove('fade-out');
    fExperience.classList.remove('fade-out');
    fAchive.classList.remove('fade-out');
  }, 200);
  
}
function aboutSTAFF() {
  let forward = document.querySelector('.right-arrow');
  let backward = document.querySelector('.left-arrow');
  
  Updating(img_num);
  forward.addEventListener("click", () => {
    img_num = (img_num + 1) % staff_img.length;
    Updating(img_num);
  });

  backward.addEventListener("click", () => {
    img_num = (img_num - 1 + staff_img.length) % staff_img.length;
    Updating(img_num);
  })
}
aboutSTAFF();





// function about_staff() {
//   let staff = document.querySelector('.all-staff-img');
//   let forward = document.querySelector('.right-arrow');
//   let backward = document.querySelector('.left-arrow');
//   // let bio = document.querySelector('.about-staff');

//   let fName = document.querySelector('.for-name');
//   let fAge = document.querySelector('.for-age');
//   let fExperience = document.querySelector('.for-experience');
//   let fAchive = document.querySelector('.for-achieve');

 
//   staff.style.backgroundImage = `url('${staff_img[img_num]}')`;
    
//   forward.addEventListener("click", () => {
//     img_num = (img_num + 1) % staff_img.length;
//     staff.style.backgroundImage = `url('${staff_img[img_num]}')`;
//     i = (i + 1) % bio.length;
//     fName.textContent = `${bio[i].name}`;
//      i = (i + 1) % bio.length;
//     fAGE.textContent = `${bio[i].age}`;
//      i = (i + 1) % bio.length;
//     fExperience.textContent = `${bio[i].experience}`;
//      i = (i + 1) % bio.length;
//     fAchive.textContent = `${bio[i].achievement}`;

//   });

//   backward.addEventListener("click", () => {
//     img_num = (img_num - 1 + staff_img.length) % staff_img.length ;
//     staff.style.backgroundImage = `url('${staff_img[img_num]}')`;
//   });
  
// }
// about_staff();

