// document.addEventListener("contextmenu","copy",function(e){
// e.preventDefault();
// alert("coped is not allowed here");
// })

// document.addEventListener("copy", function(e) {
//     e.preventDefault();
//     alert("not allowed");
//     return false;

// })
function mouseMoveHandler(e) {
    e.preventDefault();
    alert("copied is not allowed here");
    return false;
}
  "contextmenu copy ".split(" ").forEach(function(e){
      window.addEventListener(e,mouseMoveHandler,false);
});