// Interface Teacher ex 1 
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any; // Allows additional dynamic properties
}

// Interface for `printTeacher` function ex 2
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// `printTeacher` function following the interface with export
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Interface describing the constructor of StudentClass ex 3
interface StudentConstructor {
    firstName: string;
    lastName: string;
}

// Interface describing StudentClass
interface Student {
    workOnHomework(): string;
    displayName(): string;
}

// Implementation of StudentClass that follows the Student interface ex 4
class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName }: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

console.log(printTeacher("Chandler", "Bing"));
