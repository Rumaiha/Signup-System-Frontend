import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    dob: '',
    gender: '',
    profileImage: null,
    coverImage: null
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setFormData({ ...formData, [name]: files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) form.append(key, value);
    });

    try {
      const res = await axios.post('http://localhost:5000/api/signup', form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
      <input type="date" name="dob" required onChange={handleChange} />
      <select name="gender" required onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <label>Profile Image:</label>
      <input type="file" name="profileImage" onChange={handleChange} />
      <label>Cover Image:</label>
      <input type="file" name="coverImage" onChange={handleChange} />
      <button type="submit">Signup</button>
      <p>{message}</p>
    </form>
  );
};

export default SignupForm;
