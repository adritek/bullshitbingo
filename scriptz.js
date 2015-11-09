var bullshit = "Applications,incentivize,e-tailers,cutting-edge,e-services,functionalities,e-markets,action-items,social,innovative,wikis,integrateAJAX-enabled,Revolutionary,A-list,initiatives,post,dynamic,metrics,revolutionary,value-added,optimize,value-added,reinvent,integrate,unleash,grow,Long-tail,communities,functionalities,mission-critical,holistic,target,beta-test,turnkey,end-to-end,wireless,aggregate,viral,content,scale,enterprise,streamline,addelivery,streamline,podcasting,Real-time,vortals,e-enable,webservices,architectures,orchestrate,streamline,models,monetize,embedded,virtual,users,sticky,networking,incubate";
var $boxes = $(".box");
var grid = 9;
var randNum;
var gridNums = [];
var selected = [];

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
  // check for row bingo TODO: use modulus for different grids - saw it on codepen somewhere
  var winners = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
  ]

  var possibleWinners = winners.length;

  console.log("Selected boxes in array: " + selected.length);

  selected.push($element);

  // Compare winners array to selected array for matches
  for (var i = 0; i < possibleWinners; i++) {
    var cellExists = 0;

    for (var j = 0; j < 3; j++) {
      if ($.inArray(winners[i][j], selected) > -1) {
          cellExists++;
      }
    }

    // If all 5 winner cells exist in selected array alert success message
    if (cellExists == 3) {
      alert('Winner!');
    }
  }
  var index = $( ".box" ).index($element); //for logging
  console.log( "That was div index #" + index );
}
