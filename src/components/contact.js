import React, { useState } from "react";
import "./contact.scoped.css";
import { useForm } from "react-hook-form";
import loading from "./../assets/loading.svg";
import axios from "axios";
import Config from "./../Config";

import emailIcon from "../assets/email.svg";

function Contact({ toast }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [comName, setComName] = useState("");
  const [title, setTitle] = useState("");
  const [isLoading, updateLoading] = useState(false);
  const [textData, updateTextData] = useState("");
  const {
    register,

    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="header">Contact Us</div>
        <div className="contactform">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <div className="label">Email</div>
              <input
                type="email"
                value={email}
                {...register("email", {
                  required: "Invalid Email",
                })}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p>{errors.email && errors.email.message}</p>
              <div className="label">Full Name</div>
              <input
                placeholder="Enter name"
                type="text"
                {...register("name", {
                  required: "This Field Cannot be Empty",
                })}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p>{errors.name && errors.name.message}</p>
              <div className="label">Company Name</div>
              <input
                placeholder="Enter company name"
                type="text"
                {...register("comName", {
                  required: "This Field Cannot be Empty",
                })}
                value={comName}
                onChange={(e) => setComName(e.target.value)}
              />
              <p>{errors.comName && errors.comName.message}</p>
              <div className="label">Title</div>
              <input
                {...register("title", {
                  required: "This Field Cannot be Empty",
                })}
                placeholder="Enter title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <p>{(errors.title && errors.title.message) || " "}</p>
              <a href="#">
                <img src={emailIcon} style={{ marginRight: "5px" }} />
                admin@kaxynetwork.com
              </a>
            </div>
            <div>
              <div className="label">Your message</div>
              <textarea
                name=""
                {...register("message", {
                  required: "This Field Cannot be Empty",
                })}
                placeholder="Enter your message"
                onBlur={(e) => {
                  updateTextData(e.target.value);
                }}
              />
              <p>{(errors.message && errors.message.message) || " "}</p>
              <button
                className="coolBeans"
                type="submit"
                /* disabled={isLoading} */
                onClick={async (e) => {
                  if (Object.keys(errors).length > 0) {
                    return toast.error("Please fill the required fields!");
                  }
                  /* e.preventDefault(); */
                  updateLoading(true);

                  let resp = await axios.post(Config.api.contact, {
                    email,
                    name,
                    company: comName,
                    title,
                    message: textData,
                  });
                  toast(resp.data.message);
                  updateLoading(false);
                }}
              >
                {isLoading ? (
                  <img src={loading} style={{ height: "20px" }} />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
