import { DataTypes } from "sequelize";

export default function (sequelize: any) {
  const attributes = {
    parentId: { type: DataTypes.NUMBER, references: { model: "Request" } },
    slug: { type: DataTypes.STRING, unique: true, allowNull: false },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    active: { type: DataTypes.BOOLEAN, defaultValue: true },
    deleted: { type: DataTypes.BOOLEAN, defaultValue: false },
  };

  const options = {
    timestamps: true,
  };

  return sequelize.define("Request", attributes, options);
}
