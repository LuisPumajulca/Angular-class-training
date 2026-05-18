
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name:'Luis'
}

const passenger2: Passenger = {
    name:'Cinthia',
    children: ['Yerard', 'Valencia']
}

const returnChildrenNumber = (passenger: Passenger): number => {

    // if (!passenger.children) return 0;

    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length;

    console.log( passenger.name, howManyChildren);
    
    return howManyChildren;
}

returnChildrenNumber(passenger1);





