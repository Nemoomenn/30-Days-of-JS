// object literls
const user = {
  name: 'crystal',
  age: 54,
  email: 'crystal@gmail.com',
  location: 'Paris',
  blogs: ['why to code?', 'why to hack?'],
  login() {
    console.log('The suer logged in.');
  },
  logout() {
    console.log('The suer logged put.');
  },
  logBlogs() {
    this.blogs.forEach((blog) => console.log(blog));
  },
};

console.log(user);
console.log(user.name);
user.logBlogs();

// Math Object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.8;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

console.log(Math.random());
console.log(Math.random() * 100);

// primitive values
const Barcelone = 0;
let RealMadrid = Barcelone;

RealMadrid += 2;
console.log(`Real Madrid: ${RealMadrid} Barcelona: ${Barcelone}`);

const names = ['tony', 'leam', 'nemo'];
const superUsers = names;

superUsers.push('tony');
console.log(superUsers, names);
