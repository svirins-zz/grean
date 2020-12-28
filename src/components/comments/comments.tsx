import { Disqus } from 'gatsby-plugin-disqus'
import React from 'react';

export const Comments = ({ location, slug }: { location: string; slug: string }): JSX.Element => {
  const disqusConfig = {
    url: location,
    identifier: slug,
    // title: article.title,
    title: 'Addict.cf',
  };
  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', marginBottom: '2rem' }}>
      <Disqus config={disqusConfig} />
    </div>
  );
};
