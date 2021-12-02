import React from 'react';

const Navigation = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header>
      <div></div>

      <form onSubmit={handleSubmit}>
        <input type='text' />
      </form>
    </header>
  );
};

export default Navigation;
