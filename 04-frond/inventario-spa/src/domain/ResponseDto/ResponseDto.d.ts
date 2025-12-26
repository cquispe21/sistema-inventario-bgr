export type PaginationMeta = {
  pageNumber: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
};

export type PagedResult<T> = {
  items: T[];
  meta: PaginationMeta;
};




export interface ResponseDto<T> {
    Data: T;
    Message: string;
    Resultado: boolean;
}