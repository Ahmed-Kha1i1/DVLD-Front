import { BASE_URL } from "../Constants";

export async function getUsers() {
  try {
    let res = await fetch(`${BASE_URL}/api/Users/All`);

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
