import React from 'react';
import '../styles.css';

const testimonials = [
  {
    name: "Priya S.",
    feedback: "The food was absolutely amazing! Loved the ambience too.",
    image: "https://i.pravatar.cc/100?img=12"
  },
  {
    name: "Rahul M.",
    feedback: "Best biryani in town. Service was quick and friendly.",
    image: "https://i.pravatar.cc/100?img=7"
  },
  {
    name: "Anita K.",
    feedback: "Perfect spot for a weekend dinner. Highly recommend!",
    image: "https://i.pravatar.cc/100?img=20"
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.image} alt={item.name} />
            <p className="feedback">"{item.feedback}"</p>
            <p className="name">— {item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
