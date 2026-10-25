const divide = (numerator, denumerator) => {Number(numerator) / Number(denumerator);
     if (denumerator === 0 || isNaN(denumerator) || isNaN(numerator))
      {throw new Error('error')} else {return numerator / denumerator} 
 }; 
 try 
 {console.log (divide(10, 'rr'))}
catch (error) {console.log ('error')}
finally {console.log ('Робота завершена')}

 

