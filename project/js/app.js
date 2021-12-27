$(".show-sidebar").click( () => { $(".sidebar").animate({ marginLeft: "0%" })} );
$(".hide-sidebar").click( () => { $(".sidebar").animate({marginLeft: "-100%"}) } );

let go = url => {
    setTimeout(() => {location.href = `${url}`}, 500)
};

let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});

let screenHeight = $(window).height();
let currentMenuHeight = $(".menu-nav .active").offset().top;

if(currentMenuHeight > screenHeight*0.8) {
  $(".sidebar").animate({
    scrollTop: currentMenuHeight-200,
  },1000)
}