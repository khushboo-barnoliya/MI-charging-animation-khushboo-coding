let value = document.querySelector('.value');

var percent = 0;

var time = setInterval( ()=> {
    value.innerHTML = percent;
    if(percent > 99){
        clearInterval(time);
        document.getElementById("popImg").style.display = "block";
    }
    percent++;
}, 700);

let charged = document.querySelector('.charged');
var count = 0;

let chargedTime = setInterval( () => {
    charged.innerHTML = count;
    if(count == 100){
        clearInterval(chargedTime);
    }
    count++;
}, 700);