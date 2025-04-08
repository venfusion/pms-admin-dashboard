type Pagination = {
  page: number;
  totalPages: number;
  pageSize: number;
};

type PaginationMetadata = {
  total: number;
  pagination: Pagination;
};

export type BaseResponse<T> = {
  success: boolean;
  data: T;
  message: string;
  timestamp: string;
  metadata?: PaginationMetadata;
};
