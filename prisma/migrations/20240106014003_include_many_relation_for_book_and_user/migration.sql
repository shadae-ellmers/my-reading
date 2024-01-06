/*
  Warnings:

  - You are about to drop the `_BookToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `auth_id` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_BookToUser" DROP CONSTRAINT "_BookToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToUser" DROP CONSTRAINT "_BookToUser_B_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "auth_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "_BookToUser";

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_auth_id_fkey" FOREIGN KEY ("auth_id") REFERENCES "users"("auth_id") ON DELETE RESTRICT ON UPDATE CASCADE;
