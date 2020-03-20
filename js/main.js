window.onload = function () {
    let button = document.querySelector('.show-modal');
    let modal = document.querySelector('#modal-block');
    let backup = document.querySelector('.modal-backup');

    button.onclick = function () {
        modal.classList.add('active');
        backup.classList.add('modal-backup--active');
        document.body.classList.add('no-scroll');
    };
    let close = document.querySelector('#close-modal');
    close.onclick = function () {
        backup.classList.remove('modal-backup--active');
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    };

    backup.onclick = function () {
        backup.classList.remove('modal-backup--active');
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    };

    let calendar = document.querySelector('input[type="date"]');
    let data = new Date();
    let year = data.getFullYear() - 18;
    let month = data.getMonth() + 1;
    let day = data.getDate();
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    let maxDay = `${year}-${month}-${day}`;
    calendar.setAttribute('max', maxDay);
};
