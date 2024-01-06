/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Shelf` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Shelf_title_key" ON "Shelf"("title");
