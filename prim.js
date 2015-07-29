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
	var len = result.length;
	var len2 = 0;
	var oldres = 0;
	for (var i = 0; i<len; i++) {
		len2 += result[i]!=oldres?1:0;
		oldres = result[i];
	}
	var correctedResult = new Array(len2);
	for(i=0; i<len2; i++) {
		correctedResult[i] = new Array(2);
	}
	var oldres = result[0];	
	var z = 0;
	var anz = 0;
	for (var i = 0; i<len; i++) {
		if(result[i]!=oldres) {
			correctedResult[z][0] = oldres;
			correctedResult[z][1] = anz;
			anz = 1;
			z++;			
		} else {
			anz++;
		}
		oldres = result[i];
	}
	correctedResult[z][0] = oldres;
	correctedResult[z][1] = anz;
	var text= ""
	for (i=0;i<correctedResult.length;i++) {
		teil = correctedResult[i][1]==1?""+correctedResult[i][0]:correctedResult[i][0] + " ^ " + correctedResult[i][1];
		text += i==0?teil:"" + " \u2715 " + teil;
	}
	return text;
}

$(document).ready(function() {
	$("#anzahl").keyup(function () {
		$(this).next(".texti").remove();
		$(this).next(".brexi").remove();
		val = $(this).val();
		var res = pfz(val);
		
		var newText = "       <b class=\"teal-text texti\">Result:  " + pfz(val) + "</b><br class=\"brexi\">";
		$(this).after(newText);
	});
});