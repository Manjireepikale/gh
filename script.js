document.addEventListener('DOMContentLoaded', function () {
    // Replace these sample data with your actual GitHub user data and repository information
    const userData = {
        avatar_url: 'https://placekitten.com/150/150', // Replace with your avatar URL
        username: 'JOHN DEO',
        bio: 'oriendeo',
        twitter :"https://twitter.com/john_deo",

        repos: 10,
        followers: 20,
        following: 5,
    };

    let repositories = [
        { name: 'Heros', description: 'heros description goes here' , Text:'javascript angular angularjs'  },
        { name: 'Heros', description: 'heros description goes here', Text:'javascript angular angularjs'  },
        { name: 'Heros', description: 'heros description goes here' , Text:'javascript angular angularjs'  },
        { name: 'Heros', description: 'heros description goes here' , Text:'javascript angular angularjs'  },


        // Add more repositories as needed
    ];

    // Update profile information
    document.getElementById('avatar').style.backgroundImage = `url(${userData.avatar_url})`;
    document.getElementById('username').innerText = userData.username;
    document.getElementById('bio').innerHTML = '<i class="fa fa-map-marker me-1" aria-hidden="true"></i>'+userData.bio;
    document.getElementById('twitter').innerText = userData.twitter;



    document.getElementById('repos').innerText = userData.repos;
    document.getElementById('followers').innerText = userData.followers;
    document.getElementById('following').innerText = userData.following;


    const reposContainer = document.getElementById('repos');

    // let card = repositories.map(data => console.log(data))
//     repositories.forEach(repo => {
//         const repoCard = document.createElement('div');
//         repoCard.classList.add('repo-card');
//         repoCard.innerHTML = `
//             <h3>${repo.name}</h3>
//             <p>${repo.description}</p>
//             <p >${repo.Text}</p>

//         `;
//         reposContainer.appendChild(repoCard);
//         let currentPage = 1; // Initial page

// function navigate(direction) {
//     if (direction === 'next' && currentPage < 10) {
//         currentPage++;
//     } else if (direction === 'back' && currentPage > 1) {
//         currentPage--;
//     }

//     // Update the page number
//     updatePageNumber();
// }

// function updatePageNumber() {
//     document.getElementById('pageNumber').innerText = currentPage;
// }

//     });
});



'use-strict';

$(()=>
{
    let myUserData =
    {
        avatar_url  : 'https://placekitten.com/150/150',
        username    : 'JOHN DEO',
        bio         : 'oriendeo',
        twitter     :   "https://twitter.com/john_deo",
        repos       : 10,
        followers   : 20,
        following   : 5,
    };

    let repositories =
    [
        { name: 'Heros', description: 'heros description goes here' , button1: 'javascript', button2: 'angular', button3:'angularjs'},
        { name: 'Heros', description: 'heros description goes here', button1: 'javascript', button2: 'angular', button3:'angularjs'},
        { name: 'Heros', description: 'heros description goes here', button1: 'javascript', button2: 'angular', button3:'angularjs'},
        { name: 'Heros', description: 'heros description goes here' , button1: 'javascript', button2: 'angular' ,button3:'angularjs'},
        { name: 'Heros', description: 'heros description goes here' , button1: 'javascript', button2: 'angular',button3:'angularjs'},
        { name: 'Heros', description: 'heros description goes here', button1: 'javascript', button2: 'angular',button3:'angularjs'},
        { name: 'Heros', description: 'heros description goes here', button1: 'javascript', button2: 'angular',button3:'angularjs'},
        { name: 'Heros', description: 'heros description goes here', button1: 'javascript', button2: 'angular',button3:'angularjs'},
        
        

    ];

    $('#meadia').html(repositories.map(({name,description,button1,button2,button3}) => `<div>
        <div class="title ">
            <h3 class="text-primary">${name}</h3>
        </div>
        <div class="des mt-2 mb-2">${description}</div>
        <div class="button d-flex g-2">
            <button class="btn btn-info btn-sm rounded text-white">${button1}</button>
            <button class="btn btn-info btn-sm rounded text-white">${button2}</button>
            <button class="btn btn-info btn-sm rounded text-white">${button3}</button>

        </div>
    </div>`)
    .join(''));
});