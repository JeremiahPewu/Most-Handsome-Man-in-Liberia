function searchFunction() {
    var input, filter, containers, names, i;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    containers = document.getElementsByClassName('container');
    var noResultMessage = document.getElementById('noResultMessage');

    // Flag to track if any results are found
    var foundResult = false;

    // Loop through all containers to find matching names
    for (i = 0; i < containers.length; i++) {
        names = containers[i].getElementsByClassName('name');
        if (names.length > 0) {
            if (names[0].innerText.toUpperCase().indexOf(filter) > -1) {
                // If the name matches the filter, display the container
                containers[i].style.display = "";
                foundResult = true; // Set flag to true as result found
            } else {
                // If no match, hide the container
                containers[i].style.display = "none";
            }
        }
    }

    // Display no result message if no matching names found
    if (!foundResult) {
        noResultMessage.style.display = "block";
    } else {
        noResultMessage.style.display = "name not found";
    }
}




let isFollowing = false;
let followerCount = 0;

function toggleFollow() {
    if (isFollowing) {
        followerCount--;
        document.getElementById('followerCount').innerText = followerCount;
        document.getElementById('followerButton').querySelector('button').innerText = 'Follow';
        isFollowing = false;
    } else {
        followerCount++;
        document.getElementById('followerCount').innerText = followerCount;
        document.getElementById('followerButton').querySelector('button').innerText = 'Following';
        isFollowing = true;
    }
}







