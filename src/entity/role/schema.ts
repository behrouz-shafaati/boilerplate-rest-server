import { DataTypes } from "sequelize";

export default function (sequelize: any) {
  const attributes = {
    slug: { type: DataTypes.STRING, unique: true, allowNull: false },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    acceptTiket: { type: DataTypes.BOOLEAN, defaultValue: false },
    titleInTiket: { type: DataTypes.STRING },
    active: { type: DataTypes.BOOLEAN, defaultValue: true },
    deleted: { type: DataTypes.BOOLEAN, defaultValue: false },
  };

  const options = {
    timestamps: true,
  };

  return sequelize.define("Role", attributes, options);
}
