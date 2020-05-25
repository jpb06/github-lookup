export interface ApiResult<TData> {
  success: boolean;
  data?: TData;
}
