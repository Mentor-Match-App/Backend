-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('Admin', 'PendingMentor', 'Mentor', 'Mentee');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Pria', 'Wanita');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('Pending', 'Approved', 'Expired');

-- CreateTable
CREATE TABLE "users" (
    "id" VARCHAR(64) NOT NULL,
    "userType" "UserType",
    "email" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "skills" TEXT[],
    "gender" "Gender",
    "location" TEXT,
    "linkedin" TEXT,
    "portofolio" TEXT,
    "photoUrl" VARCHAR(255) NOT NULL,
    "about" TEXT,
    "account_number" VARCHAR(64),
    "account_name" VARCHAR(64),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" VARCHAR(64) NOT NULL,
    "reviewer_id" VARCHAR(64) NOT NULL,
    "mentor_id" VARCHAR(64) NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" VARCHAR(64) NOT NULL,
    "mentor_id" VARCHAR(64) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "category" VARCHAR(64) NOT NULL,
    "date_time" TIMESTAMP(3) NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "max_participants" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "zoom_link" VARCHAR(255),

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "participants" (
    "session_id" VARCHAR(64) NOT NULL,
    "user_id" VARCHAR(64) NOT NULL,

    CONSTRAINT "participants_pkey" PRIMARY KEY ("session_id","user_id")
);

-- CreateTable
CREATE TABLE "communities" (
    "id" VARCHAR(64) NOT NULL,
    "admin_id" VARCHAR(64) NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "link" TEXT NOT NULL,
    "image_url" VARCHAR(255) NOT NULL,

    CONSTRAINT "communities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evaluations" (
    "id" VARCHAR(64) NOT NULL,
    "class_id" VARCHAR(64) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "topic" VARCHAR(64) NOT NULL,
    "link" VARCHAR(255) NOT NULL,
    "feedback" TEXT,

    CONSTRAINT "evaluations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experiences" (
    "id" VARCHAR(64) NOT NULL,
    "user_id" VARCHAR(64) NOT NULL,
    "is_current_job" BOOLEAN NOT NULL,
    "company" VARCHAR(64) NOT NULL,
    "job_title" VARCHAR(64) NOT NULL,

    CONSTRAINT "experiences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classes" (
    "id" VARCHAR(64) NOT NULL,
    "mentor_id" VARCHAR(64) NOT NULL,
    "education_level" VARCHAR(64) NOT NULL,
    "category" VARCHAR(64) NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "description" TEXT NOT NULL,
    "terms" TEXT[],
    "price" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "is_available" BOOLEAN NOT NULL DEFAULT true,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "schedule" VARCHAR(64) NOT NULL,
    "max_participants" INTEGER NOT NULL,
    "zoom_link" VARCHAR(255),

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "learning_materials" (
    "id" VARCHAR(64) NOT NULL,
    "class_id" VARCHAR(64) NOT NULL,
    "title" VARCHAR(64) NOT NULL,
    "link" VARCHAR(255) NOT NULL,

    CONSTRAINT "learning_materials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" VARCHAR(64) NOT NULL,
    "class_id" VARCHAR(64) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "unique_code" INTEGER NOT NULL,
    "payment_status" "PaymentStatus" NOT NULL DEFAULT 'Pending',
    "expired" TIMESTAMP(3) NOT NULL DEFAULT NOW() + interval '1 day',
    "userId" VARCHAR(64) NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "classes_mentor_id_key" ON "classes"("mentor_id");

-- CreateIndex
CREATE UNIQUE INDEX "transactions_unique_code_key" ON "transactions"("unique_code");

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_reviewer_id_fkey" FOREIGN KEY ("reviewer_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_mentor_id_fkey" FOREIGN KEY ("mentor_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_mentor_id_fkey" FOREIGN KEY ("mentor_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participants" ADD CONSTRAINT "participants_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participants" ADD CONSTRAINT "participants_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "sessions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "communities" ADD CONSTRAINT "communities_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experiences" ADD CONSTRAINT "experiences_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_mentor_id_fkey" FOREIGN KEY ("mentor_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "learning_materials" ADD CONSTRAINT "learning_materials_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
