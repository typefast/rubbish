$('#done').hide();
$('#paper').draggable();

$('#can').droppable({
	drop: function() {
		$('#paper').hide();
		$('#instructionMessage').hide();
		$('#done').show();
	} 
});

$('#dialog').dialog({
	autoOpen: false,
	moadal: true,
	show: {
		effect: "blind",
		duration: 500
	}
});

$('#can').click( function() {
	$('#dialog').dialog("open");
	$('#reloader').click(function() {
		location.reload();
	});
});

