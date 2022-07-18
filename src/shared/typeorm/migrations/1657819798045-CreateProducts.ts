import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1657819798045 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'products',
            columns:[
                {
                    name: "id",
                    type: 'int',
                    isPrimary: true
                },{
                    name:'name',
                    type:'varchar'
                },
                {
                    name:'price',
                    type:'decimal',
                    precision:10,
                    scale:2
                },
                {
                    name:'quantity',
                    type:'int'
                },
                {
                    name: 'created_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                  }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products')
    }

}
