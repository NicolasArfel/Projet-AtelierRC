BEGIN;

TRUNCATE client, "user", status, project, furniture, client_has_favorite_furniture RESTART IDENTITY CASCADE;

INSERT INTO client (email, firstname,  lastname, password, address, zip_code, city, phone_number, role) VALUES
('moine.veronique@test.com', 'Véronique', NULL, 'motdepassetest', NULL, '75020', NULL, NULL, 'admin');

INSERT INTO "user" (email, firstname,lastname, password, role) VALUES
('romaincaillon.archi@gmail.com', 'Romain', 'Caillon', 'atelierrc', 'admin');

INSERT INTO status (label) VALUES
('Phase d''étude'),
('Phase chantier'),
('Chantier livré');
 
INSERT INTO project (name, slug, location, date, program, surface_area, type, client, design, photo_credit, user_id, status_id) VALUES
('Lamarck', 'lamarck','Île-de-France, Paris 18', '2022', 'Conception d’une cuisine fermée dans un Immeuble Art Déco', '25m²', 'Appartement', 'privé', 'Romain Caillon', 'Romain Caillon',1 ,3 ),
('Junot', 'junot','Île-de-France, Paris 18', '2022', 'Rénovation d’un duplex dans un immeuble Art Déco. Relier deux appartements/lots au sein d’une même copropriété. Revoir l’agencement/l’organisation du R+4 dans sa globalité. Conception d’un escalier permettant d’accéder au R+5', '80m²', 'Appartement', 'Commanditaire privé', 'Romain Caillon', 'Romain Caillon', 1, 2),
('Voltaire', 'voltaire','Île-de-France, Paris 11', '2022', 'Rénovation/restructuration de l’entrée et de la cuisine d’un appartement parisien', '15m²', 'Appartement', 'privé', 'Romain Caillon', 'Romain Caillon',1 ,1),
-- ('La Villa Jasmin', 'la-villa-jasmin','Île-de-France, Andrésy', '2021', 'Rénovation complète d’une maison meulière', '160m²', 'Maison', 'privé', 'Romain Caillon', 'Romain Caillon',1 ,3),
('Test', 'voltaire','Île-de-France, Paris 11', '2022', 'Rénovation/restructuration', '15m²', 'Appartement', 'Commanditaire privé', 'Romain Caillon', 'Romain Caillon',1 ,2);

INSERT INTO furniture (name, slug, type, condition, description, availability, price, user_id) VALUES
('Singe vintage', 'singe-vintage', 'Objet de décoration', 'Bon état', 'Singe vintage en teck style Kay Bojesen', FALSE, NULL, 1),
('Pierre Cardin/ Bar roulant', 'pierre-cardin-bar-roulant', 'Meuble', 'Excellent', 'Designer : Cardin, Pierre et Carré, Alain Editeur : Anonyme Circa 1970', FALSE, NULL, 1);

INSERT INTO project_photo (name, position, photo_credit, cover_photo, project_id) VALUES
('lamarck_pers_1.jpg', 1, 'image ©Romain-Caillon', TRUE, 1),
('lamarck_pers_2.jpg', 2, 'image ©Romain-Caillon', FALSE, 1),
('lamarck_pers_3.jpg', 3, 'image ©Romain-Caillon', FALSE, 1),
('lamarck_pers_4.jpg', 4, 'image ©Romain-Caillon', FALSE, 1),
('lamarck_pers_5.jpg', 5, 'image ©Romain-Caillon', FALSE, 1),
('lamarck_pers_6.jpg', 6, 'image ©Romain-Caillon', FALSE, 1),
('junot_pers_1.jpg', 1, 'image ©Romain-Caillon', TRUE, 2),
('junot_pers_2.jpg', 2, 'image ©Romain-Caillon', FALSE, 2),
('junot_pers_3.jpg', 3, 'image ©Romain-Caillon', FALSE, 2),
('junot_pers_4.jpg', 4, 'image ©Romain-Caillon', FALSE, 2),
('voltaire_pers_1.jpg', 1, 'image ©Romain-Caillon', TRUE, 3),
('voltaire_pers_2.jpg', 2, 'image ©Romain-Caillon', FALSE, 3),
('voltaire_pers_3.jpg', 3, 'image ©Romain-Caillon', FALSE, 3),
('voltaire_pers_4.jpg', 4, 'image ©Romain-Caillon', FALSE, 3),
('voltaire_pers_5.jpg', 5, 'image ©Romain-Caillon', FALSE, 3),
('test_pers_4.jpg', 1, 'image ©Romain-Caillon', TRUE, 4);

INSERT INTO furniture_photo (name, position, photo_credit, cover_photo, furniture_id) VALUES
('kaybojesen_singe_photo_1.jpg', 1, 'photo ©Romain-Caillon', TRUE, 1),
('kaybojesen_singe_photo_2.jpg', 2, 'photo ©Romain-Caillon', FALSE, 1),
('kaybojesen_singe_photo_3.jpg', 3, 'photo ©Romain-Caillon', FALSE, 1),
('pierrecardin_barroulant_photo_1.jpg', 1, 'photo ©Romain-Caillon', TRUE, 2),
('pierrecardin_barroulant_photo_2.jpg', 2, 'photo ©Romain-Caillon', FALSE, 2),
('pierrecardin_barroulant_photo_3.jpg', 3, 'photo ©Romain-Caillon', FALSE, 2),
('pierrecardin_barroulant_photo_4.jpg', 4, 'photo ©Romain-Caillon', FALSE, 2),
('pierrecardin_barroulant_photo_5.jpg', 5, 'photo ©Romain-Caillon', FALSE, 2);

COMMIT;