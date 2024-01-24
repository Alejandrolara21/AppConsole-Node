import fs from 'fs';
import {SaveFile} from './save-file.use-case';


describe('save-file.use-case.ts', () => {

    // afterEach(() => {
    //     fs.rmSync('outputs', {recursive: true});
    // });
    
    test('should be the default values ', () => {
        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';
        const options = {
            fileContent: 'test content'
        }

        const result = saveFile.execute(options);
        const checkFile = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8'});


        expect(result).toBeTruthy();
        expect(checkFile).toBe(true);
        expect(fileContent).toBe(options.fileContent);
    });

    test('should be save File with custom values ', () => {
        const options = {
            fileContent: 'custom content',
            fileDestination: 'custom-outputs/file-destination',
            fileName: 'custom-table-name'
        }
        const filePath = `${options.fileDestination}/${options.fileName}.txt`;


        const saveFile = new SaveFile();

        const result = saveFile.execute(options);
        const checkFile = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8'});

        expect(result).toBeTruthy();
        expect(checkFile).toBeTruthy();
        expect(fileContent).toBe(options.fileContent);
    });
});