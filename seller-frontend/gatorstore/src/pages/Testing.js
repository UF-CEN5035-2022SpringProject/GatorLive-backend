import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import GoogleLogin from 'react-google-login';

document.addEventListener("DOMContentLoaded", function(){
    const loginCode = GetUserCode('code');
    
    // "Frontend will call a backend API to pass the code ":.
    //API call with this loginCode here 
});

function GetUserCode(parameterName) { // get whatever is after '?' on the URL
  const rawQuery = window.location.search;
  const urlParams = new URLSearchParams(rawQuery);
  const loginCode = urlParams.get(parameterName);
  return loginCode;
}


export default function Testing() {
    return (
        <div className="RootFlexContainer">
            <Header />
            <div style={{padding: 20}}>
                You made it here. Now pass the code in the URL to the backend! The code is: {GetUserCode('code')}
            </div>
            <Footer />
        </div>
    );
}