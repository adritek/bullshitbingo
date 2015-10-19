var bullshit = "Applications,incentivize,e-tailers,cutting-edge,e-services,functionalities,e-markets,action-items,social,innovative,wikis,integrateAJAX-enabled,Revolutionary,A-list,initiatives,post,dynamic,metrics,revolutionary,value-added,optimize,value-added,reinvent,integrate,unleash,grow,Long-tail,communities,functionalities,mission-critical,holistic,target,beta-test,turnkey,embedded,end-to-end,wireless,aggregate,viral,content,scale,enterprise,streamline,addelivery,streamline,podcasting,Real-time,vortals,e-enable,webservices,architectures,orchestrate,streamline,models,monetize,embedded,virtual,users,sticky,networking,incubate";
var comma = ",";
var $boxes = $(".box");
var grid = 9;
/* functions */

// split the string into an array of words
function splitString() {
  function arrayOfStrings(stringToSplit, separator){
    return stringToSplit.split(separator);
  };
  return arrayOfStrings(bullshit, comma);
};

var splitwords = splitString();
splitwords.forEach(function(element, index, array){
  // console.log(index + ": " + element);
});
// pick 9 random numbers
var randNum;
var gridNums = [];
for(var i = 0; i < grid; i++){
  randNum = Math.floor(Math.random()* splitwords.length);
  gridNums.push(randNum);
}
console.log(gridNums);
function pickRand(wordsArr){

  // var rand = wordsArr[Math.floor(Math.random() * wordsArr.length)];
  // console.log(rand);
}

// place words into the grid
// select 9 words

/* logging */
// console.log(splitString(bullshit, comma));
// console.log(pickWords(splitString());
// console.log($boxes.length);
// console.log(splitString());
