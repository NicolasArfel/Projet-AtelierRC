-- Revert atelier-rc:role from pg

BEGIN;

ALTER TABLE "user"
  DROP COLUMN IF EXISTS "role";

ALTER TABLE IF EXISTS "client"
  DROP COLUMN  "role";

COMMIT;
