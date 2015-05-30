
function goFullscreen(id) {

      var element = document.getElementById(id);


        $('#mnj').show();
        $('#videoclose').show();

        if (element.requestFullscreen)
            element.requestFullscreen();
        else if (element.msRequestFullscreen)
            element.msRequestFullscreen();
        else if (element.mozRequestFullScreen)
            element.mozRequestFullScreen();
        else if (element.webkitRequestFullscreen)
            element.webkitRequestFullscreen();

  }

  document.addEventListener("keydown", function (e) {
      if (e.keyCode === 27) {
          $('#mnj').hide();
          $('#videoclose').hide();
        }
  }, false);