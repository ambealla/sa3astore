import React from "react";

import Emphasis from "./components/Emphasis";
import Footer from "./components/Footer";
import ListProducts from "./components/ListProducts";
import Menu from "./components/Menu";
import Newsletter from "./components/Newsletter";
import Slider from "./components/Slider";
import ModalContact from "./components/ModalContact";
import Widget from "./components/benefited/Widget";
import Widget2 from "./components/benefited/Widget2";
import ContactForm from "./components/ContactForm";
import { Button, Image } from "react-bootstrap";

export default function Principal() {
  const handleWhatsAppClick = () => {
    // Replace `YOUR_PHONE_NUMBER` with your WhatsApp phone number
    window.open(`https://wa.me/212656676532`, '_blank');
  };
  return (
    <>
      <div className="bg-light">
        <Emphasis />
        <Menu />
      </div>

      <Widget2 />
           
      <ListProducts />
      <Widget />
   
      <ContactForm />
      <Footer />
    </>
  );
}
