 function rot13(str) {
  let decodeResult = "";
  let alphaStart = 'ABCDEFGHIJKLM';
  let alphaEnd  = 'NOPQRSTUVWXYZ';


for ( let i = 0; i < str.length; i += 1){

      let letter = str[i];

      if (alphaStart.indexOf(letter) >= 0)
      {
         decodeResult += alphaEnd[alphaStart.indexOf(letter)];
      } else if (alphaEnd.indexOf(letter) >= 0 ) {

        decodeResult += alphaStart[alphaEnd.indexOf(letter)]

        } else {

          decodeResult += letter;
          
        }

  }
  
   return decodeResult;
}

 
 console.log(rot13("SERR PBQR PNZC"));
