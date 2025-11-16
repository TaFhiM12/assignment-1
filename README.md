1. Differences between Interfaces and Types

- Interface and Type both use to make structure of object.
- Interface can be extended by another interface.
- Type can use union or intersection but interface not easy.
- Interface only for object, type can be for object, union, tuple, etc.
- Interface can be merged if same name. Type cannot merge.
- Type is more flexible. Interface is more simple.

Example:


interface Person {
  name: string;
  age: number;
}

type Animal = {
  name: string;
  type: string;
};


**2**. Use of keyof keyword

* keyof use to take all keys of an object.
* It make type of keys.
* Very useful for check keys.

Example:

interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; 
// PersonKeys is "name" | "age"

let key1: PersonKeys = "name"; // correct
<br/>
let key2: PersonKeys = "age";  // correct
<br> 
let key3: PersonKeys = "gender"; // wrong, cannot use


Explanation:

1. keyof Person means only keys of Person interface.
2. So "name" and "age" is ok, other key not allowed.

