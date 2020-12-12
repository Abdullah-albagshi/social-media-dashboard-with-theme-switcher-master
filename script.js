var checkbox = document.getElementById('check');
var lightToDark = document.querySelectorAll('.light');
var dash = document.querySelectorAll('.dash');
var todayDash = document.querySelectorAll('.today-dash');

checkbox.addEventListener('change', e => {
    if (e.target.checked) {
        lightToDark.forEach(item => {
            item.classList.add('dark');
            item.classList.remove('light');
        });
        dash.forEach(item => {
            item.classList.add('dark');
        })
        todayDash.forEach(item => {
            item.classList.add('dark');
        })
        checkbox.classList.add('dark');
    } else {
        lightToDark.forEach(item => {
            item.classList.remove('dark');
        })
        dash.forEach(item => {
            item.classList.remove('dark');
        })
        todayDash.forEach(item => {
            item.classList.remove('dark');
        })
        checkbox.classList.remove('dark');
    }
})