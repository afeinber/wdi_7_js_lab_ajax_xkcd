// Your code here!
$(document).ready(function(){
  var baseUrl = 'http://xkcd-unofficial-api.herokuapp.com/xkcd';
  for(var i=2006; i<2012; i++) {
    var but = $('<button>').text(i).attr('href', baseUrl + '?year=' + i).addClass('year-but');
    $('.buttons').append(but);
  }

  $('.buttons').on('click', '.year-but', function(event){
    $.ajax({
      url: $(this).attr('href'),
    })
    .done(function(data) {
      data.forEach(function(comic) {
        var image = $('<img>').attr('src', comic.img);
        $('.images').append(image);
      });
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });

  });
});

