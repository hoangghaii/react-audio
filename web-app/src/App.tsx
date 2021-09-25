import { ToastContainer } from 'react-toastify';
import { AudioContainer } from 'src/components/container/AudioContainer';

function App() {
  return (
    <>
      <AudioContainer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
