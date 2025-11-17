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
const getUniqueValues = (array1: ArrayType, array2: ArrayType): ArrayType => {
    const ans: ArrayType = [];
    const unique = (value: string | number) => {
        let exists = false;
        for (let i = 0; i < ans.length; i++) {
            if (ans[i] === value) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            ans.push(value);
        }
    };
    for (let i = 0; i < array1.length; i++) unique(array1[i]);
    for (let i = 0; i < array2.length; i++) unique(array2[i]);
    return ans;
};



interface IProduct {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
const calculateTotalPrice = (products: IProduct[]): number => {
  return products
    .map(product => {
      const totalPrice = product.price * product.quantity;
      const finalPrice = product.discount
        ? totalPrice * (1 - product.discount / 100)
        : totalPrice;
      return finalPrice;
    })
    .reduce((sum, price) => sum + price, 0);
};
