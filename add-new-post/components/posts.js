"use client";
import { formatDate } from '@/lib/format';
import LikeButton from './like-icon';
import { likePost } from '@/actions/server-actions';
import { useOptimistic } from 'react';


function Post({ post,action }) {
  return (
    <article className="post">
      <div className="post-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form action={action.bind(null,post.id)} className={post.isLiked ? 'liked':''}>
            <LikeButton />
            </form>

          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {

  const [optimisticPosts,updateOptimisticPosts]=useOptimistic(posts,(prevPost,updatedPostId)=>{
    const index=prevPost.findIndex(post=>post.id===updatedPostId)
    if(index===-1){
      return prevPost
    }
    const updatedPost={...prevPost[index]};
    updatedPost.likes=updatedPost.likes+ (updatedPost.isLiked ? -1 : 1)
    updatedPost.isLiked=!updatedPost.isLiked
    const newPosts=[...prevPost]
    newPosts[index]=updatedPost;
    return newPosts
  })
  
  if (!optimisticPosts ||optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  async function handleLike(postId) {
    updateOptimisticPosts(postId);
    await likePost(postId);
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} action={handleLike} />
        </li>
      ))}
    </ul>
  );
}
