import fs from 'fs';

const gen = fs.createWriteStream('generated.txt');


for(let i = 1; i <= 100; i++){
    gen.write(`case ${i}:\n`);
    gen.write(`\tswitch(diceRoll){\n`);
        for(let j =1; j<=6;j++){
            gen.write(`\t\tcase ${j}:\n`);
            gen.write(`\t\t\tposition = ${i+j};\n`);
            gen.write(`\t\t\tbreak;\n`);
        }
    gen.write(`\t}\n`);
    gen.write('\tbreak;\n');
}
