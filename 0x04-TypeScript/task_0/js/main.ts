interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Parker',
    lastName: 'Lewis',
    age: 16,
    location: 'Santo Domingo High School'
}

const student2: Student = {
    firstName: 'Ferris',
    lastName: 'Bueller',
    age: 18,
    location: 'Glenbrook High School'
}

const studentList: Array<Student> = [student1, student2];

const table = document.createElement('table');

for (const student of studentList) {
    const row = table.insertRow();
    row.insertCell().innerHTML = student.firstName;
    row.insertCell().innerHTML = student.location;
}

document.body.appendChild(table);
