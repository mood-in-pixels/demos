module.exports = function(sequelize, DataTypes) {
  var Mood = sequelize.define("Mood", {
    user_id: {
      type: DataTypes.INT
    },
    mood_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    classMethods: {
      associate: function(models){
        Mood.belongsTo(models.User,
        {
          onDelete: "cascade",
          foreignKey: {
            allowNull: false
          }
        })    
      }
    }
  });


  Mood.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Mood.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Mood;
};