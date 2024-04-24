
export interface Product{
    id:string;
    category: string;
    date: string;
    description: string;
    price: string;
    productImageUrl: string;
    quantity: number;
    time: string; // Consider using a proper Date object for timestamp
    title: string;
}

export interface CartItem{
        id: string;
        title: string;
        price: number;
        productImageUrl: string;
        quantity: number;
        category: string;
        date: string;
        description: string;
        time: string; // Assuming time is a string in the format 
    }
export interface RootState {
    cart: CartItem[];
    // Add other slices of your state here if you have more
}

export interface AddressInfo {
    address: string;
    date?: string;
    mobileNumber: string;
    name: string;
    pincode: string;
    time?: Date
}

export interface UserSignup{
    name: string;
    email: string;
    password: string;
    role: string;
}
export interface UserLogin {
    email:string;
    password:string;
}




