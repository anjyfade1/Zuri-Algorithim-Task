
// Algorithm Task for replacing multiples of a number 

  let out = [];

  function checkYuGiOh (N) {

  for (i = 1; i <= N; i++) {

    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
      out.push("yu-gi-oh")
    }else if (i % 2 === 0 && i % 3 === 0){
      out.push("yu-gi")
    }else if (i % 2 === 0 && i % 5 === 0){
      out.push("yu-oh")
    }else if (i % 3 === 0 && i % 5 === 0){
      out.push("gi-oh")
    }else if (i % 2 === 0){
      out.push("yu")
    }else if (i % 3 === 0){
      out.push("gi")
    }else if (i % 5 === 0){
      out.push("oh")
    }else{
      out.push(i);
    }
    
  }

  console.log(out);

   if ( typeof N != 'number' )  {
      console.log( " invalid parameter: " + N);
   }
   
  }

  checkYuGiOh (30);
 
 
