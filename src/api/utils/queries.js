const shoeGet = `
  SELECT * 
  FROM shoe_table;
`;

const shoeGetId = `
  SELECT (sum_shoe_sizes, size_amount) 
  FROM shoe_table 
  WHERE shoe_table.id=$1;
`;

const shoePost = `
  INSERT INTO 
  shoe_table (name, company, color, sum_shoe_sizes, size_amount)
  VALUES ($1, $2, $3, $4, $5);
`;

const createTable = `
  CREATE TABLE shoe_table (
    id    SERIAL PRIMARY KEY,
    name  VARCHAR(64) NOT NULL,
    company VARCHAR(64),
    color VARCHAR(64),
    sum_shoe_sizes BIGINT,
    size_amount INT
  );

  CREATE INDEX ON shoe_table (id);

  INSERT INTO 
  shoe_table (name, company, color, sum_shoe_sizes, size_amount)
  VALUES
  ('350 Boost', 'Yeezy', 'Pirate Black', 250, 30), 
  ('350 Boost', 'Yeezy', 'Turtle Dove', 250, 30),
  ('350 Boost', 'Yeezy', 'Oxford Tan', 250, 30),
  ('350 Boost', 'Yeezy', 'Moonrock', 250, 30);
`;

module.exports = {
  shoeGet, shoeGetId, shoePost
}