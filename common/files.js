import glob from 'glob';
//const glob = require("glob");

/**
 * Returns array of files based on glob string pattern passed in.
 *
 * @param {*} globPattern
 * @return {*} 
 */
function getFileList(globPattern) {
  return new Promise(resolve => {
    glob(globPattern, null, function (er, files) {
      resolve(files);
    });
  });
}

export { getFileList };
