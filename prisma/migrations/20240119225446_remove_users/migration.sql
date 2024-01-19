/*
  Warnings:

  - You are about to drop the column `auth_id` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `auth_id` on the `Shelf` table. All the data in the column will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Shelf` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_auth_id_fkey";

-- DropForeignKey
ALTER TABLE "Shelf" DROP CONSTRAINT "Shelf_auth_id_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "auth_id",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Shelf" DROP COLUMN "auth_id",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "users";

-- DropEnum
DROP TYPE "Role";
