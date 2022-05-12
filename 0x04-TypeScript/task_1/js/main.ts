interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [property: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName:String): string;
}

const printTeacher: printTeacherFunction = (
    firstName: string,
    lastName: string
) => `${firstName.charAt(0)}. ${lastName}`;

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface SCConInterface {
    new (firstName: string, lastName: string): StudentClassInterface;
}

function newStudentClass(
    SCConInterface: SCConInterface,
    firstName: string,
    lastName: string,
): StudentClassInterface {
    return new SCConInterface(firstName, lastName);
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor (firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return 'Currently working';
    };
    displayName(): string {
        return this.firstName;
    };
}

// TESTS

const teacher: Teacher = {
    firstName: 'Mr.',
    lastName: 'Smith',
    fullTimeEmployee: false,
    location: 'The Matrix',
    contract: false,
};
console.log(teacher);

const director: Directors = {
    firstName: 'One of',
    lastName: 'the Wachowskis',
    location: 'LA',
    fullTimeEmployee: true,
    numberOfReports: 4,
};
console.log(director);

console.log(printTeacher(teacher.firstName, director.lastName));

const wesley = newStudentClass(StudentClass, 'Wesley', 'Crusher');
console.log(wesley);
console.log(wesley.displayName());
console.log(wesley.workOnHomework());
