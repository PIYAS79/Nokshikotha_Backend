

export interface OrderStack_Type {
    orderNo: number,
    dateAndTime: string,
    name: string,
    phone: string,
    address: string,
    orderNote: string,
    packageNo: number[],
    totalPrice: number,
    status: "PROCESSING" | "DELIVERED"
}


// frontend theke asbe packet _id
// but DB te rakhbo packet number

export interface Create_OrderStack_Type {
    name: string,
    phone: string,
    address: string,
    orderNote: string,
    packageId: string[],
}

export interface Update_Order_Status_Type {
    status:boolean
}