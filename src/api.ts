export const API_URL = '/api';

export async function request<T = any>(url: string, method: "post" | "get" | "put" | "delete" | "head" = "get", body: any = {}, autoRefresh = true): Promise<{ status: number, ok: boolean, data: T }> {
  let json: string | undefined;
  
  if (method !== "get" && method !== "head") {
    json = JSON.stringify(body);
  ;}
  
  const res = await fetch(`${API_URL}${url}`, {
    method, 
    body: json,
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
  });

  console.log(res);

  let data = {} as T;

  try {
    data = await res.json();
  } catch {};

  if (autoRefresh && res.status === 401) {
    const res = await fetch(`${API_URL}/auth/refresh`, { method: "post" });
    
    if (res.ok) {
      return await request(url, method, body);
    }

    window.location.pathname = "/admin/login";
    return { data, status: 401, ok: res.ok };
  }

  return { data, status: res.status, ok: res.ok };
}