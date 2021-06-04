/* orice e impartit la 3 devine fizz si orice impartit la 5 devine buzz, orice impartit la 15 devine fizzbuzz - folosesti modulo

e o problema de numarat, deci tre sa folosesti un iterator, un for loop,

tre sa ai un loc in care sa stochezi rezultatu - un array

*/
/*
function fizzbuzz() {
  // Stocam output intr-un array
  let stock = [];
  //Input-ul va fi de la jucator, in baza 10, avand grija sa fie un numar
  let max = parseInt(prompt("cat vrei coaie?"), 10);
// parseInt() are output un numar (daca parametru era un string care contine un nr) sau NaN daca contine un string care nu are numere

  if (isNaN(max) === true) { //testam daca a bagat un numar
    alert("tre sa bagi numar");
  } else {
    for (let i = 0; i < max; i++) { 
      stock.push(i); // loop care itereaza si stocheaza resultatu in output
      if (i > 0 && i % 15 == 0) { // output-u corect e semi-hard coded in sensul in care la  fiecare iteratie care ar trebui sa genereze elementul dorit (fizz, buzz sau fizzbuzz) se fac 2 operatiuni in plus - scoate elementul proaspat addaugat care s-ar fi impartit la 15, pune in locu lui elementul dorit
        stock.pop();
        stock.push("fizzbuzz");
      } else if (i > 0 && i % 5 == 0) {
        stock.pop();
        stock.push("buzz");
      } else if (i > 0 && i % 3 == 0) {
        stock.pop();
        stock.push("fizz");
      }
    }
  }
//verificam output
  console.log(stock);
}

//invocam functia
document.getElementById("task-title").addEventListener("click", fizzbuzz);
*/
