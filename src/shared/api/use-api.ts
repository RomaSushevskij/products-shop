import { useCallback, useEffect, useState } from "react";
import { apiInstance } from "@/shared/api/api-instance";

export const useApi = <T>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiInstance<T>(url, options ?? {});
      setData(response);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, refetch: fetchData };
};
