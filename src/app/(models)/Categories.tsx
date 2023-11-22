type GetCategoryGroupsResponse = {
  data: CategoryGroup[];
};

type CategoryGroup = {
  id: string;
  attributes: CategoryGroupAttributes;
};

type CategoryGroupAttributes = {
  title: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  categories: CategoriesData;
};

type CategoriesData = {
  data: Category[];
};

type GetCategoriesResponse = {
  data: Category[];
  meta: ResponseMetadata;
};

type ResponseMetadata = {
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
  attributes: CategoryAttributes;
};

// export { GetCategoriesResponse, Category, CategoryAttributes, GetCategoriesMetadata, PaginationInfo}
