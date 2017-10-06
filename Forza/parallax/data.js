// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

// some values to be automatically filled on the Site
var dataset = {
  "title": "BVB Fanclub Forza Borussia 1996",
}

for (var key in dataset) {
  if (dataset.hasOwnProperty(key)) {
    document.getElementById(key).innerHTML = dataset[key];
  }
}

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

// Gallery Object
var gallery = {
  Sommerfest1998 : [
    "../assets/gallery/Sommerfest_1998/sf98001.jpg",
    "../assets/gallery/Sommerfest_1998/sf98002.jpg",
    "../assets/gallery/Sommerfest_1998/sf98003.jpg",
    "../assets/gallery/Sommerfest_1998/sf98004.jpg",
    "../assets/gallery/Sommerfest_1998/sf98005.jpg",
    "../assets/gallery/Sommerfest_1998/sf98006.jpg",
    "../assets/gallery/Sommerfest_1998/sf98007.jpg",
    "../assets/gallery/Sommerfest_1998/sf98008.jpg",
    "../assets/gallery/Sommerfest_1998/sf98009.jpg",
    "../assets/gallery/Sommerfest_1998/sf98010.jpg",
  ],
  Sommerfest1999 :[
    "../assets/gallery/Sommerfest_1999/sf99001.jpg",
    "../assets/gallery/Sommerfest_1999/sf99002.jpg",
    "../assets/gallery/Sommerfest_1999/sf99003.jpg",
    "../assets/gallery/Sommerfest_1999/sf99004.jpg",
    "../assets/gallery/Sommerfest_1999/sf99005.jpg",
    "../assets/gallery/Sommerfest_1999/sf99006.jpg",
    "../assets/gallery/Sommerfest_1999/sf99007.jpg",
  ],
  Sommerfest2000 :[
    "../assets/gallery/Sommerfest_2000/sf00001.jpg",
    "../assets/gallery/Sommerfest_2000/sf00002.jpg",
    "../assets/gallery/Sommerfest_2000/sf00003.jpg",
    "../assets/gallery/Sommerfest_2000/sf00004.jpg",
    "../assets/gallery/Sommerfest_2000/sf00005.jpg",
    "../assets/gallery/Sommerfest_2000/sf00006.jpg",
    "../assets/gallery/Sommerfest_2000/sf00007.jpg",
    "../assets/gallery/Sommerfest_2000/sf00008.jpg",
    "../assets/gallery/Sommerfest_2000/sf00009.jpg",
    "../assets/gallery/Sommerfest_2000/sf00010.jpg",
  ],
};

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

// Setup on page loading
(function(window, document, undefined){

  window.onload = init;

  function init(){

    // ---------------------------------------------------------------------
    // Iterates through all galleries and builds containers
    // ---------------------------------------------------------------------
    for(var key in gallery){

      if (!gallery.hasOwnProperty(key)) continue;

      // referenced by key of array in Object
      var obj = gallery[key];
      // Sets up a link
      $('#scrollmenu').append('<p class="w3-quarter w3-section" link=#' + key + '>' + key + '</p>');
      // add image-container to gallery
      $('#galleryContainer').append('<div class="image-container" id=' + key + '></div>');
      // add images to container
      for (var prop in obj) {
        if(!obj.hasOwnProperty(prop)) continue;
        $('#' + key).append('<div class="image-holder"><img src=' + obj[prop] + ' style="width:100%" onclick="onClick(this)" class="w3-hover-opacity gallery-image" ></div>');
      }
      // hide the newly build container
      $('#' + key).hide();
    }

    // ---------------------------------------------------------------------
    // The onClick Event in the scrollbar
    // ---------------------------------------------------------------------
    $('.scrollmenu p').click(function(){
      // indicator for open gallery
      $(this).toggleClass('active');
      // opening perviosly hidden container
      var addressValue = $(this).attr("link");
      $("#galleryContainer").find(addressValue).slideToggle(200);
    });
  }

})(window, document, undefined);
