import MoonLoader from 'react-spinners/MoonLoader';

function LoadingSpinner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <MoonLoader size={20} />
    </div>
  );
}

export default LoadingSpinner;
