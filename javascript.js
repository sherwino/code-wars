//CODE WARS

// 1--------------------------------------------
function GetSum( a,b )
{

   if ( a === b ) {
     return a;

   } else if ( a < b ) {
       return sumFunction(a, b);

     } else if ( a > b ) {
       return sumFunction(b, a);
      }

}

let sumFunction = function(smallNum, bigNum) {
         let sumArr = [];
         let diff = Math.abs(smallNum - bigNum);
         for ( i=0; i < diff; i++ ) {
         sumArr.push(smallNum + i);
         }
         sumArr.push(bigNum);
         sumArr = sumArr.reduce((a, b) => a + b, 0);
         return sumArr;
         };

//cleaner solutions
const GetSum1 = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
};

//other clean solutions
function GetSum2(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

// 1--------------------------------------------


// 2--------------------------------------------
function songDecoder(song) {
  //create a new array by splitting string every time wub appears
  let splitSong = song.split("WUB");

  //iterate over array
  // then create a new array with results of filter
  splitSong = splitSong.filter(item => item !== "");

  //then create a new string with spaces in between each item
  let songString = splitSong.join(" ");
  return songString;
}

// better solutions
function songDecoder1(song){
  return song.replace(/(WUB)+/g," ").trim()
}

// even betterest
function songDecoder2(song){
  return song.split('WUB').filter(Boolean).join(' ');
}
// 2--------------------------------------------




// 3--------------------------------------------

function isValidWalk(walk) {

    //insert brilliant code here
    let x = 0, y = 0;
    let coordinate = [];
    if (walk.length === 10) {
      walk.forEach((dir) => {
        switch(dir.toLowerCase()) {

          case "n":

            coordinate = [x, y+=1];
            break;

          case "s":
            coordinate = [x, y-=1];
            break;

          case "e":
            coordinate = [x+=1, y];
            break;

          case "w":
            coordinate = [x-=1, y];
            break;

          } //end of switch
        });//end of forEach
       } else {
       return false;
    }; //end of if statement

    if(x == 0 && y == 0);

  };

  // better solutions
  function isValidWalk1(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length

    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break;
        case 's': dy++; break;
        case 'w': dx--; break;
        case 'e': dx++; break;
      }
    }

    return dt === 10 && dx === 0 && dy === 0
  }

  //better solutions two
  function isValidWalk2(walk) {
    function count(val) {
      return walk.filter(function(a){return a==val;}).length;
    }
    return walk.length==10 && count('n')==count('s') && count('w')==count('e');
  }


  //better solution three
  function isValidWalk3(walk) {
    const north = walk.filter(item => { return item === "n" }).length;
    const south = walk.filter(item => { return item === "s" }).length;
    const east = walk.filter(item => { return item === "e" }).length;
    const west = walk.filter(item => { return item === "w" }).length;

    return walk.length === 10 && north === south && east === west;
  }

// 3--------------------------------------------


// 4 ----------EXTRA CREDIT --------------------
function solution(N) {

    let gapStart, gapEnd, gapsFound;

    checkforGaps(N);
    checkforZeros(N);

} //end of solution fn

solution(1041);
// ====> 5

  function checkforGaps(num) {
      let bi = num.toString(2);
      gapsFound = [];

      for (i=0; i < bi.length; i++) {

        if (bi[i] === "1" && bi[i+1] === "0") {
          gapStart = i;
          console.log("Gap Start at idx: " + gapStart);

        } else if (bi[i] === "0" && bi[i+1] === "1") {
            gapEnd = i+1;
            gapsFound.push(gapStart, gapEnd);
            console.log("Gap End at idx: " + gapEnd);
            console.log("Gaps found " + gapsFound);

        } //end of if statements

      } //end of for loop

    } //end of checkforGaps fn


  function checkforZeros(num) {
    let bi = num.toString(2);
    let zeroCnt, zeroArray;

    gapsFound.forEach((ele, idx) => {
      if ( idx % 2 ) {
        gapStart = ele;
        console.log("Start " + gapStart);
      } else {
        gapEnd = ele;
        console.log("End " + gapEnd);
      }
    });

    for (i=gapStart; i < gapEnd; i++) {

      if (bi[i] === "0") {
        zeroCnt+=1;
        console.log("Zeros counted " + zeroCnt);
        zeroArray.push(zeroCnt);
      }
    }
    // gapsFound.push(zeroCnt);
    // return Math.max(...gapsFound);
    }
