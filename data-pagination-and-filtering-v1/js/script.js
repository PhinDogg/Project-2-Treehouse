/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

// import the data
//console.log(data);

const itemsPerPage = 9;


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/ 


function showPage(list, page) {
   const studentList = document.querySelector("ul[class='student-list']");
   console.log(studentList);

   studentList.innerHTML = "";

   startIdx = itemsPerPage * page - itemsPerPage;
   endIdx = itemsPerPage * page;

   if(endIdx > list.length) {
      endIdx = list.length;
   }

   for(let i = startIdx; i < endIdx; i++) {
      // Declare all the elements to dynamically insert
      let studentItem = document.createElement("LI");
      let studentDetails = document.createElement("DIV");
      let profilePicture = document.createElement("IMG");
      let studentName = document.createElement("H3");
      let studentEmail = document.createElement("SPAN");
      let joinedDetails = document.createElement("DIV");
      let dateJoined = document.createElement("span");

      // Set the proper class names
      studentItem.className = "student-item cf";
      studentDetails.className = "student-details";

      // Put in profile picture and its HTML properties
      profilePicture.className = "avatar";
      profilePicture.src = list[i].picture.large;
      profilePicture.alt = "Profile Picture";

      // Set the name
      studentName.innerHTML = list[i].name.first + " " + list[i].name.last;

      // Set the email
      studentEmail.className = "email";
      studentEmail.innerHTML = list[i].email;
      
      // Build first div
      studentDetails.append(profilePicture, studentName, studentEmail);
      
      // Set other details
      joinedDetails.className = "joined-details";
      dateJoined.className = "date";
      dateJoined.innerHTML = list[i].registered.date;

      // Add it all together and add to DOM
      joinedDetails.append(dateJoined);

      studentItem.append(studentDetails, joinedDetails);

      studentList.appendChild(studentItem);
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   let numPages = Math.ceil(data.length / itemsPerPage);

   const linkList = document.querySelector(".link-list");
   linkList.innerHTML = "";

   for(let i = 1; i <= numPages; i++) {
      let button = document.createElement("button");
      let listItem = document.createElement("li");
      button.innerHTML = i;
      button.type = "button";
      listItem.append(button);
      linkList.append(listItem);
   }

   let firstButton = document.querySelector("button");
   firstButton.className = "active";

   linkList.addEventListener('click', (e) => {
      
      if(e.target.type === "button") {
         //alert("button " + e.target.textContent + " was clicked!");
         
         activeButton = document.querySelector(".active");
         activeButton.removeAttribute("class");

         e.target.className = "active";

         showPage(list, parseInt(e.target.textContent));
      }
   });

}



// Call functions
showPage(data, 1);
addPagination(data);