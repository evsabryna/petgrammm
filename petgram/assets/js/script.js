let count = 1;
document.getElementById("pointer").checked = true;

setInterval ( function() {
    nextimage();
}, 200)


function nextImage () {
    count++;
    if(count>3){
        count =1;
    }

    document.getElementById ("pointer"+count).checked = true;
}