const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('Couldn\'t fetch data');
      }
    });
    request.open("GET", resource);
    request.send();
  });
};

getTodos('books/harry.json').then((data) => {
  console.log('Promise 1 Resolved: ', data);
  return getTodos('books/rahat.json');
}).then((data) => {
  console.log('Promise 2 Resolved: ', data);
  return getTodos('books/toni.json');
}).then((data) => {
  console.log('Promise 3 Resolved: ', data);
}).catch((err) => console.log(err));

// getTodos("books/harry.json", (err, data) => {
//   console.log("fired!!!");
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//     getTodos("books/rahat.json", (err, data) => {
//       console.log("fired!!!");
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data);
//         getTodos("books/toni.json", (err, data) => {
//           console.log("fired!!!");
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(data);
//           }
//         });
//       }
//     });
//   }
// });

