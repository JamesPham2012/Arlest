import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1645095601424 implements MigrationInterface {
    name = 'InitialMigration1645095601424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "BookingOrderTable" ADD "TestColumn2" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "BookingOrderTable" DROP COLUMN "TestColumn2"`);
    }

}
