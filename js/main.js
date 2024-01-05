jQuery(document).ready(readyFunction)
function readyFunction($){
    function moveBG(){
        $(".btn-bg").css("left", "200px")
        console.log("hello")
    }
    $(".btn-cover button").click(moveBG)
}