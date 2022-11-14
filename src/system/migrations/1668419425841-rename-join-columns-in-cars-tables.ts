import { MigrationInterface, QueryRunner } from 'typeorm';

export class renameJoinColumnsInCarsTables1668419425841
  implements MigrationInterface
{
  name = 'renameJoinColumnsInCarsTables1668419425841';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "car" DROP CONSTRAINT "FK_728700aee449838965f5cf87cee"`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" DROP CONSTRAINT "FK_c40870af5230c4d117729c8299f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" DROP CONSTRAINT "FK_73996ddb5f36521d50d8a5220b7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "model" DROP CONSTRAINT "FK_7996700d600159cdf20dc0d0816"`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" RENAME COLUMN "brandId" TO "brand_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" RENAME COLUMN "modelId" TO "model_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" RENAME COLUMN "colorId" TO "color_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "model" RENAME COLUMN "brandId" TO "brand_id"`,
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
      `ALTER TABLE "car" RENAME COLUMN "brand_id" TO "brandId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" RENAME COLUMN "model_id" TO "modelId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" RENAME COLUMN "color_id" TO "colorId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "model" RENAME COLUMN "brand_id" TO "brandId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "model" ADD CONSTRAINT "FK_7996700d600159cdf20dc0d0816" FOREIGN KEY ("brandId") REFERENCES "brand"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" ADD CONSTRAINT "FK_73996ddb5f36521d50d8a5220b7" FOREIGN KEY ("colorId") REFERENCES "color"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" ADD CONSTRAINT "FK_c40870af5230c4d117729c8299f" FOREIGN KEY ("modelId") REFERENCES "model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" ADD CONSTRAINT "FK_728700aee449838965f5cf87cee" FOREIGN KEY ("brandId") REFERENCES "brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
