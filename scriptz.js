var bullshit = "Applications,incentivize,e-tailers,cutting-edge,e-services,functionalities,e-markets,action-items,social,innovative,wikis,integrateAJAX-enabled,Revolutionary,A-list,initiatives,post,dynamic,metrics,revolutionary,value-added,optimize,value-added,reinvent,integrate,unleash,grow,Long-tail,communities,functionalities,mission-critical,holistic,target,beta-test,turnkey,end-to-end,wireless,aggregate,viral,content,scale,enterprise,streamline,addelivery,streamline,podcasting,Real-time,vortals,e-enable,webservices,architectures,orchestrate,streamline,models,monetize,embedded,virtual,users,sticky,networking,incubate";
var $boxes = $(".box");
var grid = 9;
var randNum;
var gridNums = [];

/* Functions */
var splitwords = bullshit.split(","); // array

// Pick 9 random numbers
for(var i = 0; i < grid; i++){
  randNum = Math.floor(Math.random()* splitwords.length);
  gridNums.push(randNum);
}

// Populate a box with a word
$boxes.each(function(index){
  $(this).append("<p>" + splitwords[gridNums[index]] + "</p>");
});

// Set a listener to check off a word when it is clicked
function notify(){
  $(this).toggleClass("checked");
  // console.log($(this).text());
  checkLine($(this));
}
$(".box").on("click", notify);

// Check if a line is checked
function checkLine($element){
  if ($element.hasClass("checked")){
    // console.log($element.get());
    var index = $( ".box" ).index($element);
    
    console.log( "That was div index #" + index );
  }
}
