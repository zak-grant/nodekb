var arr = [1,2,3,4,5,6];

function double(arr) {
  for (var i = 0; i < arr.length; i++){
    console.log(arr[i] * 2);
  }
}

double(arr);

var arr = [1,2,3,4,5,6];
forEach(arr, function(number){
  console.log(number * 2);
});

var arr = [3,4,6,2,1];
function findIndex(arr, function(num, index, array)){
  return num === 6;
};

function findIndex(arr, callback){
  for (var i = 0; i < arr.length; i++){
    if (callback(arr[i], i, arr)){
      return i;
    }
  }
  return -1;
}

var num = 3;
var intervalId(num, setInterval(function(){
  num--;
  console.log("num:",num);
  if(num === 0){
    clearInterval(intervalId);
  }
}, 1000));

function numberCountDown(num){
var intervalId = setInterval(num, function(){
  num--;
  console.log("num:",num);
  if(num > 0){
    clearInterval(intervalId);
  } else {
    console.log("Ring Ring Ring!");
  }
}, 1000);
}
