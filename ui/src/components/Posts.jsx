import React from 'react'
import { useState } from 'react'
import PostItem from './PostItem'
import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'

const DUMMY_POSTS=[
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'this is the title for the very first page on this blog',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt quia, ad fuga voluptatem ut eligendi quod esse impedit reiciendis debitis maiores, rerum suscipit facere animi odio sequi et accusantium?',
        authorID: 3
    },
    {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'science',
        title: 'this is the title for the very second page on this blog',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt quia, ad fuga voluptatem ut eligendi quod esse impedit reiciendis debitis maiores, rerum suscipit facere animi odio sequi et accusantium?',
        authorID: 5
    },
    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'weather',
        title: 'this is the title for the very third page on this blog',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt quia, ad fuga voluptatem ut eligendi quod esse impedit reiciendis debitis maiores, rerum suscipit facere animi odio sequi et accusantium?',
        authorID: 11
    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'farming',
        title: 'this is the title for the very last page on this blog',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt quia, ad fuga voluptatem ut eligendi quod esse impedit reiciendis debitis maiores, rerum suscipit facere animi odio sequi et accusantium?',
        authorID: 13
    }
]


const Posts = () => {
    const[posts,setPosts]=useState(DUMMY_POSTS)
  return (
    <section className='posts'>
        {
            posts.map(({id,thumbnail,category,title,desc,authorID})=> <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} authorID={authorID} desc={desc}/>)
        }
            
        

    </section>


  )
}

export default Posts
