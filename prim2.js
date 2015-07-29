function primzahltest(n) {
	var i = 0, result = 1;
	var a = parseInt(n/2) + 1;
	for(i = 2 ; i < a	; i++) {
		result = (n%i)==0?i:result;
	}
	return result==1?1:0;
}

function pfz(n) {
	var i = 0, result = [];
	for(i = 2; i < n+1; i++) {
		if(primzahltest(i)==1) {
			if(n%i == 0) {		
				var res = 0;
				while(res == 0) {
					n /= i;
					result.push(i);
					res = n%i;
				}
			}
		}
	}
}