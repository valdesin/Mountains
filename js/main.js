
//icon-mont

document.getElementById("icon-mont").addEventListener("click", function() {
    document.getElementById("info-mont").style.visibility="visible";
}, false);

document.getElementById("icon-close").addEventListener("click",
  function() {
    document.getElementById("info-mont").style.visibility="hidden";
  }, false);

// end

//Slider

document.getElementById("icon-arrow").addEventListener("click", function(){
    //Background-img
  var backgImg = document.getElementById("main");
  backgImg.style.background="url('images/slider/everest.jpg') no-repeat";
  backgImg.style.backgroundSize="cover";
    //Headin-slider
    var headingOfHeader = document.getElementById("heading-mont");
    headingOfHeader.innerHTML=" Everest";
    //Text-Information
    var textInfo = document.getElementById("text-info");
    textInfo.innerHTML="Mount Everest, also known in Nepal as Sagarmāthā and in 
    China as Chomolungma/珠穆朗玛峰, is Earth's highest mountain. Its peak is
    8,848 metres (29,029 ft) above sea level. Mount Everest is located in
    the Mahalangur mountain range in Nepal. The international border
    between China (Tibet Autonomous Region) and Nepal runs across Everest's
    precise summit point. Its massif includes neighbouring peaks Lhotse,
    8,516 m (27,940 ft); Nuptse, 7,855 m (25,771 ft) and Changtse, 7,580 m
    (24,870 ft).";
});
