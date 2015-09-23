
function showNumberWithAnimation(randomX,randomY,randomNumber){
	var numberCell = $("#number-cell-"+randomX+"-"+randomY);
	numberCell.css("background-color",getNumberCellBgColor(board[randomX][randomY]));
	numberCell.css("color",getNumberCellFontColor(board[randomX][randomY]));
	numberCell.css("font-size",getNumberCellFontSize(randomNumber));
	numberCell.text(randomNumber);
	numberCell.animate({
		width:cellSideLength,
		height:cellSideLength,
		top:getPosTop(randomX,randomY),
		left:getPosLeft(randomX,randomY)
	},100);
	
}

function showMoveAnimation(fromX,fromY,toX,toY){
	var numberCell = $("#number-cell-"+fromX+"-"+fromY);
	numberCell.animate({
		top:getPosTop(toX,toY),
		left:getPosLeft(toX,toY)
	},200);
}

function changeScore(score){
	$("#score").text(score);
}

function resetSocre(){
	$("#score").text(0);
}
