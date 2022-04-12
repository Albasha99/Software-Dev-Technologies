/**
 * Presentation model of a single product.
 */
export interface Product {
    name: string,
    sku: string,
    price: number,
    discountPrice: number,
    pictureUrls: string[],
    description: string,
    stock: number
}

export enum ProductCategoryType {
    ANIMAL = 1,
    ACCESSORIES,
    FITNESS,
    ELECTRONICS,
    BOOKS,
    KITCHEN
}

export interface ProductCategory {
    pictureUrl: string,
    name: string,
    id: ProductCategoryType
}
