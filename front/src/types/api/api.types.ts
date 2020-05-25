export interface ApiError {
  status: number;
  message: string;
}

export interface ApiResponse<TData> {
  success: boolean;
  error?: ApiError;
  data?: TData;
}
