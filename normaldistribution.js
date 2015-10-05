

function normalcdf(X){   //HASTINGS.  MAX ERROR = .000001
	var T=1/(1+.2316419*Math.abs(X));
	var D=.3989423*Math.exp(-X*X/2);
	var Prob=D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
	if (X>0) {
		Prob=1-Prob;
	}
	return Prob
}   

function compute(arguement, mean, stdev) {
    Z=arguement;
    M=mean;
    SD=stdev;
    with (Math) {
		if (SD<0) {
			console.log("The standard deviation must be nonnegative.");
		} else if (SD==0) {
		    if (Z<M){
		        Prob=0;
		    } else {
			    Prob=1;
			}
		} else {
			Prob=normalcdf((Z-M)/SD);
			Prob=round(100000*Prob)/100000;
		}
	}
	console.log(Prob);
}
console.log("x-value, mean, standerd deviation");
//console.log(process.argv);
compute(process.argv[2],process.argv[3],process.argv[4]);
