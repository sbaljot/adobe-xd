var tip1 = document.getElementById("tip1");
var tip2 = document.getElementById("tip2");
var tip3 = document.getElementById("tip3");
var dots1 = document.getElementById("dots1");
var dots2 = document.getElementById("dots2");
var dots3 = document.getElementById("dots3");
var start = 0; var limit = 5; var reachedmax = false;
function openTab(evt, tabName) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    var tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
function ftip1() {
    tip1.style.display = "block";
    dots1.style.display = "inline-block";
    tip2.style.display = "none";
    tip3.style.display = "none";
    dots2.style.display = "none";
    dots3.style.display = "none";
}
function ftip2() {
    tip2.style.display = "block";
    dots2.style.display = "inline-block";
    tip1.style.display = "none";
    tip3.style.display = "none";
    dots1.style.display = "none";
    dots3.style.display = "none";
}
function ftip3() {
    tip3.style.display = "block";
    dots3.style.display = "inline-block";
    tip2.style.display = "none";
    tip1.style.display = "none";
    dots2.style.display = "none";
    dots1.style.display = "none";
}
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight) {
        $(document).ready(function () {
            getData();
        });
    }
    function getData() {
        if (reachedmax) { console.log('No more records'); }
        else {
            setTimeout(function () {
                $.ajax({
                    type: "POST",
                    url: "ba.php",
                    dataType: "json",
                    data: { getData: 1, start: start, limit: limit },
                    success: function (response) {
                        if (response == '') { reachedmax = true; }
                        else {
                            start += limit;
                            $('table').append(response);
                        }
                    }
                });
            }, 1500)
        }
    }
})
