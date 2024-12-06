/*
  Warnings:

  - You are about to drop the column `message` on the `Debt` table. All the data in the column will be lost.
  - You are about to drop the `Creditor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Debtor` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[debtor_id,creditor_id]` on the table `Debt` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Debt" DROP CONSTRAINT "Debt_creditor_id_fkey";

-- DropForeignKey
ALTER TABLE "Debt" DROP CONSTRAINT "Debt_debtor_id_fkey";

-- AlterTable
ALTER TABLE "Debt" DROP COLUMN "message",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Creditor";

-- DropTable
DROP TABLE "Debtor";

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Messages" (
    "id" TEXT NOT NULL,
    "description" VARCHAR(256) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sender_id" TEXT NOT NULL,
    "debt_id" TEXT NOT NULL,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Debt_debtor_id_creditor_id_key" ON "Debt"("debtor_id", "creditor_id");

-- AddForeignKey
ALTER TABLE "Debt" ADD CONSTRAINT "Debt_debtor_id_fkey" FOREIGN KEY ("debtor_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Debt" ADD CONSTRAINT "Debt_creditor_id_fkey" FOREIGN KEY ("creditor_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_debt_id_fkey" FOREIGN KEY ("debt_id") REFERENCES "Debt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
