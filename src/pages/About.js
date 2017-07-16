import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
  const query = queryString.parse(location.search);
  const detail = query.detail === 'true';

  return (
    <div>
      About {match.params.name}
      {detail && 'detail: blablabla'}
    </div>
  )
}

export default About;
