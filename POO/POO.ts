class User {
  name: string = "Jefferson";
  age: number = 23;

  showInfo = () => {
    console.log(`Your name: ${this.name}\nYour age: ${this.age}`);
  };
}

const Jeff = new User();

Jeff.showInfo();
