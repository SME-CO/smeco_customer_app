import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import faqImg from "../../assets/faq.png";
import Footer from "../../components/Footer";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ApiIndex from "../../api/index";
import faq from "../../api/faq";


export default function FAQ() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      let formData = {
        message: data.get("message"),
      };

      let response = await ApiIndex.FaqApi.createFaq(formData);
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }

  };

  

  const [faqList, setFaqList] = useState([]);

  const getFaq = async () => {
    try {
      const response = await ApiIndex.FaqApi.getFaq();
      setFaqList(response.data);
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getFaq();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-[1240px] mx-auto flex md:flex-cols-2 py-16 px-4 pt-24">
        <div>
          <div className="mx-auto w-full max-w-[1000px] rounded-2xl bg-white p-2 pt-12">



            {
              faqList && faqList
                .map((faq, index) => (
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <div className="pb-2">
                          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#03045E] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#FF8C32] focus:outline-none focus-visible:ring-opacity-75">
                            <span>{faq.message}</span>
                            <ChevronUpIcon
                              className={`${open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-[#03045E]`}
                            />
                          </Disclosure.Button>
                        </div>

                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                        <span>{faq.message}</span>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))
            }



          </div>
        </div>
        <div>
          <img className="pt-12" src={faqImg} alt="" />
        </div>
      </div>
      <div className="pl-24 pr-12">
        <h1>Ask your questions here....</h1>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            className="bg-[#F0F8FF] font-white align-items-center"
            name="message"
            fullWidth
          ></TextField>
          <div className="pt-3">
            <button className="border-none px-4 py-1">SUBMIT</button>
          </div>
        </Box>
      </div>
      <Footer />
    </div>
  );
}
