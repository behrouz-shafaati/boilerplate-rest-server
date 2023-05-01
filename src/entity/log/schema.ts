import { DataTypes } from "sequelize";

export default function (sequelize: any) {
  const attributes = {
    userId: { type: DataTypes.NUMBER, references: { model: "User" } },
    actionId: {
      type: DataTypes.NUMBER,
      references: { model: "Request" },
      allowNull: false,
    },
    targetId: { type: DataTypes.NUMBER },
    ip: { type: DataTypes.STRING },
    allowed: { type: DataTypes.BOOLEAN, allowNull: false },
    success: { type: DataTypes.BOOLEAN, defaultValue: false },
    previousValues: { type: DataTypes.JSON },
    variables: { type: DataTypes.JSON },
    error: { type: DataTypes.JSON },
    deleted: { type: DataTypes.BOOLEAN, defaultValue: false },
  };

  const options = {
    timestamps: true,
  };

  return sequelize.define("Log", attributes, options);
}
