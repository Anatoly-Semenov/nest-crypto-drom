import { MigrationInterface, QueryRunner } from 'typeorm';

export class setCarsJoinColumnsNotNull1668424346021
  implements MigrationInterface
{
  name = 'setCarsJoinColumnsNotNull1668424346021';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "phone_number" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" DROP CONSTRAINT "FK_cbaa76a620e6e21773085a96bf1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" DROP CONSTRAINT "FK_525071eea12c671d67e35a5cbc8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" DROP CONSTRAINT "FK_50b0c15b9716171fd9d769fac17"`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" ALTER COLUMN "brand_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" ALTER COLUMN "model_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" ALTER COLUMN "color_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "model" DROP CONSTRAINT "FK_1c9fa70a2a9da326c507e3fead5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "model" ALTER COLUMN "brand_id" SET NOT NULL`,
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
    await queryRunner.query(
      `ALTER TABLE "model" ALTER COLUMN "brand_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "model" ADD CONSTRAINT "FK_1c9fa70a2a9da326c507e3fead5" FOREIGN KEY ("brand_id") REFERENCES "brand"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" ALTER COLUMN "color_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" ALTER COLUMN "model_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" ALTER COLUMN "brand_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" ADD CONSTRAINT "FK_50b0c15b9716171fd9d769fac17" FOREIGN KEY ("color_id") REFERENCES "color"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" ADD CONSTRAINT "FK_525071eea12c671d67e35a5cbc8" FOREIGN KEY ("model_id") REFERENCES "model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" ADD CONSTRAINT "FK_cbaa76a620e6e21773085a96bf1" FOREIGN KEY ("brand_id") REFERENCES "brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
