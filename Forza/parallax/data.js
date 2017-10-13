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
  Sommerfest_1998: 10,
  Sommerfest_1999: 7,
  Sommerfest_2000: 10,
  Sommerfest_2011: 27,

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
      var imageCount = gallery[key];

      // Sets up a link
      var title = key.replace('_', ' ');
      $('#scrollmenu').append('<a link=#' + key + '>' + title + '</a>');
      // add image-container to gallery
      $('#galleryContainer').append('<div class="image-container" id=' + key + '><h2>' + title + '</h2></div>');
      // add images to container
      for (var i = 1; i<= imageCount; i++) {
        $('#' + key).append('<div class="image-holder"><img src="../assets/gallery/' + key + '/' + i + '.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity gallery-image" ></div>');
      }
      // hide the newly build container
      $('#' + key).hide();
    }

    // ---------------------------------------------------------------------
    // The onClick Event in the scrollbar
    // ---------------------------------------------------------------------
    $('.scrollmenu a').click(function(){
      // indicator for open gallery
      $(this).toggleClass('active');
      // opening perviosly hidden container
      var addressValue = $(this).attr("link");
      $("#galleryContainer").find(addressValue).slideToggle(200);
    });
  }

})(window, document, undefined);
