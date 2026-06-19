CREATE TYPE "public"."payment_status" AS ENUM('Pending', 'Paid', 'Failed');--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "payment_method" varchar(50) DEFAULT 'COD' NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "payment_status" "payment_status" DEFAULT 'Pending' NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN "payment_id";