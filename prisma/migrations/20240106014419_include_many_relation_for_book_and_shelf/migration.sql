/*
  Warnings:

  - You are about to drop the `_BookToShelf` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `shelfId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_BookToShelf" DROP CONSTRAINT "_BookToShelf_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToShelf" DROP CONSTRAINT "_BookToShelf_B_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "shelfId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_BookToShelf";

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_shelfId_fkey" FOREIGN KEY ("shelfId") REFERENCES "Shelf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
