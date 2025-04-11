export type Pagination = {
  page: number;
  totalPages: number;
  pageSize: number;
};

export type Metadata = {
  total?: number;
  pagination?: Pagination;
  warnings?: string[];
};
