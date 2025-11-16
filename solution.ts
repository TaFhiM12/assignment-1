const formatValue = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return value * 10;
    }
    else {
        return !value;
    }
}

const getLength = (value: string | any[]): number => {
    if (typeof value === 'string') {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }

    return 0;
}


class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}


interface Item {
    title: string;
    rating: number;
}
const filterByRating = (items: Item[]): Item[] => {
    return items.filter((item: Item) => item.rating >= 4);
}


interface IUser {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const filterActiveUsers = (users: IUser[]): IUser[] => {
    return users.filter((user: IUser) => user.isActive);
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book : Book): void => {
    const available : string = book.isAvailable ? 'Yes' : 'No';
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`)
}

type ArrayType = (string | number)[];
const getUniqueValues = (array1: ArrayType, array2: ArrayType) : ArrayType => {
    const ans : ArrayType = [];
    for(const element of array1){
        if(!ans.includes(element)) ans.push(element);
    }

    for(const element of array2){
        if(!ans.includes(element)) ans.push(element);
    }

    return ans;
}


interface IProduct {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
const calculateTotalPrice = (products: IProduct[]): number => {
    let total = 0;

    for (const product of products) {
        const totalPrice = product.price * product.quantity;
        const discountPrice = product.discount
            ? totalPrice * (1 - product.discount / 100)
            : totalPrice;

        total += discountPrice;
    }

    return total;
};
