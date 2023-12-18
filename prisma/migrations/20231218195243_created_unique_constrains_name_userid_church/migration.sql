/*
  Warnings:

  - A unique constraint covering the columns `[name,user_id]` on the table `Church` will be added. If there are existing duplicate values, this will fail.
  - Made the column `user_id` on table `Church` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Church" DROP CONSTRAINT "Church_user_id_fkey";

-- AlterTable
ALTER TABLE "Church" ALTER COLUMN "user_id" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Church_name_user_id_key" ON "Church"("name", "user_id");

-- AddForeignKey
ALTER TABLE "Church" ADD CONSTRAINT "Church_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
