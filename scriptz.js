var bullshit = "cloud,moving forward,ROI,blue sky,applications,aw sheeeeit,incentivize,e-tailers,cutting-edge,e-services,functionalities,e-markets,action-items,social,innovative,wikis,integrateAJAX-enabled,Revolutionary,A-list,initiatives,post,dynamic,metrics,revolutionary,value-added,optimize,value-added,reinvent,integrate,unleash,grow,Long-tail,communities,functionalities,mission-critical,holistic,target,beta-test,turnkey,end-to-end,wireless,aggregate,viral,content,scale,enterprise,streamline,addelivery,streamline,podcasting,Real-time,vortals,e-enable,webservices,architectures,orchestrate,streamline,models,monetize,embedded,virtual,users,sticky,networking,incubate";
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
  checkRow($(this));
  checkColumn($(this));
  checkDiagonal($(this));
  fullCard($(this));
}
$(".box").on("click", notify);

// Check if a diagonal is selected
function checkDiagonal(el){
  var count = 0;
  var box = $(".box");
  if (box.eq(0).hasClass("checked")&&box.eq(4).hasClass("checked")&&box.eq(8).hasClass("checked")){
    console.log("WIN on diagonal - top left to bottom right");
    endGame();
  } else if (box.eq(2).hasClass("checked")&&box.eq(4).hasClass("checked")&&box.eq(6).hasClass("checked")){
    console.log("WIN on diagonal - top right to bottom left");
    endGame();
  }
}

// Check if a column is selected
function checkColumn(el){
  var count1 = 0, count2 = 0, count3 = 0;
  var c1 = $(".c1"), c2 = $(".c2"), c3 = $(".c3");
  for (var i = 0; i < c1.length; i++) {
    if(c1.eq(i).hasClass('checked')){
      count1 += 1;
      if(count1 == 3){
        console.log("COLUMN WIN");
        endGame();
      }
    } else if (c2.eq(i).hasClass('checked')) {
      count2 += 1;
      if(count2 == 3){
        console.log("COLUMN WIN");
        endGame();
      }
    } else if (c3.eq(i).hasClass('checked')) {
      count3 += 1;
      if(count3 == 3){
        console.log("COLUMN WIN");
        endGame();
      }
    }
  }
}

// Check if a line is selected
function checkRow(el){
  // check for row bingo TODO: http://codepen.io/anon/pen/vBJhH - modulus!
  var row = el.parent().children();
  var count = 0;

  for (var i = 0; i < row.length; i++) {
    if(row.eq(i).hasClass('checked')){
      count += 1;
      if(count == 3){
        console.log("ROW WIN");
        endGame();
      }
    }
  }
}

// Check if a full card is selected
function fullCard(el){
  if ($(".checked").length == 9){
    console.log("FULL CARD");
  }
}

function endGame(){
  // $("div").removeClass("checked");
  console.log("calls endGame");
}
