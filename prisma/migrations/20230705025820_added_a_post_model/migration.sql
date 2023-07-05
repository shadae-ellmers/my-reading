-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CurrentBooks" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "author" TEXT,
    "cover" TEXT,

    CONSTRAINT "CurrentBooks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReadBooks" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "author" TEXT,
    "cover" TEXT,
    "dateRead" TEXT,
    "rating" TEXT,

    CONSTRAINT "ReadBooks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TbrBooks" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "author" TEXT,
    "cover" TEXT,

    CONSTRAINT "CurrentBooks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
