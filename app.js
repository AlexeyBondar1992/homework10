window.addEventListener('load', function () {

    function SpanClickListener(event) {
        var target=event.target,
            select=document.querySelector('.active');
        if (target.tagName === 'SPAN') {
            target.classList.toggle('active');
            if (select!==target) {
                select.classList.remove('active');
            }
        }
    }

    document.body.addEventListener('click',SpanClickListener);

});



