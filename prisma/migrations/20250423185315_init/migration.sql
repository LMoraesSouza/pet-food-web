-- CreateTable
CREATE TABLE "Pets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "birth" DATETIME NOT NULL,
    "dailyFoodAmount" REAL NOT NULL,
    "lastMeal" REAL NOT NULL DEFAULT 0,
    "weight" REAL NOT NULL DEFAULT 0,
    "foodName" TEXT NOT NULL DEFAULT '',
    "feedingTimes" TEXT NOT NULL DEFAULT '[]',
    "lastFeedingDateTime" DATETIME
);

-- CreateTable
CREATE TABLE "FoodTime" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "time" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "emailVerificationToken" TEXT,
    "resetToken" TEXT,
    "resetTokenExpiry" DATETIME,
    "linkingCode" TEXT
);

-- CreateTable
CREATE TABLE "UserPets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "petId" TEXT NOT NULL,
    CONSTRAINT "UserPets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserPets_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_linkingCode_key" ON "User"("linkingCode");

-- CreateIndex
CREATE UNIQUE INDEX "UserPets_userId_petId_key" ON "UserPets"("userId", "petId");
