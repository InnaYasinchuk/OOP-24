"use strict";

//1,2,3

class User {
  #name;
  constructor(name, login, age) {
    this.#name = name;
    this.login = login;
    this.age = age;
  }
  getName(isAdmin) {
    if (isAdmin === false) {
      return "Permission denied";
    }
    return this.#name != "" ? this.#name : this.login;
  }
  changeName(name, password) {
    return password === "123"
      ? `Name changed from ${this.#name} to ${name}`
      : "Permission denied";
  }
}

const user1 = new User("Mike", "MK_18", 18);
const user2 = new User("", "NRG", 22);

console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);

console.log(user1.getName(true));
console.log(user2.getName(true));
console.log(user2.getName(false));

console.log(user1.changeName("Bill", "123"));
console.log(user1.changeName("Bill", "143"));

//4

class Admin extends User {
  #isAdmin;
  constructor(name, login, age, isAdmin) {
    super(name, login, age);
    this.#isAdmin = true;
  }

  getUserName(user) {
    return user.getName(this.#isAdmin);
  }
}

const admin = new Admin("Bob", "MK_18", 18);

console.log(admin.getUserName(user1));

//5

class UserS {
  #phone;
  constructor(name, phone) {
    this.name = name;
    this.#phone = phone;
  }
  getPhone(isAdmin) {
    let secretPhone = this.#phone.split("");

    secretPhone.splice(4, 6, "*", "*", "*", "*", "*", "*");
    secretPhone = secretPhone.join("");

    return isAdmin ? console.log(this.#phone) : console.log(secretPhone);
  }
}

const user3 = new UserS("Alex", "099-999-99-99");
const user4 = new UserS("Tom", "088-888-88-88");

user3.getPhone(true);
user4.getPhone(false);
