import React from "react";
import Header from "@/components/layout/common/Header"
import HomePage from "@/components/modules/home/HomePage";
import Footer from "@/components/layout/common/Footer";

const page: React.FC = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
};

export default page;
