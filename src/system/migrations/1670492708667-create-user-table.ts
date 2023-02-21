import { MigrationInterface, QueryRunner } from 'typeorm';

export class createUserTable1670492708667 implements MigrationInterface {
  name = 'createUserTable1670492708667';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL, "password" character varying, "name" character varying, "phone_number" character varying, "email" character varying, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
