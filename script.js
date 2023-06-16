function handleGoogleLogin() {
    google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID',
      callback: handleGoogleSignIn
    });
  
    google.accounts.id.prompt();
  }
  
  function handleGoogleSignIn(response) {
    if (response.credential) {
      const idToken = response.credential;
  
      // Send the ID token to the server for verification and further processing
      console.log('Google ID Token:', idToken);
    }
  }
  