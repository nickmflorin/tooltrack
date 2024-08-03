-- CreateEnum
CREATE TYPE "ElementAttribute" AS ENUM ('HREF', 'SRC', 'VALUE', 'DATA_GA_PRODUCT_NAME');

-- CreateEnum
CREATE TYPE "ScrapingErrorCode" AS ENUM ('MISSING_ATTRIBUTE', 'INVALID_ATTRIBUTE', 'MISSING_TEXT', 'INVALID_TEXT', 'NONUNIQUE_TEXT', 'MISSING_ELEMENT', 'NONUNIQUE_ELEMENT', 'HTTP_NETWORK', 'HTTP_CLIENT', 'HTTP_SERIALIZATION');

-- CreateEnum
CREATE TYPE "ProductRecordDataField" AS ENUM ('PRICE', 'RAW_PRICE', 'STATUS');

-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('OUT_OF_STOCK', 'IN_STOCK', 'AVAILABLE_FOR_BACKORDER', 'NOT_LISTED');

-- CreateEnum
CREATE TYPE "ProductCategory" AS ENUM ('HandTools');

-- CreateEnum
CREATE TYPE "ProductSubCategory" AS ENUM ('HandPlanes', 'Saws', 'Chisels', 'Spokeshaves', 'GreenWoodworking', 'AccessoryTools');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "clerkId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "profileImageUrl" TEXT,
    "emailAddress" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HttpNetworkErrorData" (
    "id" UUID NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "HttpNetworkErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HttpSerializationErrorData" (
    "id" UUID NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "HttpSerializationErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HttpClientErrorData" (
    "id" UUID NOT NULL,
    "url" TEXT NOT NULL,
    "status" INTEGER NOT NULL,

    CONSTRAINT "HttpClientErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MissingAttributeErrorData" (
    "id" UUID NOT NULL,
    "attribute" "ElementAttribute" NOT NULL,
    "parentHtml" TEXT,

    CONSTRAINT "MissingAttributeErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvalidAttributeErrorData" (
    "id" UUID NOT NULL,
    "attribute" "ElementAttribute" NOT NULL,
    "parentHtml" TEXT,
    "value" TEXT NOT NULL,

    CONSTRAINT "InvalidAttributeErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvalidTextErrorData" (
    "id" UUID NOT NULL,
    "parentHtml" TEXT,
    "value" TEXT NOT NULL,

    CONSTRAINT "InvalidTextErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MissingTextErrorData" (
    "id" UUID NOT NULL,
    "parentHtml" TEXT,

    CONSTRAINT "MissingTextErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NonUniqueTextErrorData" (
    "id" UUID NOT NULL,
    "parentHtml" TEXT,

    CONSTRAINT "NonUniqueTextErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MissingElementErrorData" (
    "id" UUID NOT NULL,
    "parentHtml" TEXT,
    "selector" TEXT NOT NULL,

    CONSTRAINT "MissingElementErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NonUniqueElementErrorData" (
    "id" UUID NOT NULL,
    "parentHtml" TEXT,
    "selector" TEXT NOT NULL,

    CONSTRAINT "NonUniqueElementErrorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductRecordError" (
    "id" UUID NOT NULL,
    "errorId" UUID NOT NULL,
    "errorCode" "ScrapingErrorCode" NOT NULL,
    "recordId" UUID NOT NULL,
    "field" "ProductRecordDataField" NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "ProductRecordError_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductRecord" (
    "id" UUID NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" UUID NOT NULL,
    "updatedById" UUID NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "productId" UUID NOT NULL,
    "price" DOUBLE PRECISION,
    "rawPrice" TEXT,
    "status" "ProductStatus",
    "wasManuallyCreated" BOOLEAN NOT NULL DEFAULT false,
    "manuallyChangedFields" "ProductRecordDataField"[] DEFAULT ARRAY[]::"ProductRecordDataField"[],

    CONSTRAINT "ProductRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" UUID NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" UUID NOT NULL,
    "name" TEXT,
    "slug" TEXT NOT NULL,
    "code" TEXT,
    "imageSrc" TEXT,
    "status" "ProductStatus",
    "price" DOUBLE PRECISION,
    "category" "ProductCategory" NOT NULL,
    "subCategories" "ProductSubCategory"[],

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductRecordError_errorId_key" ON "ProductRecordError"("errorId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductRecordError_recordId_key" ON "ProductRecordError"("recordId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- AddForeignKey
ALTER TABLE "ProductRecordError" ADD CONSTRAINT "ProductRecordError_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "ProductRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRecord" ADD CONSTRAINT "ProductRecord_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRecord" ADD CONSTRAINT "ProductRecord_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRecord" ADD CONSTRAINT "ProductRecord_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;