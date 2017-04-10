function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if(typeof(creditCardNumber)!== 'number'){
    	return "Error de dato"
    }
    if (creditCardNumber.toString().length!==16){
    	return "Faltan numeros";
    }    
    
    var sumaPar=0;
	var sumaImpar=0;
	for(var i=0;i<creditCardNumber.length;i++){
		if(i%2===0){
			if(Number(creditCardNumber.substring(i,i+1))*2 > 9){
			sumaImpar+=Number(creditCardNumber.substring(i,i+1))*2-9;
			}
			if(sumaImpar+=Number(creditCardNumber.substring(i,i+1))*2);
			}
			if(sumaPar+=Number(creditCardNumber.substring(i,i+1)));	
			
			
	}
	var suma = sumaPar+sumaImpar;
	var MOD=suma%10;
	if(MOD===0){
		return true;
	}
	else
		return false;

}
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
