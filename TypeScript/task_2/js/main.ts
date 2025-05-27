// Advanced types Part 1 ex 5
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks():string;
};

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
};

class Director implements DirectorInterface {
  workFromHome() { return 'Working from home' };
  getCoffeeBreak() { return 'Getting a coffee break' };
  workDirectorTasks() { return 'Getting to director tasks' };
};

class Teacher implements TeacherInterface {
  workFromHome() { return 'Cannot work from home' };
  getCoffeeBreak() { return 'Cannot have a break' };
  workTeacherTasks() { return 'Getting to work' };
};

interface CreateEmployeeInterface {
  (salary: number | string): Teacher | Director;
};

const createEmployee: CreateEmployeeInterface = (salary) => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  };
};

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Creating functions specific to employees ex 6

function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
};

function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  };
};

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

// String literal types ex 7

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  };
  return 'Teaching History';
};

teachClass('Math');
teachClass('History');
