import IService from "../interfaces/service.interface";
import { ITodo } from "../models/db.data";
import BaseRepository from "../repositories/base.repository";

export default abstract class BaseService<T> implements IService<T> {
  constructor(private baseRepository: BaseRepository) {}

  save(data: T): Promise<T> {
    return this.baseRepository.createEntity(data);
  }
  update(id: string, data: T): Promise<T> {
    return this.baseRepository.updateEntity(id, data);
  }
  delete(id: string): Promise<any> {
    return this.baseRepository.deleteEntity(id);
  }
  findById(id: string): Promise<T> {
    return this.baseRepository.findEntityById(id);
  }
  findAll(): Promise<T[]> {
    return this.baseRepository.listEntities();
  }
}
