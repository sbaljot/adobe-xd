var tip1 = document.getElementById("tip1");
var tip2 = document.getElementById("tip2");
var tip3 = document.getElementById("tip3");
var dots1 = document.getElementById("dots1");
var dots2 = document.getElementById("dots2");
var dots3 = document.getElementById("dots3");
var start = 5; var limit = 5; var reachedmax = false;
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
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "ba.php",
        success: function (response) {
            prearr=[];
            prearr.push(response);
            console.log(prearr);
        }
    });
});
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight) {
        $(document).ready(function () {getData();})
    }
    function getData() {
        if (reachedmax) { console.log('No more records'); }
        else {
            $.ajax({
                type: "POST",
                url: "ba.php",
                dataType: "json",
                data: { getData: 1, start: start, limit: limit },
                success: function (response) {
                    arr = [];
                    start += limit;
                    arr.push(response);
                    if (arr[0][arr[0].length - 1] == 'last') {
                        reachedmax = true;
                    }
                    for (i = 0; i < arr[0].length - 2; i += 6) {
                        $('table').append(`<tr><td>` + arr[0][i] + `.</td>
                                <td>`+ arr[0][i + 1] + `</td>
                                <td>`+ arr[0][i + 2] + `</td>
                                <td>`+ arr[0][i + 3] + `</td>
                                <td>$`+ arr[0][i + 4] + `</td>
                                <td>
                                    <div class="trev"><span class="fiftypct">`+ arr[0][i + 5] + `%&nbsp;&nbsp;&nbsp;<svg
                                            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14" height="15"
                                            viewBox="0 0 172 172" style=" fill:#000000;">
                                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray=""
                                                stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none"
                                                text-anchor="none" style="mix-blend-mode: normal">
                                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                                <g fill="#ffffff">
                                                    <path
                                                        d="M42.43149,50.1839l-18.70913,18.70913l62.27764,62.27764l62.27765,-62.27764l-18.70913,-18.70913l-43.56851,43.56851z">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg></span></div>
                            </td>
                            <td>
                                <div class="aw"><span class="edit">Edit</span></div>
                            </td></tr>`)
                    }
                }
            });
        }
    }
})
