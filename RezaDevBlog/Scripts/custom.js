//Stack pills work around
$('#navbar').on('show.bs.collapse', function () {
    $('.nav-pills').removeClass('nav-stacked');
    $('.nav-pills').addClass('nav-stacked');
    
});
//Remove stack pills work around
$('#navbar').on('hide.bs.collapse', function () {
    $('.nav-pills').removeClass('nav-stacked');
});