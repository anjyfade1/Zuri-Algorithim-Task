// Algorithm Task for coverting a parameter to celsius 

function convertFahrToCelsius (num) {
    let fahr = num - 32;
    let output = fahr *  5/9;
    
    let input = JSON.stringify(num);
    
    if(Array.isArray(num)) {
      console.log( input + " is not a valid number but an array " );
    }else if (typeof num !== 'number') {
       console.log( input + " is not a valid number but a/an " + typeof num );
    }

    console.log(output.toFixed(4));
  }
  
  convertFahrToCelsius (0);
