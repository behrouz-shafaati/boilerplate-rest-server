import { IPagination, IFind, IQueryResult } from "./interface";
import db from "./db";

const defaultPagination: IPagination = {
  page: 1,
  perPage: 15,
};

export default class service {
  private model: any;
  constructor(model: any) {
    this.model = model;
  }

  async find(
    filters = {},
    pagination: IPagination = defaultPagination,
    sort = ["createdAt", "DESC"]
  ): Promise<IQueryResult> {
    let skip: number =
      pagination.page != 0 ? (pagination.page - 1) * pagination.perPage : 0;
    let result: any = await this.model.findAll({
      where: { ...filters, deleted: false },
      offset: skip,
      limit: pagination.perPage,
      order: sort,
    });

    const totalDocument: number = await this.model.count({
      where: { ...filters, deleted: false },
    });
    let nextPage: number =
      pagination.page * pagination.perPage >= totalDocument
        ? 0
        : pagination.page + 1;
    const totalPages: number = Math.ceil(totalDocument / pagination.perPage);

    if (!result.length || result.length == totalDocument) nextPage = 0;
    return { data: result, nextPage, totalPages, totalDocument };
    //    return result
  }

  async findAll(filters = {}, sort = { createdAt: -1 }): Promise<IQueryResult> {
    let result: any = await this.model.findAll({
      where: { ...filters, deleted: false },
      order: sort,
    });

    const totalDocument: number = await this.countDocuments(filters);
    let nextPage: number = 0;
    const totalPages: number = 1;
    return { data: result, nextPage, totalPages, totalDocument };
  }

  async findById(id: number) {
    return this.model.findByPk(id);
  }
  async findOne(filters: object = {}) {
    if (typeof filters === "number") this.findById(filters);
    return await this.model.findOne({ where: { ...filters, deleted: false } });
  }
  async create(data: object) {
    return this.model.create(data);
  }
  async findOneAndUpdate(filters: any, data: object) {
    if (typeof filters === "number") {
      // eslint-disable-next-line no-param-reassign
      filters = {
        id: filters,
      };
    }
    return this.model.update(data, { where: { ...filters, deleted: false } });
  }
  async countDocuments(filters: any): Promise<number> {
    if (typeof filters === "number") {
      // eslint-disable-next-line no-param-reassign
      filters = {
        id: filters,
      };
    }
    return this.model.count({ where: { ...filters, deleted: false } });
  }

  async delete(filters: any) {
    this.findOneAndUpdate(filters, { deleted: true });
  }
}
