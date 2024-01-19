
import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from './presentation/server-app';

(async () => {
    await main();
})();

async function main(){
    const {b:base, l:limit, s:showTable, n:fileName, d:destination} = yarg;
    ServerApp.run({base, limit, showTable, fileName, destination});

    // const {b:base, l:limit, s:show } = yarg;
    
    // let data:string = `
    //     ===========================
    //             TABLA DEL ${base}
    //     ==========================\n
    // `;
    // for (let i = 1; i <= limit; i++) {
    //     data += `${base} x ${i} = ${base*i} \n`;
    // }
    
    // const outputPath = `outputs`;
    
    // fs.mkdirSync(outputPath, {recursive: true});
    // fs.writeFileSync(`${outputPath}/tabla-${base}.txt`,data);
    // if(show){
    //     console.log(data);
    // }
    
}

