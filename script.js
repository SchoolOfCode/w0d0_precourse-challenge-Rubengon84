
const paintingsExamples = [         // Array of the links to the paintings pictures.
  
"https://www.sonidosnegros.com/uploads/3/7/2/0/37200623/1021149_orig.jpg",
"https://margencero.es/num1/slides/camaron1.jpg",
"https://www.sonidosnegros.com/uploads/3/7/2/0/37200623/7242425_orig.jpg",
"https://www.sonidosnegros.com/uploads/3/7/2/0/37200623/9833531_orig.jpg",
"http://3.bp.blogspot.com/-SyCmsn_xfSQ/TmziUu-JivI/AAAAAAAAANY/HX9LF4liE_8/s1600/05+Gipsy.jpg",
"https://i.pinimg.com/564x/19/6b/ff/196bffe68e16d537afe1e4cdde810dcc.jpg",
"https://i.pinimg.com/564x/4b/21/5f/4b215f713676f355c3d2365b863a8e90.jpg",
"https://www.sonidosnegros.com/uploads/3/7/2/0/37200623/8798958_orig.jpg",
"https://www.sonidosnegros.com/uploads/3/7/2/0/37200623/1861554_orig.jpg",
"https://www.sonidosnegros.com/uploads/3/7/2/0/37200623/8529945_orig.jpg",
"https://www.flamencoonfire.org/wp-content/uploads/2018/07/Poderi%CC%81o.-Carmen-Amaya.-Zaafra.jpg",
"https://javiervillarruiz.files.wordpress.com/2014/10/severo_ochoa1.jpg",
"https://render.fineartamerica.com/images/rendered/default/greeting-card/images-medium-5/tami-zaafra-david.jpg"
                          ];


function assignPaintingsExamples() {    // Function for ramdoring select and introduce the paintings pictures to show in the gallery section.
  
  const paintingsExamplesDiv = document.getElementsByClassName("paintingFrame");  // Get the element from the DOM

  let randomNumbersSelection = [];                                                // Array where to save the random numbers for no repetition.
  
    for(let i=0; i < paintingsExamplesDiv.length; i++) {                          // Loop same times as divs there are in the gallery for choosing the pictures and introduce to the div elements. 
      
      let randomNumber = Math.floor(Math.random() * paintingsExamples.length);    // Get a random number between 0 and the gallery div length.
      
      while (randomNumbersSelection.includes(randomNumber)){                      // Check if the random number is choosed before, if it have been choosen, create another random number.      
        randomNumber = Math.floor(Math.random() * paintingsExamples.length);
      };
  
      randomNumbersSelection.push(randomNumber);                                  // Save the random number in the Array for no repetition.
       
      paintingsExamplesDiv[i].style.backgroundImage = `url('${paintingsExamples[randomNumber]}')`;      // Introduce the url link of the picture choosed as background-image and in the href attribute of the <a> link. 
      paintingsExamplesDiv[i].childNodes[0].setAttribute("href", paintingsExamples[randomNumber]);
    };  

}

assignPaintingsExamples();             
