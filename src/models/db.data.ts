export interface ITodo {
  id?: string;
  name: string;
  description: string;
}

export type Schema = {
  todos: Array<ITodo>;
};
