export const apiClient = async (url, options = {}) => {
  const headers = options.headers ? { ...options.headers } : {};

  const method = options.method?.toUpperCase?.() || "GET";
  const isJsonMethod = ["POST", "PUT", "PATCH"].includes(method);

  if (isJsonMethod && !headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(url, {
    ...options,
    method,
    headers,
  });

  if (!res.ok) {
    let message;
    try {
      message = await res.json();
    } catch (_) {
      message = await res.text();
    }

    throw {
      name: "ApiClientError",
      status: res.status,
      statusText: res.statusText,
      message: message?.message || message || "Unknown error",
      url,
      method,
    };
  }

  // Handle 204 No Content
  if (res.status === 204) return null;

  return await res.json();
};
