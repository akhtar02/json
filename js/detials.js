

const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.detials');
const deleteBtn =  document.querySelector('.delete')

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

  deleteBtn.addEventListener('click', async (e) => {
    const res = await fetch('http://localhost:3000/posts/' + id, {
        method : 'DELETE'
    });

    window.location.replace('/')
  })



 window.addEventListener('DOMContentLoaded', renderDetails);