export interface ApiResponse<TData> {
  success: boolean;
  error?: string;
  data?: TData;
}
