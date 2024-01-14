import axios from "axios";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const sendMail = () => {
    axios
      .get("http://localhost:4000", {
        params: {
          email,
          subject,
          message,
        },
      })
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("failure");
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Recepient Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Subject"
        onChange={(e) => setSubject(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button onClick={sendMail}>Send Email</button>
    </div>
  );
}

export default App;
