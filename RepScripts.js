var rep = document.getElementById("reproductor");

function playPause() { 
	var rep = document.getElementById("reproductor");
  if (rep.paused) 
    rep.play(); 
  else 
    rep.pause(); 
} 

function changeSong(){
rep.setAttribute("src","file:///home/isaias/Música/Opening%20Titles%20Johnny%20English%20Strikes%20Again.mp3");
rep.play();
}
/*window.addEventListener("load",function(){				
if (typeof window.FileReader!=="undefined")
{
alert("Soportado el File API");
}
else
{
alert("No es soportado el File API");
}

});
*/
/*function carga(evt) {
    var files = evt.target.files; // FileList object
    // files is a FileList of File objects. List some properties.
    console.log(files[0].name);
  }*/


  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
			/*
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<video controls src="', e.target.result,
                            , '"><video/>'].join('');
          document.getElementById('list').insertBefore(span, null);*/
		 var rep = document.getElementById("reproductor");
		 var url =  e.target.result;
          rep.setAttribute("src",url);
		  rep.play();
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);