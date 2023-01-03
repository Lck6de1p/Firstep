export type responseData<T> = {
  code: number;
  message: string;
  data: T[];
};
