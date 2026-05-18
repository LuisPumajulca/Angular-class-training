
export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public firstName: string,
        private lastName: string,
        private address: string = 'No address'
        ) {}

}

// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string

//     ) {
//         super( realName, 'New York, USA' );
//     }

// }

export class Hero {

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,

    ) {
        // this.person = new Person( realName );
        
    }

}

const bruce = new Person('Bruce','Wayne', 'Gotham, USA');

const ironman = new Hero('Ironman', 45, 'Tony', bruce);

console.log(ironman);
