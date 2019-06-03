CREATE TABLE shoe_table (
  id    SERIAL PRIMARY KEY,
  name  VARCHAR(64) NOT NULL,
  company VARCHAR(64),
  color VARCHAR(64),
  shoe_sizes INT[]
);

CREATE INDEX ON shoe_table (id);

INSERT INTO 
shoe_table (name, company, color, shoe_sizes)
VALUES
('350 Boost', 'Yeezy', 'Pirate Black', '{1, 2, 3, 4, 5}'), 
('350 Boost', 'Yeezy', 'Turtle Dove', '{1, 2, 3, 4, 5}'),
('350 Boost', 'Yeezy', 'Oxford Tan', '{1, 2, 3, 4, 5}'),
('350 Boost', 'Yeezy', 'Moonrock', '{1, 2, 3, 4, 5}');