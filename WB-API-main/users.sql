-- CREATE USER
CREATE TABLE WB_USER
    (ID NUMERIC,
     NAME VARCHAR(255),
     CONSTRAINT WB_USER_PK PRIMARY KEY (ID));

-- CREATE SKILLS
CREATE TABLE WB_SKILLS
    (ID NUMERIC,
     NAME VARCHAR(255),
     CONSTRAINT WB_SKILLS_PK PRIMARY KEY (ID));

-- CREATE TRAITS
CREATE TABLE WB_TRAITS
    (ID NUMERIC,
     NAME VARCHAR(255),
     CONSTRAINT WB_TRAITS_PK PRIMARY KEY (ID));

-- CREATE ITEMS
CREATE TABLE WB_ITEMS
    (ID NUMERIC,
     NAME VARCHAR(255),
     CONSTRAINT WB_ITEMS_PK PRIMARY KEY (ID));

-- CREATE CHARACTERS
CREATE TABLE WB_CHARACTERS
    (ID NUMERIC,
     NAME VARCHAR(255),
     CONSTRAINT WB_CHARACTERS_PK PRIMARY KEY (ID));

ALTER TABLE WB_CHARACTERS
    ADD CONSTRAINT FK_CHARACTER_USER
    FOREIGN KEY (USER)
    REFERENCES WB_USER (ID);

--

-- CREATE TABLE wb_player_characters (
--     id NUMERIC NOT NULL AUTO_INCREMENT,
--     name VARCHAR(255),
--     user_id NUMERIC,
--     level NUMERIC,
--     portrait VARCHAR(255),
--     model VARCHAR(255),
--     special_skill_id NUMERIC,
--     class_id NUMERIC,
--     race_id NUMERIC,
--     atributes VARCHAR(255),
--     skills_id VARCHAR(255),
--     traits_id VARCHAR(255),
--     itens_id VARCHAR(255),
--     PRIMARY KEY (id),
--     FOREIGN KEY (user_id) REFERENCES wb_user(id)
-- );

CREATE TABLE wb_player_characters (id SERIAL, name VARCHAR(255), user_id NUMERIC, level NUMERIC, portrait VARCHAR(255), model VARCHAR(255), special_skill_id NUMERIC, class_id NUMERIC, race_id NUMERIC, atributes VARCHAR(255), skills_id VARCHAR(255), traits_id VARCHAR(255), itens_id VARCHAR(255), PRIMARY KEY (id), FOREIGN KEY (user_id) REFERENCES wb_user(id));

INSERT INTO wb_player_characters (id, name, user)
-- id name user_id
ALTER TABLE wb_player_characters ADD id NUMERIC;

ALTER TABLE wb_player_characters ADD id NUMERIC PRIMARY KEY NOT NULL AUTO_INCREMENT;

ALTER TABLE wb_player_characters DROP COLUMN id;
-- INSERT INTO wb_player_characters (id, name, user_id, level, portrait, model, special_skill_id, class_id, race_id, atributes, skills_id, traits_id, itens_id) VALUES (1, 'Lobo mau', 1, 1, 'https://ibb.co/k8nhS1z', 'https://ibb.co/k8nhS1z', 1, 1, 1, '{STR: 5, DEX: 4, CON: 4, INT: 1, TOU: 2, AGI: 3}', '[1,2,3]', '[1,2,3]', '[1,2,3]');

INSERT INTO wb_player_characters (name, user_id, level, portrait, model, special_skill_id, class_id, race_id, atributes, skills_id, traits_id, itens_id) VALUES ('Lobo mau', 1, 1, 'https://ibb.co/k8nhS1z', 'https://ibb.co/k8nhS1z', 1, 1, 1, '{ "STR": 290, "DEX": 340, "CON": 230, "INT": 360, "TOU": 230, "AGI": 350 }', '[0,0,0,0]', '[0,0,0,0]', '[0,0,0,0]');

UPDATE wb_player_characters SET atributes = '{"STR": 5, "DEX": 4, "CON": 4, "INT": 1, "TOU": 2, "AGI": 3}' WHERE id = 1;

UPDATE wb_player_characters SET atributes = '{"STR": 290, "DEX": 340, "CON": 230, "INT": 360, "TOU": 230, "AGI": 350 }' WHERE id = 1;

UPDATE wb_player_characters SET experience = 0 WHERE id = 1;

SELECT * FROM wb_player_characters WHERE id = 1;

DELETE FROM wb_player_characters WHERE id = 1;


-- turns  [[123,1],[321,1],[123,4],[321,1]]
CREATE TABLE wb_pve_battle (id SERIAL, player_id INT, character_id INT, monster_id NUMERIC, stage_id NUMERIC, turns VARCHAR(255), PRIMARY KEY (id), FOREIGN KEY (player_id) REFERENCES wb_user(id), FOREIGN KEY (character_id) REFERENCES wb_player_characters(id));