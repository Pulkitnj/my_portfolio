import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import { Suspense } from "react";
import useAlert from "../hooks/useAlert";
import Alert from "./Alert";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formRef = useRef();
  const [isLoading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault(); //To Not reload the page after submitted
    setLoading(true);
    setCurrentAnimation("hit");
    //console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);

    emailjs
      .send(
        //import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        "service_s3o6fcj",
        //import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        "template_cd0j3ks",
        {
          from_name: form.name,
          to_name: "Pulkit",
          from_email: form.email,
          to_email: "1032211319@mitwpu.edu.in",
          message: form.message,
        },
        //import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        "_CfYAhHx1Jqf7tZ6r"
      )
      .then(() => {
        setLoading(false);
        showAlert({
          show: "true",
          text: "Message sent successfully",
          type: "success",
        });

        //To stop the animation after sending the message
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, 3000);

        //formRef.current.reset();
      })
      .catch((e) => {
        setLoading(false);
        setCurrentAnimation("idle");
        console.log(e);
        showAlert({
          show: "true",
          text: "Message not recieved",
          type: "danger",
        });
      });
  };

  return (
    <div className=" h-full">
      <section className="relative flex lg:flex-row justify-between flex-col max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
        {alert.show && <Alert {...alert} />}
        <div className="flex-1-min-w[50%] flex flex-col">
          <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-7 mt-14"
          >
            <label className="text-white font-semibold">
              Name
              <input
                type="text"
                required
                name="name"
                className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className=" text-white font-semibold">
              Email
              <input
                type="email"
                required
                name="email"
                className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-white font-semibold ">
              Your Message
              <textarea
                name="message"
                rows="4" 
                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-2.5 font-normal shadow-card"
                placeholder="Let me know what you want to say"
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <button
              className="text-white bg-gradient-to-r from-slate-800 to-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              type="submit"
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={0.2} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />
            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
    </div>
  );
}

export default Contact;
