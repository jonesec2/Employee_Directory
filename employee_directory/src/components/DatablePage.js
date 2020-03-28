import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
   const data = {
      columns: [
         {
            label: '#',
            field: 'id',
            sort: 'asc',
            width: 150
         },
         {
            label: 'First Name',
            field: 'firstName',
            sort: 'asc',
            width: 200
         },
         {
            label: 'Last Name',
            field: 'lastName',
            sort: 'asc',
            width: 200
         },
         {
            label: 'Position',
            field: 'position',
            sort: 'asc',
            width: 200
         },
         {
            label: 'Contractor',
            field: 'contractor',
            sort: 'asc',
            width: 200
         },
         {
            label: 'Management',
            field: 'management',
            sort: 'asc',
            width: 200
         }
      ],
      rows: [
         {
            id: 1,
            firstName: "John",
            lastName: "Smith",
            position: "Technician",
            contractor: 1,
            management: 0
         },
         {
            id: 2,
            firstName: "Brianna",
            lastName: "Sans",
            position: "Tester",
            contractor: 1,
            management: 0
         },
         {
            id: 3,
            firstName: "Corbin",
            lastName: "Dallas",
            position: "Technician",
            contractor: 0,
            management: 1
         },
         {
            id: 4,
            firstName: "Boin",
            lastName: "Kim",
            position: "Tester",
            contractor: 0,
            management: 1
         },
         {
            id: 5,
            firstName: "Grog",
            lastName: "Strongjaw",
            position: "Developer",
            contractor: 1,
            management: 0
         },
         {
            id: 6,
            firstName: "Genevieve",
            lastName: "Lavorre",
            position: "Developer",
            contractor: 0,
            management: 1
         },
         {
            id: 7,
            firstName: "Polly",
            lastName: "Darton",
            position: "Developer",
            contractor: 1,
            management: 0
         },
         {
            id: 8,
            firstName: "Francis",
            lastName: "Frito",
            position: "Tester",
            contractor: 1,
            management: 0
         }
      ]
   };

   return (
      <MDBDataTable
         striped
         bordered
         large
         data={data}
      />
   );
}

export default DatatablePage;