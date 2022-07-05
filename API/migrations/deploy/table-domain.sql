-- Deploy atelier-rc:table-domain to pg

BEGIN;

CREATE DOMAIN slug AS TEXT
  CHECK(
    VALUE ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'
  )
;

ALTER TABLE "project"
  ALTER COLUMN "slug" TYPE slug;

ALTER TABLE "furniture"
  ALTER COLUMN "slug" TYPE slug;

COMMIT;
