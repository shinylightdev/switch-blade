import { getFileList } from './common/files.js'

/*
npm i moment
npm i glob
*/

async function main() {

  const result = await getFileList("**/*sa.js");
  
  result.forEach(file => {
    console.log(file);
  });
  
}

// Giddy up
main();