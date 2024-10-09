window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick = startGame;
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart() {
    var TIMER_TICK = 1000;
    var timeLeft = 30; 
    var clock = document.getElementById('clock');
    var timer = setInterval(timeCount, TIMER_TICK); 

    function timeCount() {
        timeLeft--;
        clock.textContent = timeLeft; 
        var allbox = document.querySelectorAll("#layer div");

        if (timeLeft <= 0) {
            clearInterval(timer); 
            if (allbox.length > 0) {
                alert("Game Over");
                clearScreen(); 
            }
        } else if (allbox.length === 0) {
            alert("You Win!");
            clearInterval(timer); 
        }
    }
}

		function addBox() {
			var numbox = parseInt(document.getElementById("numbox").value); // รับจำนวนกล่องจาก input
			var gameLayer = document.getElementById("layer"); // เลเยอร์ที่เราจะวางกล่อง
			var colorDrop = document.getElementById("color").value; // รับค่าสีจาก select
		
			for (var i = 0; i < numbox; i++) {
				var tempbox = document.createElement("div"); // สร้าง div สำหรับกล่อง
				tempbox.className = "square " + colorDrop; // กำหนด class ให้กล่องรวมถึงสีที่เลือก
				tempbox.style.left = Math.random() * (500 - 25) + "px"; // สุ่มตำแหน่งแนวนอน
				tempbox.style.top = Math.random() * (500 - 25) + "px";  // สุ่มตำแหน่งแนวตั้ง
				gameLayer.appendChild(tempbox); // เพิ่มกล่องลงในเลเยอร์
				bindBox(tempbox); // ผูกเหตุการณ์คลิกกล่องให้กล่องสามารถถูกคลิกแล้วหายไปได้
			}
		}				

function bindBox(box){
	box.onclick = function(){
		box.parentNode.removeChild(box);		
	}
}

function clearScreen(){
	var allbox = document.querySelectorAll("#layer div");

	  for (var i = 0; i < allbox.length; i++) {
        allbox[i].parentNode.removeChild(allbox[i]);
    }
}




