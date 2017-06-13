/*$(function() {

	var _targetState;

	$('[data-toggle="popover"]').popover({
		
		container: 'body',
        animation: true,
        title: "My Cart",
        
		
	});

	$('body').on('show.bs.popover', function (e) {

		_targetState = e;

	});

	$('body').on('click', function (e) {

		if ($(e.target).data('toggle') !== 'popover'
			&& $(e.target).parents('.popover.in').length === 0) {

			$('[data-toggle="popover"]').popover('hide');
			if(undefined != _targetState){
				$(_targetState.target).data("bs.popover").inState.click = false;
			}
		}

	});

});*/