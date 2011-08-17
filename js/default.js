$(function() {
	var commentary = $('.notes .with_commentary .action');
	commentary.html(commentary.html().splice(0, -11));

	var currentPage = $('#kt-current-page').val();
	var totalPages  = $('#kt-total-pages').val();
	var appendUrl   = $('#kt-append-url').val();
	
	$('span.paginationDetails').each(function() {	
		var self  = $(this);
		var start = Math.min(currentPage - 2, 1);
		var end   = Math.max(totalPages - 2, currentPage + 3);
		var i;
		
		totalPages.each(function() {
			self.append($('<a/>').attr('href', append + '/page/' + i).text(i)).append(' ');
		});
	});
});