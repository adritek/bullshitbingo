var bullshit = "Applications,incentivize,e-tailers,cutting-edge,e-services,functionalities,e-markets,action-items,social,innovative,wikis,integrateAJAX-enabled,Revolutionary,A-list,initiatives,post,dynamic,metrics,revolutionary,value-added,optimize,value-added,reinvent,integrate,unleash,grow,Long-tail,communities,functionalities,mission-critical,holistic,target,beta-test,turnkey,embedded,end-to-end,wireless,aggregate,viral,content,scale,enterprise,streamline,addelivery,streamline,podcasting,Real-time,vortals,e-enable,webservices,architectures,orchestrate,streamline,models,monetize,embedded,virtual,users,sticky,networking,incubate";
var $boxes = $(".box");
var grid = 9;
var randNum;
var gridNums = [];

/* functions */
var splitwords = bullshit.split(","); // array

// pick 9 random numbers
for(var i = 0; i < grid; i++){
  randNum = Math.floor(Math.random()* splitwords.length);
  gridNums.push(randNum);
}

// match the numbers from splitwords
for (var i = 0; i < splitwords.length; i++){
  for (var j = 0; j < gridNums.length; j++){
    if (splitwords[i] == gridNums[j]){
      console.log("match");
    }
  }
}

/*TODO*/
// place words into the grid
// select 9 words

/* logging */
console.log("The string is now in an array of: " + splitwords.length + " elements");
console.log("We now have " + gridNums.length + " random numbers from the array length " + gridNums.sort());
console.log("There are: " +$boxes.length + " boxes on the screen");
// console.log(splitString());
