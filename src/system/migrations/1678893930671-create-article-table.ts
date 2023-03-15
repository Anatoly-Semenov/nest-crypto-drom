import { MigrationInterface, QueryRunner } from 'typeorm';

export class createArticleTable1678893930671 implements MigrationInterface {
  name = 'createArticleTable1678893930671';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "article" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "sub_title" character varying, "content" character varying, "user_id" integer NOT NULL, CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ADD CONSTRAINT "FK_fae0bad5f06a58f3d2b68e37f11" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "article" DROP CONSTRAINT "FK_fae0bad5f06a58f3d2b68e37f11"`,
    );
    await queryRunner.query(`DROP TABLE "article"`);
  }
}
