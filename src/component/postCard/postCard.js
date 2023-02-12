import { useEffect, useState } from 'react';
import { getAuthor } from '../../API/api';
import './postCard.css';

function PostCard(props) {

  const post = props.post;

  const [author, setAuthor] = useState();

  useEffect(() => {
    if (post && post._links)
      getAuthor(post._links.author[0].href).then((response) => {
        setAuthor(response.data);
      });
  }, []);

  return (
    <div className='card'>
      <img className='postImg' src={post.jetpack_featured_media_url} />
      <div className='content'>
        <h1 className='title' dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>
        <span>
          published on <strong>{post.date.substring(0, 10)}</strong> by <strong><a href={author && author.link} target='_blank' className='author'>{author && author.name}</a></strong>
        </span>
        <div className='excerpt' dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
        <a className='readMore' href={post.link} target="_blank">Read More...</a>
      </div>
    </div>
  );
}

export default PostCard;
