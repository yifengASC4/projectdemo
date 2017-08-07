// // Freelancer Theme JavaScript

// (function($) {
//     "use strict"; // Start of use strict

//     // jQuery for page scrolling feature - requires jQuery Easing plugin
//     $('.page-scroll a').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: ($($anchor.attr('href')).offset().top - 50)
//         }, 1250, 'easeInOutExpo');
//         event.preventDefault();
//     });

//     // Highlight the top nav as scrolling occurs
//     $('body').scrollspy({
//         target: '.navbar-fixed-top',
//         offset: 51
//     });

//     // Closes the Responsive Menu on Menu Item Click
//     $('.navbar-collapse ul li a').click(function(){ 
//             $('.navbar-toggle:visible').click();
//     });

//     // Offset for Main Navigation
//     $('#mainNav').affix({
//         offset: {
//             top: 100
//         }
//     })

//     // Floating label headings for the contact form
//     $(function() {
//         $("body").on("input propertychange", ".floating-label-form-group", function(e) {
//             $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
//         }).on("focus", ".floating-label-form-group", function() {
//             $(this).addClass("floating-label-form-group-with-focus");
//         }).on("blur", ".floating-label-form-group", function() {
//             $(this).removeClass("floating-label-form-group-with-focus");
//         });
//     });

// })(jQuery); // End of use strict
var myUrl = "https://randomuser.me/api/";

$.ajax({
    url: myUrl,
}).done(function(data){
    console.log(data)
    var results = data.results[0];
    var userFirstName = results.name.first;
    var userLastName = results.name.last;
    var userPhoto = results.picture.thumbnail;
    var userState = results.location.state;
    $('.name1').append("<h1> "+ userFirstName +" "+ userLastName +" </h1>");
    // var results = data.results;
    // var userFirstName = /
})
