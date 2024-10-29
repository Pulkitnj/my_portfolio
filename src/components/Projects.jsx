
import React from "react";
import { HeroParallax } from "./hero-parallax";
import { BrowserRouter as Router } from 'react-router-dom';

export function Projects() {
  return (
    <Router>
        <HeroParallax products={products} />
    </Router>
  ); 
}
export const products = [
  {
    title: "Paytm Project",
    link: "",
    thumbnail:
      "/websites/paytm.webp",
  },
  {
    title: "Medium",
    link: "",
    thumbnail:
      "/websites/medium.webp",
  },
  {
    title: "Trekkers",
    link: "https://trekkers.vercel.app/",
    thumbnail:
      "/websites/trekkers.png",
  },

  {
    title: "Travel Tinder",
    link: "https://traveltinder.vercel.app/",
    thumbnail:
      "/websites/traveltinder.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "User Management",
    link: "https://usermangemnt.netlify.app/",
    thumbnail:
      "/websites/usermanagement.png",
  },

  {
    title: "Todo App",
    link: "https://mytodo69.netlify.app ",
    thumbnail:
      "/websites/todo.png",
  },
  {
    title: "Expense Tracker",
    link: "https://expensenikalo.netlify.app",
    thumbnail:
      "/websites/expensetracker.png",
  },
  {
    title: "Portfolio Website",
    link: "https://pulkitjain.tech",
    thumbnail:
      "/websites/portfolio.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
