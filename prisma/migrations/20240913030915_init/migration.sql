-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "area" TEXT,
ADD COLUMN     "city" TEXT,
ALTER COLUMN "is_active" SET DEFAULT true;
