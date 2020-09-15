var checkbox = document.getElementById('check');
var whiteToDark = document.querySelectorAll('.white');
var dash = document.querySelectorAll('.dash');
var todayDash = document.querySelectorAll('.today-dash');

checkbox.addEventListener('change', e => {
    if (e.target.checked) {
        whiteToDark.forEach(item => {
            item.classList.add('dark');
            item.classList.remove('white');
        });
        dash.forEach(item => {
            item.classList.add('dark');
        })
        todayDash.forEach(item => {
            item.classList.add('dark');
        })
        checkbox.classList.add('dark');
    } else {
        whiteToDark.forEach(item => {
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