-- Deploy atelier-rc:role to pg

BEGIN;

ALTER TABLE "client"
  ADD COLUMN IF NOT EXISTS "role" TEXT DEFAULT 'user';

ALTER TABLE "user"
  ADD COLUMN IF NOT EXISTS "role" TEXT DEFAULT 'admin';

COMMIT;
