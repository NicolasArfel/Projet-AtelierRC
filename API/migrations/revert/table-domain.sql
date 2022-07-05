-- Revert atelier-rc:table-domain from pg

BEGIN;

ALTER TABLE "furniture"
  ALTER COLUMN "slug" TYPE TEXT;

ALTER TABLE "project"
  ALTER COLUMN "slug" TYPE TEXT;

DROP DOMAIN slug;

COMMIT;
