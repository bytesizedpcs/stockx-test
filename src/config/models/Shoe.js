module.exports = (sequelize, type) => {
  return sequelize.define('Shoe', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: type.STRING,
      company: type.STRING,
      color: type.STRING,
      tts: type.ARRAY(type.STRING)
  })
}