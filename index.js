
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested").querySelector(".target");
}

function increaseRankBy(n) {
  var x = parseInt(n); 
  var nodeList = document.querySelectorAll(".ranked-list");
  var firstNodeChildren = nodeList[0].children;
  for (var i=0; i< firstNodeChildren.length ; i++) {
    firstNodeChildren[i].innerHTML = parseInt
    (firstNodeChildren[i].innerHTML) + x;
  }
  var secondNodeChildren = nodeList[1].children;
  for (var j=0; j< secondNodeChildren.length; j++) {
    secondNodeChildren[j].innerHTML = parseInt(secondNodeChildren[j].innerHTML) + x;
  }
}

function deepestChild() {
 var targetNode = document.querySelector("#grand-node")
 console.log(targetNode);
 return targetNode;
}