// pages/examplePage.js (or your desired component)

import { useRouter } from 'next/router';

const ExamplePage = () => {
  const router = useRouter();
  const currentURL = router.asPath;

  // Function to check if the URL contains a specific string
  const checkURL = () => {
    if (currentURL.includes('/specific-path')) {
      return (
        <>
          <div>Component 1</div>
          <div>Component 2</div>
        </>
      );
    } else {
      return null; // Or return a different component or null if you don't want to render anything
    }
  };

  return (
    <div>
      {checkURL()} {/* Render components based on the URL */}
    </div>
  );
};

export default ExamplePage;
