//  input value add
function getValue(num){

    let search =  document.getElementById("search");
     search.value += num;
   
}
// input clear click c button
function clearValue(){

    let search =  document.getElementById("search");
    search.value = "";
}
// final caculation result
function  resultEqual(){
    let search =  document.getElementById("search");
    let equalater = search.value = eval(search.value);
    console.log(equalater)
    }
// clera 1 digit del button 
   function delValue(){
    let search = document.getElementById("search");
    search.value = search.value.slice(0,-1);
   }


