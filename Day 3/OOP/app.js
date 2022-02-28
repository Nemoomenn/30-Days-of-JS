class User {
  // set up properties
  constructor(username){
    this.username = username;
  }

  login(){
    console.log(`${this.username} just logged in!`);
  }

  logout(){
    console.log(`${this.username} just logged out!`);
  }

}

class Admin extends User{
  constructor(username, title){
    super(username);
    this.title = title;
  }
}

const userOne = new User('Mario');
console.log(userOne);
userOne.login()
userOne.logout()


// the 'new' keyword
// 1 - It creates a new empty object {}
// 2 - It binds the value of 'this' to the new empty object
// 3 - It calls the constructor function to 'build' the object

