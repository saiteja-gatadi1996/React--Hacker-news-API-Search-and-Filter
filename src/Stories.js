import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
  const { isLoading, hits, removeButton } = useGlobalContext();
  console.log(isLoading);

  if (isLoading) {
    return <div className='loading'></div>;
  }
  return (
    <section>
      {hits.map((hit) => {
        console.log(hit);
        const { objectID, title, num_comments, url, points, author } = hit;
        return (
          <article className='story' key={objectID}>
            <h4 className='title'>{title}</h4>
            <p className='info'>
              {points} by <span>{author} | </span>
              {num_comments}
            </p>
            <div>
              <a href={url} target='_blank' className='read-link'>
                read more
              </a>
              <button
                className='remove-btn'
                onClick={() => removeButton(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
