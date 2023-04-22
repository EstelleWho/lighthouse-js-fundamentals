for (let i = 100; i <= 200; i++) {
if(i % 3 === 0 && i % 4 === 0) {
  console.log('Loopy Lighthouse'); 
} else if(i % 4 === 0) {
  console.log('Lighthouse');
} else if(i % 3 === 0) {
  console.log('Loopy');
}
console.log(i);
}

/* 
1. INPUT:


2. OUTPUT:
console.log()

3. PROCESSING:
  - prints 100 to 200
  
  for (let i = 100; i <= 200; i++) {

    console.log(i);
  }
  - if x3, print "Loopy"
  - if x 4, print "Lighthouse"
  - if X 3 & 4, print "Loopy Lighthouse"
  - otherwise print number

*/
