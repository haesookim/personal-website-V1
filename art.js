var allImages = "";

for (var i = 0; i < 57; i++) {
  allImages += '<img src="images/art/' + i +'> alt="pretty kitty">';
}

document.getElementsByClassName('.gallery').append(allImages);