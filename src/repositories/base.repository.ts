import { v4 } from "uuid";
import { getConnection } from "../config/database";

export default abstract class BaseRepository {
  private schema: string;

  constructor(schema: string) {
    this.schema = schema;
  }

  createEntity = async (data: any) => {
    data.id = v4();
    getConnection().get(this.schema).push(data).write();
    return data;
  };

  updateEntity = async (id: string, data: any) => {
    const result = await getConnection()
      .get(this.schema)
      .find({ id })
      .assign(data)
      .write();
    return result;
  };

  deleteEntity = async (id: string) => {
    const result = await getConnection()
      .get(this.schema)
      .remove({ id })
      .write();
    return result;
  };

  listEntities = async () => {
    const entities = getConnection().get(this.schema).value();
    return entities;
  };

  findEntityById = async (id: string) => {
    const entity = getConnection().get(this.schema).find({ id }).value();
    return entity;
  };
}
