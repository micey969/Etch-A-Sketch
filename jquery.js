//make the grids
function makeGrid(num){
	if (num < 1) {num = 1;}
	if (num > 128) {num = 128;}
	for(var i=0;i<num*num;i++){
		$('#content').append('<div class="grid"></div>');
	}
	$('.grid').height(512/num);
	$('.grid').width(960/num);
};

//refreshes the grid
function refresh(){
	var size = prompt ('Enter desired size of grid [1-128]');
	makeGrid(size);
};

//random colouring
function randomColor(){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
};


$(document).ready(function(){
	makeGrid(16);

	//default sketching
	$('.grid').mouseover(function(){
		$(this).css('background-color','#460CE8');

	});

	//to get the random colors effect
	$('.rc').click(function(){
		$('.grid').mouseover(function(){
			$(this).css('background-color',randomColor());
		});	
	});


	//to change grid size
	$('.cs').click(function(){
		$('.grid').remove();
		refresh();
		$('.grid').mouseover(function(){
			$(this).css('background-color','#460CE8');
		});
	});

	//to clear grid
	$('.clr').click(function(){
		$('.grid').remove();
		refresh();
		$('.grid').mouseover(function(){
			$(this).css('background-color','#460CE8');
		});
	});

	//to get default grid size
	$('.def').click(function(){
		$('.grid').remove();
		makeGrid(16);
		$('.grid').mouseover(function(){
			$(this).css('background-color','#460CE8');
		});
	});
	
});