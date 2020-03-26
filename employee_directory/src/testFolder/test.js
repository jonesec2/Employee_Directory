// array = [
//    {
//       "id": 1,
//       "firstName": "John",
//       "lastName": "Smith",
//       "position": "Technician",
//       "contractor": 1,
//       "management": 0
//    },
//    {
//       "id": 2,
//       "firstName": "Brianna",
//       "lastName": "Sans",
//       "position": "Tester",
//       "contractor": 0,
//       "management": 1
//    },
//    {
//       "id": 3,
//       "firstName": "Corbin",
//       "lastName": "Dallas",
//       "position": "Technician",
//       "contractor": 1,
//       "management": 0
//    },
//    {
//       "id": 4,
//       "firstName": "Boin",
//       "lastName": "Kim",
//       "position": "Tester",
//       "contractor": 0,
//       "management": 1
//    }
// ]


// console.log(array.map())

const mock = [
   {
     name: 'Bob',
     age: 20,
     include: true,
   },
   {
     name: 'Frank',
     age: 30,
     include: false,
   },
 ];
 const data = mock.filter(guy => guy.include === true).map(guy => guy.name);
 console.log(data);