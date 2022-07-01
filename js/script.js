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
The showPage function will take in a list(array) of people objects and a page parameter where it will show 9 people per page dynamically
*/
function showPage(list, page) {
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;
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
         image.src = `https://randomuser.me/api/portraits/women/${i}.jpg`;
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
The addPagination function will add buttons to the bottom of the page according to how many people are in the list. The showPage function is also utilized in this function.
*/
function addPagination(list) {
   let paginationButtonsNeeded = Math.round(list.length / 9);
   let unorderedList = document.querySelector('.link-list');
   unorderedList.innerHTML = '';
   for (let i = 0; i < paginationButtonsNeeded; i++) {
      let listItem = document.createElement('li');
      let paginationButton = document.createElement('button');
      paginationButton.type = 'button';
      paginationButton.innerHTML = i + 1;
      listItem.appendChild(paginationButton);
      unorderedList.appendChild(listItem);
   }
   let activeButton = document.querySelector('.link-list li button');
   activeButton.className = 'active';
   unorderedList.addEventListener('click', (e) => {
      let activeElement = document.querySelector(".active");
      activeElement.classList.remove("active");
      activeButton.classList.remove("active");
      if (e.target.matches('button') && activeElement) {
         e.target.className = "active";
         let page = e.target.innerHTML;
         showPage(list, page);
          
      }
      
   })
   
}


// Call functions
showPage(data, 1);
addPagination(data);