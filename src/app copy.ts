import fs from 'fs';

const base:number = 5;
let data:string = `
    ===========================
            TABLA DEL ${base}
    ==========================\n
`;
for (let i = 1; i <= 10; i++) {
    data += `${base} x ${i} = ${base*i} \n`;
}

const outputPath = `outputs`;

fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`,data);