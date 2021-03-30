

const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.detials');

 const renderDetails = async () => {
 const res = await fetch('http://localhost:3000/posts/' + id);
 const post = await res.json();

     console.log(post)
     
  const templete = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
  `
    container.innerHTML = templete;
  }



 window.addEventListener('DOMContentLoaded', renderDetails);