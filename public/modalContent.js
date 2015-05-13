dayClick: function(date, jsEvent, view) {
	$('#myModal').modal('show');
  console.log('Clicked on: ' + date.format());
  console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
  console.log('Current view: ' + view.name);
  // change the day's background color just for fun
  // $(this).css('background-color', 'red');
}


// on click -- show the date
// show available rehearsal slots
// and submit function that adds the event to the calendar
function prepEventFormModal(date){


}

$('#myModal').on('show.bs.modal', function (event) {
  // var button = $(event.relatedTarget) // Button that triggered the modal
  // var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + 'recipient')
  // modal.find('.modal-body input').val(recipient)
})