import { apiClient } from "@/utils/apiClient";
import { getApiUrl } from "@/utils/apiUrl";

export async function getBag(token: string) {
  try {
    const apiUrl = getApiUrl('bags');
    return await apiClient.get(`${apiUrl}/Customer`, token);
  } catch (error) {
    console.error("Error fetching bag:", error);
    return { success: false, data: [], message: "Failed to fetch bag items" };
  }
}

export async function AddItemToBag(
  productId: number,
  productVariantId: number,
  sizeId: number,
  quantity: number,
  token: string
) {
  try {
    console.log("AddItemToBag request:", {
      productId,
      productVariantId,
      sizeId,
      quantity,
    });
    const apiUrl = getApiUrl('bags');
    const response = await apiClient.post(
      apiUrl,
      { productId, productVariantId, sizeId, quantity },
      token
    );
    return response;
  } catch (error: any) {
    console.error("Error adding item to bag:", error);
    const errorMessage =
      error.message ||
      error.data?.message ||
      error.data?.Message ||
      "Failed to add item to bag";
    return { success: false, message: errorMessage };
  }
}

export async function UpdateItemInBag(
  bagId: number,
  quantity: number,
  token: string
) {
  try {
    const apiUrl = getApiUrl('bags');
    return await apiClient.put(`${apiUrl}/${bagId}`, { quantity }, token);
  } catch (error) {
    console.error("Error updating bag item:", error);
    return { success: false, message: "Failed to update bag item" };
  }
}

export async function removeItemFromBag(bagId: number, token: string) {
  try {
    const apiUrl = getApiUrl('bags');
    return await apiClient.delete(`${apiUrl}/${bagId}`, token);
  } catch (error) {
    console.error("Error removing item from bag:", error);
    return { success: false, message: "Failed to remove item from bag" };
  }
}
