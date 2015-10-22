var bullshit = "Applications,incentivize,e-tailers,cutting-edge,e-services,functionalities,e-markets,action-items,social,innovative,wikis"//,integrateAJAX-enabled,Revolutionary,A-list,initiatives,post,dynamic,metrics,revolutionary,value-added,optimize,value-added,reinvent,integrate,unleash,grow,Long-tail,communities,functionalities,mission-critical,holistic,target,beta-test,turnkey,embedded,end-to-end,wireless,aggregate,viral,content,scale,enterprise,streamline,addelivery,streamline,podcasting,Real-time,vortals,e-enable,webservices,architectures,orchestrate,streamline,models,monetize,embedded,virtual,users,sticky,networking,incubate";
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
console.log($boxes.length);

for (var i = 0; i < $boxes.length; i++) {
  $boxes.append("<p>" + splitwords[gridNums[i]] + "</p>");
  console.log("Comparison: " + gridNums[i] + ": " + splitwords[gridNums[i]]);
}

/* logging */
console.log("The string is now an array of: " + splitwords.length + " elements");
console.log("We now have " + gridNums.length + " random numbers from the array length - they are: " + gridNums);
