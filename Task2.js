async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Error with loading data');
  }
  const posts = await response.json();
  return posts;
}

// function 1
async function getAllIds() {
  const posts = await fetchPosts();
  return posts.map(post => post.id);
}

// function 2
async function getPostsWithTitleContainingNam() {
  const posts = await fetchPosts();
  return posts.filter(post => post.title.toLowerCase().includes('nam'));
}

// function 3
async function getIdAndTitleObjects() {
  const posts = await fetchPosts();
  return posts.map(post => ({
    id: post.id,
    title: post.title
  }));
}

// function 4
async function getSumOfIds() {
  const posts = await fetchPosts();
  return posts.reduce((sum, post) => sum + post.id, 0);
}

// testing the functions

getAllIds()
  .then(ids => console.log('IDs:', ids))
  .catch(error => console.error(error));

getPostsWithTitleContainingNam()
  .then(filteredPosts => console.log('Posts with "nam" in title:', filteredPosts))
  .catch(error => console.error(error));

getIdAndTitleObjects()
  .then(mappedPosts => console.log('Posts (id and title):', mappedPosts))
  .catch(error => console.error(error));

getSumOfIds()
  .then(sum => console.log('Sum of IDs:', sum))
  .catch(error => console.error(error));
