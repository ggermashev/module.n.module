
export interface IDress {
    id?: number,
    title: string,
    module: string,
    description?: string,
    price: number,
    images: string[],
    rating: number
}

export interface IOrder {
    id?: number,
    date: string,
    status: string,
    products: IDress[],
}

export interface BasketItem {
    id?: number,
    product: IDress,
    count: number,
}

export interface IBasket {
    id?: number,
    products: BasketItem[],
}