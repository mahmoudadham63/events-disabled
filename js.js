function mouseMoveHandler(e) {
    e.preventDefault();
    alert("copied is not allowed here");
    return false;
}
  "contextmenu copy ".split(" ").forEach(function(e){
      window.addEventListener(e,mouseMoveHandler,false);
});
