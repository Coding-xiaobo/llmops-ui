// 基础响应数据格式
export type BaseResponse<T> = {
  code: string
  message: string
  data: T
}

// 基础分页响应数据格式 继承BaseResponse，实现泛型T
export type BasePaginatorResponse<T> = BaseResponse<{
  list: Array<T>
  paginator: {
    total_page: number
    total_record: number
    current_page: number
    page_size: number
  }
}>
