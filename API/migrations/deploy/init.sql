-- Deploy atelier-rc:init to pg

BEGIN;

CREATE DOMAIN "email" AS text CHECK (
    value ~ '^[a-zA-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'
);

CREATE DOMAIN "zipcode" AS text CHECK (
    value ~ '^0[1-9]\d{3}$' -- code postaux metropole de 01 a 09
    OR value ~ '^20[1-2]\d{2}$|^20300$' -- code postaux de la Corse
    OR value ~ '^[13-8]\d{4}$' -- code postaux les plus génériques
    OR value ~ '^97[1-6]\d{2}$' -- code postaux DOM
    OR value ~ '^98[4678]\d{2}$' -- code postaux TOM
    OR value ~ '^9{5}$' -- code postal de la poste
    OR value ~ '^9[0-6]\d{3}$' -- code postaux metropole commencant par 9
);

CREATE DOMAIN "phonenumber" AS text CHECK (
    value ~ '^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$' -- numéros FR ou INT (+33 ou non)
   
);

CREATE TABLE "client" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" EMAIL NOT NULL UNIQUE,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT,
    "password" TEXT NOT NULL,
    "address" TEXT,
    "zip_code" ZIPCODE NOT NULL,
    "city" TEXT,
    "phone_number" PHONENUMBER,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" EMAIL NOT NULL UNIQUE,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "status" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "project" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "slug" TEXT NOT NULL,
    "location" TEXT,
    "date" TEXT,
    "program" TEXT,
    "surface_area" TEXT,
    "type" TEXT,
    "client" TEXT,
    "design" TEXT,
    "photo_credit" TEXT,
    "user_id" INT NOT NULL REFERENCES "user" ("id"),
    "status_id" INT NOT NULL REFERENCES "status" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "furniture" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL UNIQUE,
    "type" TEXT,
    "condition" TEXT,
    "description" TEXT,
    "availability" BOOLEAN NOT NULL,
    "price" NUMERIC(15,4),
     
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "project_photo" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "position" INT NOT NULL,
    "photo_credit" TEXT,
    "cover_photo" BOOLEAN,
    "project_id" INT NOT NULL REFERENCES "project" ("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "furniture_photo"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "position" INT NOT NULL,
    "photo_credit" TEXT,
    "cover_photo" BOOLEAN,
    "furniture_id" INT NOT NULL REFERENCES "furniture" ("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "client_has_favorite_furniture" (
    "furniture_id" INT NOT NULL REFERENCES "furniture" ("id"),
    "client_id" INT NOT NULL REFERENCES "client" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE INDEX "login" ON client USING hash (email);

COMMIT;
