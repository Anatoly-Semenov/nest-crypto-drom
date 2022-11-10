import { MigrationInterface, QueryRunner } from 'typeorm';

export class createCarsTables1668074651808 implements MigrationInterface {
  name = 'createCarsTables1668074651808';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "color" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "hex" character varying NOT NULL, CONSTRAINT "PK_d15e531d60a550fbf23e1832343" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "car" ("id" SERIAL NOT NULL, "brand_id" integer NOT NULL, "model_id" integer NOT NULL, "color_id" integer NOT NULL, "year" integer NOT NULL, "hp" integer NOT NULL, "price_rub" integer, "img_preview" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_55bbdeb14e0b1d7ab417d11ee6d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "model" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "brand_id" integer NOT NULL, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d6df271bba301d5cc79462912a4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "brand" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a5d20765ddd942eb5de4eee2d7f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" ADD CONSTRAINT "FK_cbaa76a620e6e21773085a96bf1" FOREIGN KEY ("brand_id") REFERENCES "brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" ADD CONSTRAINT "FK_525071eea12c671d67e35a5cbc8" FOREIGN KEY ("model_id") REFERENCES "model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" ADD CONSTRAINT "FK_50b0c15b9716171fd9d769fac17" FOREIGN KEY ("color_id") REFERENCES "color"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "model" ADD CONSTRAINT "FK_1c9fa70a2a9da326c507e3fead5" FOREIGN KEY ("brand_id") REFERENCES "brand"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "model" DROP CONSTRAINT "FK_1c9fa70a2a9da326c507e3fead5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" DROP CONSTRAINT "FK_50b0c15b9716171fd9d769fac17"`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" DROP CONSTRAINT "FK_525071eea12c671d67e35a5cbc8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" DROP CONSTRAINT "FK_cbaa76a620e6e21773085a96bf1"`,
    );
    await queryRunner.query(`DROP TABLE "brand"`);
    await queryRunner.query(`DROP TABLE "model"`);
    await queryRunner.query(`DROP TABLE "car"`);
    await queryRunner.query(`DROP TABLE "color"`);
  }
}
