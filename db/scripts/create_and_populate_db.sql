CREATE TABLE IF NOT EXISTS Users
(
    id integer,
    email CHARACTER VARYING(50),
    username CHARACTER VARYING(50),
);

INSERT INTO Users VALUES
           (1, "viki.macek@gmail.com", "charouzic"),
           (2, "jan.kriz@mail.com", "prograMind"),
           (3, "v.tetour@gmail.com", "lovelace");
