import React, { useState } from 'react';

const Abstract = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
      <input name="title" value={formData.title} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Abstract;
