const fs = require('fs');
const path = require('path');
const { argv } = require('yargs');

const { inputFolder, outputFile } = argv;

const generateIconsIndex = new Promise((resolve, reject) => {
  let fileContent = '';

  // Read directory and search for svg files
  fs.readdir(inputFolder, (error, files) => {
    if (error) {
      console.error({ error });
    }

    try {
      const svgFiles = files.filter((el) => path.extname(el) === '.svg');

      const lowerCaseFileNames = [];
      const exportedFiles = [];
      const fileNames = [];

      fileContent += `// GENERATED FILE, DON\'T MANUALLY EDIT THIS\n\n`;

      fileContent += `import dynamic from 'next/dynamic'\n\n`;
      svgFiles.forEach((file) => {
        const fileName = `Icon${toPascalCase(file).replace(/\.[^/.]+$/, '')}`;

        // fileContent += `import ${fileName} from '@/assets/icons/custom/${file}';\n`;
        fileContent += `const ${fileName} = dynamic(() => import('@/assets/icons/custom/${file}'));\n`;

        lowerCaseFileNames.push(`${file.toLowerCase().replace('.svg', '')}`);
        exportedFiles.push(`'${file.toLowerCase().replace('.svg', '')}': ${fileName}`);
        fileNames.push(fileName);
      });

      fileContent += `\n export const icons = {\n${exportedFiles.join(',\n ')} };\n`;
      fileContent += `\n export {\n${fileNames.join(',\n ')} };`;
      console.log(lowerCaseFileNames.join(', '));
    } catch (error) {
      console.error({ error });

      reject(error);

      return;
    }

    try {
      // Write to new file that can be used for importing
      fileContent &&
        fs.writeFile(outputFile, fileContent, () => {
          resolve();
        });
    } catch (error) {
      reject(error);
    }
  });
});

function toPascalCase(text) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(text) {
  return text.replace(/-/, '').toUpperCase();
}

function _init() {
  generateIconsIndex
    .then(() => {
      console.log('File is created successfully');
    })
    .catch((error) => {
      console.error('Error: Something went wrong: ', { error });
    });
}

if (argv.inputFolder && argv.outputFile) {
  _init();
} else {
  console.warn('No inputFolder of outputFile specified');
}
