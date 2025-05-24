import { useState } from "react"
import baseUrl from "../config.jsx";
import axios from "axios";

const FormComponent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const clickedSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = axios.post(`${baseUrl}/sendEmail`, {
                name,
                email,
                subject,
                message,
            });
            alert("I will contact you in a while");

            setName("");
            setEmail("");
            setSubject("");
            setMessage("");


        }
        catch (err) {
            console.log(`Error while sending the mail data:`, err);
        }
    }

    return (<div>

        <style>{`
        @media (max-width: 768px) {
          .main{
              width:auto;
           }
        }
        
        @media (min-width: 768px) {
           .main{
              width:45vw;
           }
        }
      `}</style>
        <div>
            <form className="main d-flex flex-column gap-4 " id="contact" onSubmit={(e) => clickedSubmit(e)}>
                <div className="d-flex flex-column gap-2" >
                    <label className="fw-semibold fs-5" style={{ fontSize: "18px", color: "#C7C7C7" }}>Name</label>
                    <input
                        style={{ backgroundColor: "#1A1A1A", color: "white", border: "none" }}
                        className="form-control p-2 rounded px-4 py-3"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="d-flex flex-column gap-2">
                    <label className="fw-semibold fs-5" style={{ fontSize: "18px", color: "#C7C7C7" }}>Email</label>
                    <input
                        style={{ backgroundColor: "#1A1A1A", color: "white", border: "none" }}
                        className="form-control p-2 rounded px-4 py-3"
                        type="text"
                        name="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>


                <div className="d-flex flex-column gap-2">
                    <label className="fw-semibold fs-5" style={{ fontSize: "18px", color: "#C7C7C7" }}>Subject</label>
                    <input
                        style={{ backgroundColor: "#1A1A1A", color: "white", border: "none" }}
                        className="form-control p-2 rounded px-4 py-3"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>

                <div className="d-flex flex-column gap-2">
                    <label className="fw-semibold fs-5" style={{ fontSize: "18px", color: "#C7C7C7" }}>Message</label>
                    <textarea
                        style={{ backgroundColor: "#1A1A1A", color: "white", border: "none" }}
                        className="form-control p-3 rounded px-4 py-3"
                        name="message"
                        placeholder="Enter your message here..."
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>


                <button type="submit" className="rounded-pill px-4 py-3 mt-4" style={{ fontSize: "16px", backgroundColor: "#D3E97A", width: "30%" }}>SUBMIT</button>
            </form>
        </div>
    </div>)
}


export default FormComponent;