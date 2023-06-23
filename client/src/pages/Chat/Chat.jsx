import React, {useEffect} from 'react'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';


const Chat = () => {
    useEffect(() => {
      (function(d, m) {
        var kommunicateSettings = {
          "appId": "26b9c85191f2ee68bb0cfe41dfd2140dc",
          "popupWidget": true,
          "automaticChatOpenOnNavigation": true
        };
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0];
        h.appendChild(s);
        window.kommunicate = m;
        m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
    }, []);

  return (
      <div className='home-container-1'>
          <LeftSidebar />
          <div className="home-container-2" style={{marginTop: "50px"}}>
              <h1 style={{fontWeight: "400"}}>This is our ChatBot</h1>
          </div>
      </div>
  )
}

export default Chat