window.onload = function () {
   let button = document.querySelector('.show-modal');
    let modal = document.querySelector('#modal-block');
   button.onclick = function () {
       modal.classList.add('active');
       document.body.classList.add('no-scroll');
   };
   let close = document.querySelector('#close-modal');
   close.onclick = function () {
       modal.classList.remove('active');
       document.body.classList.remove('no-scroll');
   }

   let formElements = document.forms.namedItem('registration').elements;
   let calendar = formElements[formElements.length - 1];
   let data = new Date();
   let year = data.getFullYear() - 18;
   let month = data.getMonth() + 1;
   let day = data.getDate();
    if (month < 10){
        month = '0' + month;
    }
    if (day < 10){
        day = '0' + day;
    }
    let maxDay = `${year}-${month}-${day}`;
   calendar.setAttribute('max', maxDay);
};