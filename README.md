
---

<img align="left" src="client/src/icons/readingBook.svg" width="100" height="100" />

<div align="center" > 
<h1><b> Study-Room  </b></h1>  
<h3 align="right"><i> Chat, Talk, Study.... </i></h3>  
<i> Study, collaborate, conference ... over click of a button. </i>
</div> 


---

A fully functional 🚀 web application where students create/join rooms and communicate using text and audio channels. No registration required . The application connects peers using WebSockets and WebRTC (Coming Soon). .  

<h3> New Features </h3>

> <ul> 
> <li> Generate room ID and share with friends </li>
> <li> Directly connect to room with shared link, valid for 12 hours </li>
> <li> Better UI </li>  
> </ul>

<h3> Installation </h3> 


  Start client and server in different terminals

  ```bash 
  cd client 
  npm i 
  npm start
  ```

  ```bash
  cd server 
  cp .env.example .env
  npm i 
  npm start
  ```
  You are good to go !!!! . 
  
  `Note : The server uses a Twilio API (for TURN servers) for voice chat. Not required locally, because its a feature I am working on`
<hr> 

<h3> <u>Desktop and Mobile Views</u> </h3>

<div align="center"> 
  <div>
    
    The application is compatible with both desktop and mobile phones. 
    
  </div> 

</div>


<h3> Features </h3>

> <ul> 
> <li> Chat using text and voice channels </li>
> <li> Easy to use UI with everything on one screen</li>
> <li> Mobile Compatibility </li> 
> <li> Connect with multiple people by choosing unique room ids</li> 
> </ul>
  
<h3> Technologies Used </h3>

> <ul> 
> <li> Server - Nodejs </li>
> <li> Client - Reactjs </li>
> <li> Chat - WebSockets </li>
> <li> Voice - WebRTC (Still working on it) </li> 
> </ul>

<h3> The need of WebSockets and WebRTC ( short summary )</h3> 

> What's the best application level protocol for enabling a bidirectional communication channel(i.e both client and server can update each other at any time) ?. HTTP works fine when the client has to request data fewer times. HTTP opens up a connection and closes the connection as soon as it gets required response. In case of a chat application we continuously need to listen for data from server, one solution is keep requesting the server for data every few milliseconds, but its resource consuming for both the sides. The solution is WebSockets, it enables a full-duplex bidirectional communication, that is, the client is always ready to listen for data pushed by server. 
But WebSockets are still not peer to peer, in case of audio/video streaming between multiple peers, creating a direct peer to peer connection is a better option (because loads of data is being streamed), but this is also one of the most difficult things to do. WebRTC helps us create a direct peer to peer connetion. WebRTC is one of the most complex communication protocols because it tries all possible ways to create a peer - peer connection, if it still fails then the data is relayed via a TURN server. 

<hr> 
