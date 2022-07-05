-- Verify atelier-rc:role on pg

BEGIN;

SELECT role FROM "user" WHERE false;

SELECT role FROM "client" WHERE false;

ROLLBACK;
