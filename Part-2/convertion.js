function convert(a) {
	var crs = [1, 84.8, 100.59, 0.76, 1.14]
	var base = crs[a-1];
    var result;
    var inputs = [ 
        document.getElementById('taka'),
        document.getElementById('usd'),
        document.getElementById('eur'),
        document.getElementById('jpy'),
        document.getElementById('inr'),
    ]
    var takenValue = inputs[a-1];
    for(i=0;i<5;i++){
        result = (base * takenValue.value)/crs[i];
        result = result.toFixed(2);
        inputs[i].value = result;
    }
}
