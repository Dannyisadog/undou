/*
  Warnings:

  - You are about to drop the column `date` on the `Activity` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fee` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "date",
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fee" INTEGER NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;
