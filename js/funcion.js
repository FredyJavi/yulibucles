function comprar(){
  let tiposala=(document.getElementById("tipo").value);
  const sala1= 20;
  const sala2= 40;
  const sala3= 30;

  if(tiposala== "1"){
    let tiketscomprados=parseInt( prompt("cuantos tikets desea adquirir? "))

    while(tiketscomprados<sala1){
      let tiketsrestantes= sala1-tiketscomprados;
      let tikets=prompt("desea adquirir mas tikets? Quedan: "+tiketsrestantes)
      let tiketsInt=parseInt(tikets)
      tiketscomprados+=tiketsInt;
      
      if (tiketscomprados>=sala1){
        alert("los cupos estan llenos mira en otro bloque 2 y 3")

      }
  }
}
if(tiposala== "2"){
  let tiketscomprados=parseInt( prompt("cuantos tikets desea adquirir? "))

  while(tiketscomprados<sala2){
    let tiketsrestantes= sala2-tiketscomprados;
    let tikets=prompt("desea adquirir mas tikets? Quedan: "+tiketsrestantes)
    let tiketsInt=parseInt(tikets)
    tiketscomprados+=tiketsInt;
    
    if (tiketscomprados>=sala2){
      alert("los cupos estan llenos mira en otra sala 1 y 3")

    }
}
}
if(tiposala== "3"){
  let tiketscomprados=parseInt( prompt("cuantos tikets desea adquirir? "))

  while(tiketscomprados<sala3){
    let tiketsrestantes= sala3-tiketscomprados;
    let tikets=prompt("desea adquirir mas tikets? Quedan: "+tiketsrestantes)
    let tiketsInt=parseInt(tikets)
    tiketscomprados+=tiketsInt;
    
    if (tiketscomprados>=sala3){
      alert("los cupos estan llenos mira en otra sala 1 y 2")

    }
}
}
}