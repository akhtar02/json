




const container = document.querySelector ('.blogs')
const searchForm = document.querySelector('.search')

const renderPosts = async (term) => {
    
    let uri = ' http://localhost:3000/posts?_sort=likes&_order=desc';
    if (term) {
        uri += `&q=${term}`
      }

    const res = await fetch(uri);
    const posts = await res.json();
    
    let templete = '';
    posts.forEach(post => {
        templete += `
        <div class="post">
        <h2> ${post.title}</h2>
        <small>${post.likes} Likes</small>
        <p>${post.body.slice(0, 200)}</p>

        <a href="/detials.html?id=${post.id}"> Read more... </a>
        </div>
        `
    })


    container.innerHTML = templete;
}

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    renderPosts(searchForm.term.value.trim());
  })

window.addEventListener('DOMContentLoaded', () => renderPosts());