type GetCategoriesResponse = {
  data: Category[];
  meta: GetCategoriesMetadata;
};

type GetCategoriesMetadata = {
  pagination: PaginationInfo;
};

type PaginationInfo = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

type CategoryAttributes = {
  title: string;
  description: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};

type Category = {
  id: string;
  attibutes: CategoryAttributes;
};

// export { GetCategoriesResponse, Category, CategoryAttributes, GetCategoriesMetadata, PaginationInfo}
