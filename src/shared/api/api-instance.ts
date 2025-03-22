const BASE_URL = "http://localhost:3100";

class ApiError extends Error {
  constructor(public response: Response) {
    super("ApiError" + response.status);
  }
}

export const apiInstance = async <T>(url: string, init: RequestInit) => {
  const result = await fetch(`${BASE_URL}${url}`, { ...init });

  if (!result.ok) {
    throw new ApiError(result);
  }

  return (await result.json()) as Promise<T>;
};
