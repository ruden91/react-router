import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
  const query = queryString.parse(location.search);
  console.log(query);
  
  return (
    <div>
      About {match.params.name}
    </div>
  )
}

export default About;
