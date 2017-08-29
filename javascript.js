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

songDecoder("AWUBWUBWUBBWUBWUBWUBC");


// better solutions
function songDecoder1(song){
  return song.replace(/(WUB)+/g," ").trim()
}

// even betterest
function songDecoder2(song){
  return song.split('WUB').filter(Boolean).join(' ');
}
// 2--------------------------------------------
