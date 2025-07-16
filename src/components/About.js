import React from 'react';
import '../styles.css';

const About = ({ }) => {
  return (
    <div className="two-column-container">
      <div className="text-column">
        <h2>Little Lemon</h2>
        <h6>Chicago</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.</p>
      </div>
      <div className="image-column">
        <div className="image-overlay-wrapper">
          <img src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg" alt="Room"  className="image-bottom" />
          <img src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?cs=srgb&dl=pexels-reneterp-1581384.jpg&fm=jpg&_gl=1*1odckvl*_ga*MTM3MjExODU1OC4xNzQ3OTk2NDQx*_ga_8JE65Q40S6*czE3NTI1NTMxNTkkbzQkZzEkdDE3NTI1NTMyNjAkajMwJGwwJGgw" alt="Restaurant" className="image-top" />
        </div>
      </div>
    </div>
  );
};

export default About;
