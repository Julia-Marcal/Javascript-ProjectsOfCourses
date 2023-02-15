const fs = require('fs').promises;
const path = require('path');

//fs é usado para manuseio e configurações de pastas e arquivos

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir)
    walk(files, rootDir);
}
//Função para andar sobre o diretório que foi colocado na função

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath);

        if(stats.isDirectory()){
            readdir(fileFullPath)
            continue
            //se a pasta tiver coisa dentro printa
        }

        if(/\.git/g.test(fileFullPath)) continue
        //se a pasta for git ignora
        if(/node_modules/g.test(fileFullPath)) continue;


        console.log(fileFullPath)
        //fala se o diretório "filho" é um diretório/pasta ou um arquivo
    }
}

readdir('/')