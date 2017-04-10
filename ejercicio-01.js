function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    var sumaPar=0;
	var sumaImpar=0;
	for(var i=0;i<creditCardNumber.length;i++){
		if(i%2===0){
			if(parseInt(creditCardNumber.substring(i,i+1))*2 > 9){
			sumaImpar+=parseInt(creditCardNumber.substring(i,i+1))*2-9;
			}
			else{
				sumaImpar+=parseInt(creditCardNumber.substring(i,i+1))*2;
			}
			sumaPar+=parseInt(creditCardNumber.substring(i,i+1));	
			
			
	}
	var suma = sumaPar+sumaImpar;
	var MOD=suma%10;
	if(MOD===0){
		alert (true);
	}
	else
		alert(false);

}
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
