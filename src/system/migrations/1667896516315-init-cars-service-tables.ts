import { MigrationInterface, QueryRunner } from 'typeorm';

export class initCarsServiceTables1667896516315 implements MigrationInterface {
  name = 'initCarsServiceTables1667896516315';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "brand" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a5d20765ddd942eb5de4eee2d7f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "model" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "brand_id" integer NOT NULL, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "brandIdId" integer, CONSTRAINT "PK_d6df271bba301d5cc79462912a4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "color" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "hex" character varying NOT NULL, CONSTRAINT "PK_d15e531d60a550fbf23e1832343" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "car" ("id" SERIAL NOT NULL, "brand_id" integer NOT NULL, "model_id" integer NOT NULL, "year" integer NOT NULL, "hp" integer NOT NULL, "color_id" integer NOT NULL, "price_rub" integer, "img_preview" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_55bbdeb14e0b1d7ab417d11ee6d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "model" ADD CONSTRAINT "FK_68d84e8f45076e71ee09d401be3" FOREIGN KEY ("brandIdId") REFERENCES "brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "model" DROP CONSTRAINT "FK_68d84e8f45076e71ee09d401be3"`,
    );
    await queryRunner.query(`DROP TABLE "car"`);
    await queryRunner.query(`DROP TABLE "color"`);
    await queryRunner.query(`DROP TABLE "model"`);
    await queryRunner.query(`DROP TABLE "brand"`);
  }
}
