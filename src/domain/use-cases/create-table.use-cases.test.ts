import {CreateTable} from './create-table.use-cases';


describe('create-table.use-cases.ts', () => { 
    test('should be the default values ', () => {



        const createTable = new CreateTable();
        const table = createTable.execute({
            base: 12
        });
        const rows = table.split('\n').length;

        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('12 x 1 = 12')
        expect(table).toContain('12 x 10 = 120')
        expect(rows).toBe(10)

    });

    test('should be create table with custom values ', () => {
        const options ={
            base: 1,
            limit: 20
        }

        const createTable = new CreateTable();
        const table = createTable.execute(options);
        const rows = table.split('\n').length;

        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain(`${options.base} x 1 = ${options.base}`);
        expect(table).toContain(`${options.base} x ${options.limit} = ${options.base * options.limit}`);
        expect(rows).toBe(options.limit);
    });
});