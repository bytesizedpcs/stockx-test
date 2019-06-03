const query = {};

query.shoeGetAllQuery = `
  SELECT * 
  FROM shoe_table;
`;

query.shoeGetByIdQuery = `
  SELECT * 
  FROM shoe_table 
  WHERE shoe_table.id=$1;
`;

query.insertFullShoeQuery = `
  INSERT INTO
  shoe_table(name, company, color, shoe_sizes)
  VALUES ($1, $2, $3, ARRAY[$4]);
`;

query.insertPartialShoeQuery = `
INSERT INTO 
shoe_table (name, company, color)
VALUES ($1, $2, $3);
`;

query.getShoeSizeArrayByIdQuery = `
SELECT (shoe_sizes)
FROM shoe_table
WHERE shoe_table.id = $1;
`;

query.updateShoeSizeArrayByIdQuery = `
UPDATE shoe_table
SET shoe_sizes = shoe_sizes || ARRAY[$2]
WHERE shoe_table.id = $1;
`;

query.createShoeTableQuery = `
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
`;

module.exports = query;