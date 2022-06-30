/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   let startIndex = (page * list.length) - list.length;
   let endIndex = page * list.length;
   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (let i = 0; i <= list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         let listItem = document.createElement('li');
         listItem.className = 'student-item cf';
         let divContainer = document.createElement('div');
         divContainer.className = 'student-details';
         let image = document.createElement('img');
         image.className = 'avatar';
         image.src = 'https://randomuser.me/api/portraits/women/25.jpg';
         image.alt = 'Profile Picture';
         let header = document.createElement('h3');
         header.innerHTML = `${list[i].name.first} ${list[i].name.last}`;
         let email = document.createElement('span');
         email.className = 'email';
         email.innerHTML = `${list[i].email}`;
         divContainer.appendChild(image);
         divContainer.appendChild(header);
         divContainer.appendChild(email);
         let divContainerTwo = document.createElement('div');
         divContainerTwo.className = 'joined-details';
         let joined = document.createElement('span');
         joined.className = 'date';
         joined.innerHTML = `${list[i].registered.date}`;
         divContainerTwo.appendChild(joined);
         listItem.appendChild(divContainer);
         listItem.appendChild(divContainerTwo);
         studentList.appendChild(listItem);
         
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage(data, 1);