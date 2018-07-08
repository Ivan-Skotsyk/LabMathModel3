var x = [];
var y = [];
var DV = -2;
var DG = 5;
var Cy_bal = (2 * 730000) / (201.45 * 0.1190 * 97.2 * 97.2);

var C1 = (13.0 * 0.1190 * 97.2 * 201.45 * 5.285 * 5.285) / (2 * 660000);
var C2 = (1.83 * 0.1190 * 97.2 * 97.2 * 201.45 * 5.285) / (2 * 660000);
var C3 = (0.96 * 0.1190 * 97.2 * 97.2 * 201.45 * 5.285) / (2 *660000);
var C4 = ((5.78 + 0.046) * 0.1190 * 97.2 * 201.45 * 9.81) / (2 * 73000);
var C5 = (3.8 * 0.1190 * 97.2 * 201.45 * 5.285 * 5.285) / (2 * 660000);
var C6 = 97.2 / 57.3;
var C7 = 9.8 / 57.3;
var C8 = ((0.286 - Cy_bal) * 0.1190 * 97.2 * 97.2 * 9.8) / (2 * 57.3 * 73000);
var C9 = (0.2865 * 0.1190 * 97.2 * 201.45 * 9.81) / (2 * 73000);
var C16 = 97.2 / (57.3 * 9.81);
var C17 = (-5.78 * (0.18 - 0.24) * 0.1190 * 97.2 * 97.2 * 201.45 * 5.285) / (2 * 660000);
var C18 = (-0.2865 * (0.18 - 0.24) * 0.1190 * 97.2 * 97.2 * 201.45 * 5.285) / (2 * 660000);
var C19 = (-3 * 7003 * 9.8) / (57.3 * 73000); 

var e1 = ((0.1190 * 97.2 * 9.8 * 201.45 * 0.043) / 73000) * (1 + (3 * 13.8) / (0.1190 * 97.2 * 201.45 * 0.0043));
var e2 = (57.3 * 0.1190 * 9.8 * 201.45 * Cy_bal) / 73000;
var e3 = -57.3 * 3 * 13.8 * 0.5 / 660000;

// console.log(C1);
// console.log(C2);
// console.log(C3);
// console.log(C4);
// console.log(C5);
// console.log(C6);
// console.log(C7);
// console.log(C8);
// console.log(C9);
// console.log(C16);
// console.log(C17);
// console.log(C18);
// console.log(C19);
// console.log(e1);
// console.log(e2);
// console.log(e3);
// for (var i = 0; i < 6; i++) {
//  	x[i] = 0;
//  	y[i] = 0;
//  } 

var x0 = 0;
var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var x5 = 0;

var y0 = 0;
var y1 = 0;
var y2 = 0;
var y3 = 0;
var y4 = 0;
var y5 = 0;
var y6 = 0;

var Ny = 0;
var Wx = 5;
var Yny = 0;

for (var T = 0; T < 180; T = T + 0.05) {

	x0 = y1;
	x1 = -C1 * x0 - (C2 + C17) * y5 - C5 * x5 - e3 * y6 - (C3 + C18) * DV;
	x2 = C4 * y5 + e2 * y6 + C9 * DV;
	x3 = -(e1 * y6 + C8 * y5 + C7 * y0 + C19 * DG);
	y6 = y3 - Wx;
	x4 = C6 * y2;
	x5 = x0 - x2;
	Ny = C16 * x2;
	

	//  for (var i = 0; i < 5; i++) {

	// 	y[i] += x[i] * 0.05;
	// 	console.log(T + " " + y[i]);
	// }
		y0 += x0 * 0.05;
		y1 += x1 * 0.05;
		y2 += x2 * 0.05;
		y3 += x3 * 0.05;
		y4 += x4 * 0.05;
		y5 += x5 * 0.05;
		Yny += Ny * 0.05;

	console.log(T + " " + y0);
	console.log(T + " " + y1);
	console.log(T + " " + y2);
	console.log(T + " " + y3);
	console.log(T + " " + y4);
	console.log(T + " " + y5);
	console.log(T + " " + y6);
	console.log(T + " " + Yny);
	console.log(' ');

}




