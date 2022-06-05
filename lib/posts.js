import fetch from 'node-fetch'

const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

export const getAllPostsData = async () => {
  const res = await fetch(new URL(apiUrl))
  const posts = await res.json()
  return posts
}

//getStaticPaths---------------------
export const getAllPostIds = async () => {
  const res = await fetch(new URL(apiUrl))
  const posts = await res.json()

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    }
  })
}

export const getPostData = async (id) => {
  const res = await fetch(new URL(`${apiUrl}/${id}`))
  const post = await res.json()
  return post
}
//getStaticPaths------------------------

// import fetch from 'node-fetch'

// const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

// export async function getAllPostsData() {
//   const res = await fetch(new URL(apiUrl))
//   const posts = await res.json()
//   return posts
// }

// export async function getAllPostIds() {
//   const res = await fetch(new URL(apiUrl))
//   const posts = await res.json()

//   return posts.map((post) => {
//     return {
//       params: {
//         id: String(post.id),
//       },
//     }
//   })
// }

// export async function getPostData(id) {
//   const res = await fetch(new URL(`${apiUrl}/${id}/`))
//   const post = await res.json()
//   // return {
//   //   post,
//   // };
//   return post
// }
