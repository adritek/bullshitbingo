var bullshit = "Applications,incentivize,e-tailers,cutting-edge,e-services,functionalities,e-markets,action-items,social,innovative,wikis,integrateAJAX-enabled,Revolutionary,A-list,initiatives,post,dynamic,metrics,revolutionary,value-added,optimize,value-added,reinvent,integrate,unleash,grow,Long-tail,communities,functionalities,mission-critical,holistic,target,beta-test,turnkey,embedded,end-to-end,wireless,aggregate,viral,content,scale,enterprise,streamline,addelivery,streamline,podcasting,Real-time,vortals,e-enable,webservices,architectures,orchestrate,streamline,models,monetize,embedded,virtual,users,sticky,networking,incubate";
var comma = ",";
var $boxes = $(".box");

/* functions */
function splitString() {
  function arrayOfStrings(stringToSplit, separator){
    return stringToSplit.split(separator);
  };
  return arrayOfStrings(bullshit, comma);
  //console.log('The array has ' + arrayOfStrings.length + ' elements');
};


// select 9 words



/* logging */
// console.log(splitString(bullshit, comma));
console.log($boxes.length);
console.log(splitString());


// function magic(x) {
//   return function calc(x) { return x * 42 };
// }
//
// var answer = magic();
// console.log(answer(1337)); // 56154
