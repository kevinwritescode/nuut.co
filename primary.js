document.observe('dom:loaded', function() {
    var notes = $$('ol.notes li.note');
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].hasClassName('with_commentary')) {
            var action = notes[i].select('span.action');
            action[0].update(action[0].innerHTML.substr(0, action[0].innerHTML.length - 11));
        }

        if (i % 2 == 0) {
            notes[i].addClassName('noteAlt');
        }
    }
});

function paginateMe(scope, currentPage, totalPages, append) {
    currentPage = parseInt(currentPage);
    totalPages = parseInt(totalPages);
    
    if(currentPage > 2) {
        for(var i=1; (i<=3) && (i < currentPage - 2); i++) {
            scope.insert('<a class="paginate-links" href="' + append + '/page/' + i + '"/>' + i + '</a> ');
        }
    }

    var start = (currentPage - 2) > 1 ? (currentPage - 2) : 1;

    if(start > 1) {
        scope.insert('... ');
    }

    for(var i = start; (i <= totalPages) && (i <= currentPage + 2); i++) {
        if(i == currentPage) {
            scope.insert('<span class="current-page">' + i + '</span> ');
        } else {
            scope.insert('<a class="paginate-links" href="' + append + '/page/' + i + '"/>' + i + '</a> ');
        }
    }

    if(currentPage < (totalPages-2)) {
        scope.insert('... ');
        start = (totalPages-2) > (currentPage+3) ? (totalPages-2) : (currentPage+3);
        for(var i=start; i <= totalPages; i++) {
            scope.insert('<a class="paginate-links" href="' + append + '/page/' + i + '"/>' + i + '</a> ');
        }
    }
}