const Button = ({ children, handler }) => {
  return (
    <button
      className='text-white px-3 py-2 rounded shadow'
      id='increment'
      onClick={handler}
      style={{
        background: children === 'Increment' ? '#818cf8' : '#F67171',
      }}
    >
      {children}
    </button>
  );
};
export default Button;
