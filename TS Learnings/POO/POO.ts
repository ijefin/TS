class User {
  names: string;
  age: number;

  constructor(names: string, age: number) {
    this.names = names;
    this.age = age;
  }

  showInfo = () => {
    console.log(`Your name: ${this.names}\nYour age: ${this.age}`);
  };
}

const Jeff = new User("jefferson", 23);

Jeff.showInfo();

const Anna = new User("Anna", 22);

Anna.showInfo();
