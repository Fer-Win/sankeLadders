import fs from 'fs';

let position = 0;
let diceRoll = 0;

 const play = (p,n) =>{
    console.log("Hello World!");
    diceRoll =n
    position=p;
  switch(position){
	case 1:
	switch(diceRoll){
		case 1:
			position = 2;
			break;
		case 2:
			position = 3;
			break;
		case 3:
			position = 4;
			break;
		case 4:
			position = 5;
			break;
		case 5:
			position = 6;
			break;
		case 6:
			position = 7;
			break;
	}
	break;
case 2:
	switch(diceRoll){
		case 1:
			position = 3;
			break;
		case 2:
			position = 4;
			break;
		case 3:
			position = 5;
			break;
		case 4:
			position = 6;
			break;
		case 5:
			position = 7;
			break;
		case 6:
			position = 8;
			break;
	}
	break;
case 3:
	switch(diceRoll){
		case 1:
			position = 4;
			break;
		case 2:
			position = 5;
			break;
		case 3:
			position = 6;
			break;
		case 4:
			position = 7;
			break;
		case 5:
			position = 8;
			break;
		case 6:
			position = 9;
			break;
	}
	break;
case 4:
	switch(diceRoll){
		case 1:
			position = 5;
			break;
		case 2:
			position = 6;
			break;
		case 3:
			position = 7;
			break;
		case 4:
			position = 8;
			break;
		case 5:
			position = 9;
			break;
		case 6:
			position = 10;
			break;
	}
	break;
case 5:
	switch(diceRoll){
		case 1:
			position = 6;
			break;
		case 2:
			position = 7;
			break;
		case 3:
			position = 8;
			break;
		case 4:
			position = 9;
			break;
		case 5:
			position = 10;
			break;
		case 6:
			position = 11;
			break;
	}
	break;
case 6:
	switch(diceRoll){
		case 1:
			position = 7;
			break;
		case 2:
			position = 8;
			break;
		case 3:
			position = 9;
			break;
		case 4:
			position = 10;
			break;
		case 5:
			position = 11;
			break;
		case 6:
			position = 12;
			break;
	}
	break;
case 7:
	switch(diceRoll){
		case 1:
			position = 8;
			break;
		case 2:
			position = 9;
			break;
		case 3:
			position = 10;
			break;
		case 4:
			position = 11;
			break;
		case 5:
			position = 12;
			break;
		case 6:
			position = 13;
			break;
	}
	break;
case 8:
	switch(diceRoll){
		case 1:
			position = 9;
			break;
		case 2:
			position = 10;
			break;
		case 3:
			position = 11;
			break;
		case 4:
			position = 12;
			break;
		case 5:
			position = 13;
			break;
		case 6:
			position = 14;
			break;
	}
	break;
case 9:
	switch(diceRoll){
		case 1:
			position = 10;
			break;
		case 2:
			position = 11;
			break;
		case 3:
			position = 12;
			break;
		case 4:
			position = 13;
			break;
		case 5:
			position = 14;
			break;
		case 6:
			position = 15;
			break;
	}
	break;
case 10:
	switch(diceRoll){
		case 1:
			position = 11;
			break;
		case 2:
			position = 12;
			break;
		case 3:
			position = 13;
			break;
		case 4:
			position = 14;
			break;
		case 5:
			position = 15;
			break;
		case 6:
			position = 16;
			break;
	}
	break;
case 11:
	switch(diceRoll){
		case 1:
			position = 12;
			break;
		case 2:
			position = 13;
			break;
		case 3:
			position = 14;
			break;
		case 4:
			position = 15;
			break;
		case 5:
			position = 16;
			break;
		case 6:
			position = 17;
			break;
	}
	break;
case 12:
	switch(diceRoll){
		case 1:
			position = 13;
			break;
		case 2:
			position = 14;
			break;
		case 3:
			position = 15;
			break;
		case 4:
			position = 16;
			break;
		case 5:
			position = 17;
			break;
		case 6:
			position = 18;
			break;
	}
	break;
case 13:
	switch(diceRoll){
		case 1:
			position = 14;
			break;
		case 2:
			position = 15;
			break;
		case 3:
			position = 16;
			break;
		case 4:
			position = 17;
			break;
		case 5:
			position = 18;
			break;
		case 6:
			position = 19;
			break;
	}
	break;
case 14:
	switch(diceRoll){
		case 1:
			position = 15;
			break;
		case 2:
			position = 16;
			break;
		case 3:
			position = 17;
			break;
		case 4:
			position = 18;
			break;
		case 5:
			position = 19;
			break;
		case 6:
			position = 20;
			break;
	}
	break;
case 15:
	switch(diceRoll){
		case 1:
			position = 16;
			break;
		case 2:
			position = 17;
			break;
		case 3:
			position = 18;
			break;
		case 4:
			position = 19;
			break;
		case 5:
			position = 20;
			break;
		case 6:
			position = 21;
			break;
	}
	break;
case 16:
	switch(diceRoll){
		case 1:
			position = 17;
			break;
		case 2:
			position = 18;
			break;
		case 3:
			position = 19;
			break;
		case 4:
			position = 20;
			break;
		case 5:
			position = 21;
			break;
		case 6:
			position = 22;
			break;
	}
	break;
case 17:
	switch(diceRoll){
		case 1:
			position = 18;
			break;
		case 2:
			position = 19;
			break;
		case 3:
			position = 20;
			break;
		case 4:
			position = 21;
			break;
		case 5:
			position = 22;
			break;
		case 6:
			position = 23;
			break;
	}
	break;
case 18:
	switch(diceRoll){
		case 1:
			position = 19;
			break;
		case 2:
			position = 20;
			break;
		case 3:
			position = 21;
			break;
		case 4:
			position = 22;
			break;
		case 5:
			position = 23;
			break;
		case 6:
			position = 24;
			break;
	}
	break;
case 19:
	switch(diceRoll){
		case 1:
			position = 20;
			break;
		case 2:
			position = 21;
			break;
		case 3:
			position = 22;
			break;
		case 4:
			position = 23;
			break;
		case 5:
			position = 24;
			break;
		case 6:
			position = 25;
			break;
	}
	break;
case 20:
	switch(diceRoll){
		case 1:
			position = 21;
			break;
		case 2:
			position = 22;
			break;
		case 3:
			position = 23;
			break;
		case 4:
			position = 24;
			break;
		case 5:
			position = 25;
			break;
		case 6:
			position = 26;
			break;
	}
	break;
case 21:
	switch(diceRoll){
		case 1:
			position = 22;
			break;
		case 2:
			position = 23;
			break;
		case 3:
			position = 24;
			break;
		case 4:
			position = 25;
			break;
		case 5:
			position = 26;
			break;
		case 6:
			position = 27;
			break;
	}
	break;
case 22:
	switch(diceRoll){
		case 1:
			position = 23;
			break;
		case 2:
			position = 24;
			break;
		case 3:
			position = 25;
			break;
		case 4:
			position = 26;
			break;
		case 5:
			position = 27;
			break;
		case 6:
			position = 28;
			break;
	}
	break;
case 23:
	switch(diceRoll){
		case 1:
			position = 24;
			break;
		case 2:
			position = 25;
			break;
		case 3:
			position = 26;
			break;
		case 4:
			position = 27;
			break;
		case 5:
			position = 28;
			break;
		case 6:
			position = 29;
			break;
	}
	break;
case 24:
	switch(diceRoll){
		case 1:
			position = 25;
			break;
		case 2:
			position = 26;
			break;
		case 3:
			position = 27;
			break;
		case 4:
			position = 28;
			break;
		case 5:
			position = 29;
			break;
		case 6:
			position = 30;
			break;
	}
	break;
case 25:
	switch(diceRoll){
		case 1:
			position = 26;
			break;
		case 2:
			position = 27;
			break;
		case 3:
			position = 28;
			break;
		case 4:
			position = 29;
			break;
		case 5:
			position = 30;
			break;
		case 6:
			position = 31;
			break;
	}
	break;
case 26:
	switch(diceRoll){
		case 1:
			position = 27;
			break;
		case 2:
			position = 28;
			break;
		case 3:
			position = 29;
			break;
		case 4:
			position = 30;
			break;
		case 5:
			position = 31;
			break;
		case 6:
			position = 32;
			break;
	}
	break;
case 27:
	switch(diceRoll){
		case 1:
			position = 28;
			break;
		case 2:
			position = 29;
			break;
		case 3:
			position = 30;
			break;
		case 4:
			position = 31;
			break;
		case 5:
			position = 32;
			break;
		case 6:
			position = 33;
			break;
	}
	break;
case 28:
	switch(diceRoll){
		case 1:
			position = 29;
			break;
		case 2:
			position = 30;
			break;
		case 3:
			position = 31;
			break;
		case 4:
			position = 32;
			break;
		case 5:
			position = 33;
			break;
		case 6:
			position = 34;
			break;
	}
	break;
case 29:
	switch(diceRoll){
		case 1:
			position = 30;
			break;
		case 2:
			position = 31;
			break;
		case 3:
			position = 32;
			break;
		case 4:
			position = 33;
			break;
		case 5:
			position = 34;
			break;
		case 6:
			position = 35;
			break;
	}
	break;
case 30:
	switch(diceRoll){
		case 1:
			position = 31;
			break;
		case 2:
			position = 32;
			break;
		case 3:
			position = 33;
			break;
		case 4:
			position = 34;
			break;
		case 5:
			position = 35;
			break;
		case 6:
			position = 36;
			break;
	}
	break;
case 31:
	switch(diceRoll){
		case 1:
			position = 32;
			break;
		case 2:
			position = 33;
			break;
		case 3:
			position = 34;
			break;
		case 4:
			position = 35;
			break;
		case 5:
			position = 36;
			break;
		case 6:
			position = 37;
			break;
	}
	break;
case 32:
	switch(diceRoll){
		case 1:
			position = 33;
			break;
		case 2:
			position = 34;
			break;
		case 3:
			position = 35;
			break;
		case 4:
			position = 36;
			break;
		case 5:
			position = 37;
			break;
		case 6:
			position = 38;
			break;
	}
	break;
case 33:
	switch(diceRoll){
		case 1:
			position = 34;
			break;
		case 2:
			position = 35;
			break;
		case 3:
			position = 36;
			break;
		case 4:
			position = 37;
			break;
		case 5:
			position = 38;
			break;
		case 6:
			position = 39;
			break;
	}
	break;
case 34:
	switch(diceRoll){
		case 1:
			position = 35;
			break;
		case 2:
			position = 36;
			break;
		case 3:
			position = 37;
			break;
		case 4:
			position = 38;
			break;
		case 5:
			position = 39;
			break;
		case 6:
			position = 40;
			break;
	}
	break;
case 35:
	switch(diceRoll){
		case 1:
			position = 36;
			break;
		case 2:
			position = 37;
			break;
		case 3:
			position = 38;
			break;
		case 4:
			position = 39;
			break;
		case 5:
			position = 40;
			break;
		case 6:
			position = 41;
			break;
	}
	break;
case 36:
	switch(diceRoll){
		case 1:
			position = 37;
			break;
		case 2:
			position = 38;
			break;
		case 3:
			position = 39;
			break;
		case 4:
			position = 40;
			break;
		case 5:
			position = 41;
			break;
		case 6:
			position = 42;
			break;
	}
	break;
case 37:
	switch(diceRoll){
		case 1:
			position = 38;
			break;
		case 2:
			position = 39;
			break;
		case 3:
			position = 40;
			break;
		case 4:
			position = 41;
			break;
		case 5:
			position = 42;
			break;
		case 6:
			position = 43;
			break;
	}
	break;
case 38:
	switch(diceRoll){
		case 1:
			position = 39;
			break;
		case 2:
			position = 40;
			break;
		case 3:
			position = 41;
			break;
		case 4:
			position = 42;
			break;
		case 5:
			position = 43;
			break;
		case 6:
			position = 44;
			break;
	}
	break;
case 39:
	switch(diceRoll){
		case 1:
			position = 40;
			break;
		case 2:
			position = 41;
			break;
		case 3:
			position = 42;
			break;
		case 4:
			position = 43;
			break;
		case 5:
			position = 44;
			break;
		case 6:
			position = 45;
			break;
	}
	break;
case 40:
	switch(diceRoll){
		case 1:
			position = 41;
			break;
		case 2:
			position = 42;
			break;
		case 3:
			position = 43;
			break;
		case 4:
			position = 44;
			break;
		case 5:
			position = 45;
			break;
		case 6:
			position = 46;
			break;
	}
	break;
case 41:
	switch(diceRoll){
		case 1:
			position = 42;
			break;
		case 2:
			position = 43;
			break;
		case 3:
			position = 44;
			break;
		case 4:
			position = 45;
			break;
		case 5:
			position = 46;
			break;
		case 6:
			position = 47;
			break;
	}
	break;
case 42:
	switch(diceRoll){
		case 1:
			position = 43;
			break;
		case 2:
			position = 44;
			break;
		case 3:
			position = 45;
			break;
		case 4:
			position = 46;
			break;
		case 5:
			position = 47;
			break;
		case 6:
			position = 48;
			break;
	}
	break;
case 43:
	switch(diceRoll){
		case 1:
			position = 44;
			break;
		case 2:
			position = 45;
			break;
		case 3:
			position = 46;
			break;
		case 4:
			position = 47;
			break;
		case 5:
			position = 48;
			break;
		case 6:
			position = 49;
			break;
	}
	break;
case 44:
	switch(diceRoll){
		case 1:
			position = 45;
			break;
		case 2:
			position = 46;
			break;
		case 3:
			position = 47;
			break;
		case 4:
			position = 48;
			break;
		case 5:
			position = 49;
			break;
		case 6:
			position = 50;
			break;
	}
	break;
case 45:
	switch(diceRoll){
		case 1:
			position = 46;
			break;
		case 2:
			position = 47;
			break;
		case 3:
			position = 48;
			break;
		case 4:
			position = 49;
			break;
		case 5:
			position = 50;
			break;
		case 6:
			position = 51;
			break;
	}
	break;
case 46:
	switch(diceRoll){
		case 1:
			position = 47;
			break;
		case 2:
			position = 48;
			break;
		case 3:
			position = 49;
			break;
		case 4:
			position = 50;
			break;
		case 5:
			position = 51;
			break;
		case 6:
			position = 52;
			break;
	}
	break;
case 47:
	switch(diceRoll){
		case 1:
			position = 48;
			break;
		case 2:
			position = 49;
			break;
		case 3:
			position = 50;
			break;
		case 4:
			position = 51;
			break;
		case 5:
			position = 52;
			break;
		case 6:
			position = 53;
			break;
	}
	break;
case 48:
	switch(diceRoll){
		case 1:
			position = 49;
			break;
		case 2:
			position = 50;
			break;
		case 3:
			position = 51;
			break;
		case 4:
			position = 52;
			break;
		case 5:
			position = 53;
			break;
		case 6:
			position = 54;
			break;
	}
	break;
case 49:
	switch(diceRoll){
		case 1:
			position = 50;
			break;
		case 2:
			position = 51;
			break;
		case 3:
			position = 52;
			break;
		case 4:
			position = 53;
			break;
		case 5:
			position = 54;
			break;
		case 6:
			position = 55;
			break;
	}
	break;
case 50:
	switch(diceRoll){
		case 1:
			position = 51;
			break;
		case 2:
			position = 52;
			break;
		case 3:
			position = 53;
			break;
		case 4:
			position = 54;
			break;
		case 5:
			position = 55;
			break;
		case 6:
			position = 56;
			break;
	}
	break;
case 51:
	switch(diceRoll){
		case 1:
			position = 52;
			break;
		case 2:
			position = 53;
			break;
		case 3:
			position = 54;
			break;
		case 4:
			position = 55;
			break;
		case 5:
			position = 56;
			break;
		case 6:
			position = 57;
			break;
	}
	break;
case 52:
	switch(diceRoll){
		case 1:
			position = 53;
			break;
		case 2:
			position = 54;
			break;
		case 3:
			position = 55;
			break;
		case 4:
			position = 56;
			break;
		case 5:
			position = 57;
			break;
		case 6:
			position = 58;
			break;
	}
	break;
case 53:
	switch(diceRoll){
		case 1:
			position = 54;
			break;
		case 2:
			position = 55;
			break;
		case 3:
			position = 56;
			break;
		case 4:
			position = 57;
			break;
		case 5:
			position = 58;
			break;
		case 6:
			position = 59;
			break;
	}
	break;
case 54:
	switch(diceRoll){
		case 1:
			position = 55;
			break;
		case 2:
			position = 56;
			break;
		case 3:
			position = 57;
			break;
		case 4:
			position = 58;
			break;
		case 5:
			position = 59;
			break;
		case 6:
			position = 60;
			break;
	}
	break;
case 55:
	switch(diceRoll){
		case 1:
			position = 56;
			break;
		case 2:
			position = 57;
			break;
		case 3:
			position = 58;
			break;
		case 4:
			position = 59;
			break;
		case 5:
			position = 60;
			break;
		case 6:
			position = 61;
			break;
	}
	break;
case 56:
	switch(diceRoll){
		case 1:
			position = 57;
			break;
		case 2:
			position = 58;
			break;
		case 3:
			position = 59;
			break;
		case 4:
			position = 60;
			break;
		case 5:
			position = 61;
			break;
		case 6:
			position = 62;
			break;
	}
	break;
case 57:
	switch(diceRoll){
		case 1:
			position = 58;
			break;
		case 2:
			position = 59;
			break;
		case 3:
			position = 60;
			break;
		case 4:
			position = 61;
			break;
		case 5:
			position = 62;
			break;
		case 6:
			position = 63;
			break;
	}
	break;
case 58:
	switch(diceRoll){
		case 1:
			position = 59;
			break;
		case 2:
			position = 60;
			break;
		case 3:
			position = 61;
			break;
		case 4:
			position = 62;
			break;
		case 5:
			position = 63;
			break;
		case 6:
			position = 64;
			break;
	}
	break;
case 59:
	switch(diceRoll){
		case 1:
			position = 60;
			break;
		case 2:
			position = 61;
			break;
		case 3:
			position = 62;
			break;
		case 4:
			position = 63;
			break;
		case 5:
			position = 64;
			break;
		case 6:
			position = 65;
			break;
	}
	break;
case 60:
	switch(diceRoll){
		case 1:
			position = 61;
			break;
		case 2:
			position = 62;
			break;
		case 3:
			position = 63;
			break;
		case 4:
			position = 64;
			break;
		case 5:
			position = 65;
			break;
		case 6:
			position = 66;
			break;
	}
	break;
case 61:
	switch(diceRoll){
		case 1:
			position = 62;
			break;
		case 2:
			position = 63;
			break;
		case 3:
			position = 64;
			break;
		case 4:
			position = 65;
			break;
		case 5:
			position = 66;
			break;
		case 6:
			position = 67;
			break;
	}
	break;
case 62:
	switch(diceRoll){
		case 1:
			position = 63;
			break;
		case 2:
			position = 64;
			break;
		case 3:
			position = 65;
			break;
		case 4:
			position = 66;
			break;
		case 5:
			position = 67;
			break;
		case 6:
			position = 68;
			break;
	}
	break;
case 63:
	switch(diceRoll){
		case 1:
			position = 64;
			break;
		case 2:
			position = 65;
			break;
		case 3:
			position = 66;
			break;
		case 4:
			position = 67;
			break;
		case 5:
			position = 68;
			break;
		case 6:
			position = 69;
			break;
	}
	break;
case 64:
	switch(diceRoll){
		case 1:
			position = 65;
			break;
		case 2:
			position = 66;
			break;
		case 3:
			position = 67;
			break;
		case 4:
			position = 68;
			break;
		case 5:
			position = 69;
			break;
		case 6:
			position = 70;
			break;
	}
	break;
case 65:
	switch(diceRoll){
		case 1:
			position = 66;
			break;
		case 2:
			position = 67;
			break;
		case 3:
			position = 68;
			break;
		case 4:
			position = 69;
			break;
		case 5:
			position = 70;
			break;
		case 6:
			position = 71;
			break;
	}
	break;
case 66:
	switch(diceRoll){
		case 1:
			position = 67;
			break;
		case 2:
			position = 68;
			break;
		case 3:
			position = 69;
			break;
		case 4:
			position = 70;
			break;
		case 5:
			position = 71;
			break;
		case 6:
			position = 72;
			break;
	}
	break;
case 67:
	switch(diceRoll){
		case 1:
			position = 68;
			break;
		case 2:
			position = 69;
			break;
		case 3:
			position = 70;
			break;
		case 4:
			position = 71;
			break;
		case 5:
			position = 72;
			break;
		case 6:
			position = 73;
			break;
	}
	break;
case 68:
	switch(diceRoll){
		case 1:
			position = 69;
			break;
		case 2:
			position = 70;
			break;
		case 3:
			position = 71;
			break;
		case 4:
			position = 72;
			break;
		case 5:
			position = 73;
			break;
		case 6:
			position = 74;
			break;
	}
	break;
case 69:
	switch(diceRoll){
		case 1:
			position = 70;
			break;
		case 2:
			position = 71;
			break;
		case 3:
			position = 72;
			break;
		case 4:
			position = 73;
			break;
		case 5:
			position = 74;
			break;
		case 6:
			position = 75;
			break;
	}
	break;
case 70:
	switch(diceRoll){
		case 1:
			position = 71;
			break;
		case 2:
			position = 72;
			break;
		case 3:
			position = 73;
			break;
		case 4:
			position = 74;
			break;
		case 5:
			position = 75;
			break;
		case 6:
			position = 76;
			break;
	}
	break;
case 71:
	switch(diceRoll){
		case 1:
			position = 72;
			break;
		case 2:
			position = 73;
			break;
		case 3:
			position = 74;
			break;
		case 4:
			position = 75;
			break;
		case 5:
			position = 76;
			break;
		case 6:
			position = 77;
			break;
	}
	break;
case 72:
	switch(diceRoll){
		case 1:
			position = 73;
			break;
		case 2:
			position = 74;
			break;
		case 3:
			position = 75;
			break;
		case 4:
			position = 76;
			break;
		case 5:
			position = 77;
			break;
		case 6:
			position = 78;
			break;
	}
	break;
case 73:
	switch(diceRoll){
		case 1:
			position = 74;
			break;
		case 2:
			position = 75;
			break;
		case 3:
			position = 76;
			break;
		case 4:
			position = 77;
			break;
		case 5:
			position = 78;
			break;
		case 6:
			position = 79;
			break;
	}
	break;
case 74:
	switch(diceRoll){
		case 1:
			position = 75;
			break;
		case 2:
			position = 76;
			break;
		case 3:
			position = 77;
			break;
		case 4:
			position = 78;
			break;
		case 5:
			position = 79;
			break;
		case 6:
			position = 80;
			break;
	}
	break;
case 75:
	switch(diceRoll){
		case 1:
			position = 76;
			break;
		case 2:
			position = 77;
			break;
		case 3:
			position = 78;
			break;
		case 4:
			position = 79;
			break;
		case 5:
			position = 80;
			break;
		case 6:
			position = 81;
			break;
	}
	break;
case 76:
	switch(diceRoll){
		case 1:
			position = 77;
			break;
		case 2:
			position = 78;
			break;
		case 3:
			position = 79;
			break;
		case 4:
			position = 80;
			break;
		case 5:
			position = 81;
			break;
		case 6:
			position = 82;
			break;
	}
	break;
case 77:
	switch(diceRoll){
		case 1:
			position = 78;
			break;
		case 2:
			position = 79;
			break;
		case 3:
			position = 80;
			break;
		case 4:
			position = 81;
			break;
		case 5:
			position = 82;
			break;
		case 6:
			position = 83;
			break;
	}
	break;
case 78:
	switch(diceRoll){
		case 1:
			position = 79;
			break;
		case 2:
			position = 80;
			break;
		case 3:
			position = 81;
			break;
		case 4:
			position = 82;
			break;
		case 5:
			position = 83;
			break;
		case 6:
			position = 84;
			break;
	}
	break;
case 79:
	switch(diceRoll){
		case 1:
			position = 80;
			break;
		case 2:
			position = 81;
			break;
		case 3:
			position = 82;
			break;
		case 4:
			position = 83;
			break;
		case 5:
			position = 84;
			break;
		case 6:
			position = 85;
			break;
	}
	break;
case 80:
	switch(diceRoll){
		case 1:
			position = 81;
			break;
		case 2:
			position = 82;
			break;
		case 3:
			position = 83;
			break;
		case 4:
			position = 84;
			break;
		case 5:
			position = 85;
			break;
		case 6:
			position = 86;
			break;
	}
	break;
case 81:
	switch(diceRoll){
		case 1:
			position = 82;
			break;
		case 2:
			position = 83;
			break;
		case 3:
			position = 84;
			break;
		case 4:
			position = 85;
			break;
		case 5:
			position = 86;
			break;
		case 6:
			position = 87;
			break;
	}
	break;
case 82:
	switch(diceRoll){
		case 1:
			position = 83;
			break;
		case 2:
			position = 84;
			break;
		case 3:
			position = 85;
			break;
		case 4:
			position = 86;
			break;
		case 5:
			position = 87;
			break;
		case 6:
			position = 88;
			break;
	}
	break;
case 83:
	switch(diceRoll){
		case 1:
			position = 84;
			break;
		case 2:
			position = 85;
			break;
		case 3:
			position = 86;
			break;
		case 4:
			position = 87;
			break;
		case 5:
			position = 88;
			break;
		case 6:
			position = 89;
			break;
	}
	break;
case 84:
	switch(diceRoll){
		case 1:
			position = 85;
			break;
		case 2:
			position = 86;
			break;
		case 3:
			position = 87;
			break;
		case 4:
			position = 88;
			break;
		case 5:
			position = 89;
			break;
		case 6:
			position = 90;
			break;
	}
	break;
case 85:
	switch(diceRoll){
		case 1:
			position = 86;
			break;
		case 2:
			position = 87;
			break;
		case 3:
			position = 88;
			break;
		case 4:
			position = 89;
			break;
		case 5:
			position = 90;
			break;
		case 6:
			position = 91;
			break;
	}
	break;
case 86:
	switch(diceRoll){
		case 1:
			position = 87;
			break;
		case 2:
			position = 88;
			break;
		case 3:
			position = 89;
			break;
		case 4:
			position = 90;
			break;
		case 5:
			position = 91;
			break;
		case 6:
			position = 92;
			break;
	}
	break;
case 87:
	switch(diceRoll){
		case 1:
			position = 88;
			break;
		case 2:
			position = 89;
			break;
		case 3:
			position = 90;
			break;
		case 4:
			position = 91;
			break;
		case 5:
			position = 92;
			break;
		case 6:
			position = 93;
			break;
	}
	break;
case 88:
	switch(diceRoll){
		case 1:
			position = 89;
			break;
		case 2:
			position = 90;
			break;
		case 3:
			position = 91;
			break;
		case 4:
			position = 92;
			break;
		case 5:
			position = 93;
			break;
		case 6:
			position = 94;
			break;
	}
	break;
case 89:
	switch(diceRoll){
		case 1:
			position = 90;
			break;
		case 2:
			position = 91;
			break;
		case 3:
			position = 92;
			break;
		case 4:
			position = 93;
			break;
		case 5:
			position = 94;
			break;
		case 6:
			position = 95;
			break;
	}
	break;
case 90:
	switch(diceRoll){
		case 1:
			position = 91;
			break;
		case 2:
			position = 92;
			break;
		case 3:
			position = 93;
			break;
		case 4:
			position = 94;
			break;
		case 5:
			position = 95;
			break;
		case 6:
			position = 96;
			break;
	}
	break;
case 91:
	switch(diceRoll){
		case 1:
			position = 92;
			break;
		case 2:
			position = 93;
			break;
		case 3:
			position = 94;
			break;
		case 4:
			position = 95;
			break;
		case 5:
			position = 96;
			break;
		case 6:
			position = 97;
			break;
	}
	break;
case 92:
	switch(diceRoll){
		case 1:
			position = 93;
			break;
		case 2:
			position = 94;
			break;
		case 3:
			position = 95;
			break;
		case 4:
			position = 96;
			break;
		case 5:
			position = 97;
			break;
		case 6:
			position = 98;
			break;
	}
	break;
case 93:
	switch(diceRoll){
		case 1:
			position = 94;
			break;
		case 2:
			position = 95;
			break;
		case 3:
			position = 96;
			break;
		case 4:
			position = 97;
			break;
		case 5:
			position = 98;
			break;
		case 6:
			position = 99;
			break;
	}
	break;
case 94:
	switch(diceRoll){
		case 1:
			position = 95;
			break;
		case 2:
			position = 96;
			break;
		case 3:
			position = 97;
			break;
		case 4:
			position = 98;
			break;
		case 5:
			position = 99;
			break;
		case 6:
			position = 100;
			break;
	}
	break;
case 95:
	switch(diceRoll){
		case 1:
			position = 96;
			break;
		case 2:
			position = 97;
			break;
		case 3:
			position = 98;
			break;
		case 4:
			position = 99;
			break;
		case 5:
			position = 100;
			break;
		case 6:
			position = 101;
			break;
	}
	break;
case 96:
	switch(diceRoll){
		case 1:
			position = 97;
			break;
		case 2:
			position = 98;
			break;
		case 3:
			position = 99;
			break;
		case 4:
			position = 100;
			break;
		case 5:
			position = 101;
			break;
		case 6:
			position = 102;
			break;
	}
	break;
case 97:
	switch(diceRoll){
		case 1:
			position = 98;
			break;
		case 2:
			position = 99;
			break;
		case 3:
			position = 100;
			break;
		case 4:
			position = 101;
			break;
		case 5:
			position = 102;
			break;
		case 6:
			position = 103;
			break;
	}
	break;
case 98:
	switch(diceRoll){
		case 1:
			position = 99;
			break;
		case 2:
			position = 100;
			break;
		case 3:
			position = 101;
			break;
		case 4:
			position = 102;
			break;
		case 5:
			position = 103;
			break;
		case 6:
			position = 104;
			break;
	}
	break;
case 99:
	switch(diceRoll){
		case 1:
			position = 100;
			break;
		case 2:
			position = 101;
			break;
		case 3:
			position = 102;
			break;
		case 4:
			position = 103;
			break;
		case 5:
			position = 104;
			break;
		case 6:
			position = 105;
			break;
	}
	break;
case 100:
	switch(diceRoll){
		case 1:
			position = 101;
			break;
		case 2:
			position = 102;
			break;
		case 3:
			position = 103;
			break;
		case 4:
			position = 104;
			break;
		case 5:
			position = 105;
			break;
		case 6:
			position = 106;
			break;
	}
	break;

  }
    console.log(`Player position is ${position}`);
    
}


play(1,2);

