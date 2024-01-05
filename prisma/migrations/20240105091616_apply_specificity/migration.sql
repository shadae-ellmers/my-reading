/*
  Warnings:

  - You are about to drop the column `user_id` on the `Shelf` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[auth_id]` on the table `Shelf` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[auth_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `auth_id` to the `Shelf` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Shelf" DROP CONSTRAINT "Shelf_user_id_fkey";

-- AlterTable
ALTER TABLE "Shelf" DROP COLUMN "user_id",
ADD COLUMN     "auth_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Shelf_auth_id_key" ON "Shelf"("auth_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_auth_id_key" ON "users"("auth_id");

-- AddForeignKey
ALTER TABLE "Shelf" ADD CONSTRAINT "Shelf_auth_id_fkey" FOREIGN KEY ("auth_id") REFERENCES "users"("auth_id") ON DELETE RESTRICT ON UPDATE CASCADE;
