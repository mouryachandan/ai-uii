export async function fetchModels() {
  const res = await fetch("/data/models.json");
  if (!res.ok) throw new Error("Failed to fetch models");
  return res.json();
}
