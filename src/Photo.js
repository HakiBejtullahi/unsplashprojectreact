import React from 'react';

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <figure className='photo-container'>
      <img src={regular} alt={alt_description} className='photo' />
      <div className='photo-info'>
        <div>
          <h4>{name}</h4>
          <p>Likes: {likes}</p>
        </div>
        <a href={portfolio_url} target='_blank'>
          <img src={medium} alt={name} className='user-img' />
        </a>
      </div>
    </figure>
  );
};

export default Photo;
