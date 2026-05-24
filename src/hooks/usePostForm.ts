import { useState } from "react";
import axios, { type AxiosRequestConfig } from "axios";
import api from "../utils/api";

type ApiErrorResponse = {
  message?: string;
  errors?: Record<string, string[] | string>;
};

type UsePostFormOptions<TResult> = {
  config?: AxiosRequestConfig;
  onSuccess?: (result: TResult) => void;
  onError?: (error: string) => void;
};

function getErrorMessage(error: unknown) {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const responseData = error.response?.data;

    if (responseData?.message) {
      return responseData.message;
    }

    if (responseData?.errors) {
      const firstError = Object.values(responseData.errors)[0];
      return Array.isArray(firstError) ? firstError[0] : firstError;
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong. Please try again.";
}

export default function usePostForm<TPayload, TResult = unknown>(
  url: string,
  options: UsePostFormOptions<TResult> = {},
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<TResult | null>(null);

  async function submit(payload: TPayload) {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await api.post<TResult>(url, payload, options.config);
      setResult(response.data);
      options.onSuccess?.(response.data);
      return response.data;
    } catch (requestError) {
      const message = getErrorMessage(requestError);
      setError(message);
      options.onError?.(message);
      return null;
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setLoading(false);
    setError("");
    setResult(null);
  }

  return {
    submit,
    reset,
    loading,
    error,
    result,
    isSuccess: Boolean(result),
  };
}