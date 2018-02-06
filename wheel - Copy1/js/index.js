

var moodArray = [ 'Irritated','Energetic', 'Confident'
, 'Couragious','Stressed', 'Anxious', 'Overwhelmed','Happy', 'Delighted', 'Fresh'
,'Content', 'Secure', 'Peaceful','Sad', 'Depressed', 'Gloomy','Guilty'
, 'Envious', 'Jealous','Compassionate', 'Loving', 'Warm'
,'Frustrated', 'Angry'
]
var moodIndex = 0

function createWheel () {
for (var i=0; i<360; i+=15) {
			var colorWheelLine = $("<span>")
			colorWheelLine.addClass("colorWheelLine")
			colorWheelLine.css("transform","rotate(" + i + "deg)")

			var emptyLine = $("<span>")
			emptyLine.addClass("emptyLine")

			var button = $("<button>")
			button.addClass("btn-drop select")
			button.attr("id", "d" + i)
			button.css("transform", "rotate(" + (i*(-1)-45) + "deg)")

			var drop = $("<div>")
			drop.addClass("water-drop")
			drop.css("backgroundColor","hsl(" + i + ", 100%, 50%)")

			var moodName = $("<span>")
			moodName.addClass("moodName");
			moodName.css("transform", "rotate(" + i*(-1) + "deg)")
			moodName.css("color","hsl(" + i + ", 100%, 50%)")
			moodName.text(moodArray[moodIndex])
				moodIndex++


			button.append(drop);
			colorWheelLine.append(emptyLine)
			colorWheelLine.append(button)
			colorWheelLine.append(moodName)
			$("#colorwheel").append(colorWheelLine)
		};
}







function createButtons () {
for (var i=0; i<360; i+=15) {

			var button = $("<button>")
			button.addClass("btn-drop select")
			button.attr("id", "d" + i)

			var drop = $("<div>")
			drop.addClass("water-drop")
			drop.css("backgroundColor","hsl(" + i + ", 100%, 50%)")

			var moodName = $("<span>")
			moodName.addClass("moodName");

			moodName.css("color","hsl(" + i + ", 100%, 50%)")
			moodName.text(moodArray[moodIndex])
				moodIndex++


			button.append(drop);
			$("#colorwheel").append(moodName)
			$("#colorwheel").append(button)
		};
}








createButtons ()
placeInCircle("btn-drop", "colorwheel", 160)
placeInCircle("moodName", "colorwheel", 200)

function placeInCircle (ItemClass, ItemLocation, radius) {
var radius = radius;
var fields = $('.'+ItemClass), container = $('#'+ItemLocation), width = container.width(), height = container.height();

var angle = 0, step = (2*Math.PI) / fields.length;
fields.each(function() {
    var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
    var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
    if(window.console) {
        console.log($(this).text(), x, y);
    }
    $(this).css({
        left: x + 'px',
        top: y + 'px'
    });
    angle += step;
});

}





$(".select").click(function(){
console.log("Selected color")
});





$(".selected").click(function(){
	var clickedID =$(this).attr('id')
	console.log(clickedID)

	document.getElementById(clickedID).parentNode.setAttribute("class", "colorWheelLine");

	document.getElementById(clickedID).style.left = (-140) + 'px';

	  var pos = 140;
	  var id = setInterval(frame, 5);
	  function frame() {
	    if (pos == 0) {
	      clearInterval(id);
	    } else {
	      pos-=5;
	      // document.getElementById(clickedID).style.top = pos + 'px';
	      document.getElementById(clickedID).style.left = pos*(-1) + 'px';
	    }
	  }
});
