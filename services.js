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
