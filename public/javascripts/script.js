$(document).on('click', '.btn-list-funds', function(e) {
  e.preventDefault();

  $.get('/dashboard/list-funds', {}, function(data, textStatus, jqXHR) {
    $('.results').html(data);
  });

});

$(document).on('click', '.btn-list-peers', function(e) {
  e.preventDefault();

  $.get('/dashboard/list-peers', {}, function(data, textStatus, jqXHR) {
    $('.results').html(data);
  });

});

$(function() {

});
