


export interface Package_Type {
    package_no: number,
    package_name: string,
    package_price: number,
    package_status: "ACTIVE" | "BLOCK"
}

export interface Create_Package_Type {
    package_name: string,
    package_price: number,
}
