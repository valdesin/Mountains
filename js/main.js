
//icon-mont
var countClickInfo = 0;

document.getElementById("icon-mont").addEventListener("click", function() {
  if(countClickInfo == 0){
    document.getElementById("info-mont").style.visibility="visible";
    countClickInfo++;
  }else{
    document.getElementById("info-mont").style.visibility="hidden";
    countClickInfo = 0;
  }
}, false);

// end

//Slider
var i = 1;
var j = 3;
var count = 0;
var infoOfMontBlanc = 'Mont Blanc  both meaning "White Mountain", is the highest mountain in the Alps and the highest in Europe after the Caucasus peaks. It rises 4,808.73 m (15,777 ft) above sea level and is ranked 11th in the worldin topographic prominence.';
var infoOfEverest = "Everest  is Earth's highest mountain. Its peak is 8,848 metres (29,029 ft) above sea level. Mount Everest is located in the Mahalangur mountain range in Nepal. The international border between China (Tibet Autonomous Region) and Nepal runs across Everest's precise summit point. Its massif includes neighbouring peaks Lhotse, 8,516 m (27,940 ft); Nuptse, 7,855 m (25,771 ft) and Changtse, 7,580 m (24,870 ft).";
var infoOfAiguilleDuDru = 'The Aiguille du Dru (also the Dru or the Drus; French, Les Drus) is a mountain in the Mont Blanc massif in the French Alps. It is situated to the east of the village of Les Praz in the Chamonix valley. "Aiguille" means "needle" in French.';
var infoOfMatterhorn = "The Matterhorn (German: Matterhorn, Italian: Monte Cervino, French: Mont Cervin, is a mountain of the Alps, straddling the main watershed and border between Switzerland and Italy. It is a huge and near-symmetrical pyramidal peak in the extended Monte Rosa area of the Pennine Alps, whose summit is 4,478 metres (14,692 ft) high, making it one of the highest summits in the Alps and Europe." ;


var imagesForSlider = ["mont-blanc.jpg","everest.jpg", "aiguille-du-dru.jpg", "matterhorn.jpg"];
var mountains = ["Mont Blanc", "Everest", "Aiguille du Dru", "Matterhorn"];
var infoOfMountains = [infoOfMontBlanc, infoOfEverest, infoOfAiguilleDuDru, infoOfMatterhorn];

document.getElementById("icon-arrow").addEventListener("click", function(){
  //Background-img
var backgImg = document.getElementById("main");
var linkImg = "url('images/slider/"+imagesForSlider[i]+"') no-repeat";
backgImg.style.background= linkImg;
backgImg.style.backgroundSize="cover";
  //Headin-slider
  var headingOfHeader = document.getElementById("heading-mont");
  headingOfHeader.innerHTML= mountains[i];
  //Text-Information
  var textInfo = document.getElementById("text-info");
  textInfo.innerHTML= infoOfMountains[i];


    // if(i < 1){
    //   i++;
    // }
    j = i;
    if(j == 0){
    j = mountains.length-1
  }else{
    j--;
  }
    (i < mountains.length-1)? i++ : i=0;

});


//Arrow-preivous

  document.getElementById("icon-arrow-previous").addEventListener("click", function(){
    count++;

    if(j < 0){
      j = mountains.length-1;
  }
    var backgImg = document.getElementById("main");
    var linkImg = "url('images/slider/"+imagesForSlider[j]+"') no-repeat";
    backgImg.style.background= linkImg;
    backgImg.style.backgroundSize="cover";
      //Headin-slider
      var headingOfHeader = document.getElementById("heading-mont");
      headingOfHeader.innerHTML= mountains[j];
      //Text-Information
      var textInfo = document.getElementById("text-info");
      textInfo.innerHTML= infoOfMountains[j];

      i = j;
      i++;
      --j;
      (i < mountains.length-1)? i++ : i=0;




  });
