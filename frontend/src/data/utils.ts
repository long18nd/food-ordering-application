import type {MenuCategory} from "../pages/restaurants/menu/RestaurantMenu.tsx";
import type {Restaurant} from "../pages/restaurants/type.ts";
import {menuCategories, restaurantData} from "../pages/restaurants/constants.ts";

export const getRestaurantById = (id: number): Restaurant | undefined => {
    return restaurantData.find(restaurant => restaurant.id === id);
};

export const getMenuForRestaurant = (id: number): MenuCategory[] => {
    return menuCategories[id] || [];
};