// yang ni yang search bar tu 
function searchPosts(event) {
    event.preventDefault();
  
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const posts = document.querySelectorAll(".post");
    let found = false; 
  
    posts.forEach((post) => {
      const title = post.querySelector("h2").innerText.toLowerCase();
      const content = post.querySelector("p").innerText.toLowerCase();
  
      if (title.includes(searchInput) || content.includes(searchInput)) {
        post.style.display = "block";
        found = true; 
      } else {
        post.style.display = "none";
      }
    });
  
    // no result tpi mcm tk jdi
    const noResults = document.getElementById("noResults");
    noResults.style.display = found ? "none" : "block";
  }
  