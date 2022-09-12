import React from 'react'
import Navbar from "../../components/Navbar";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import faqImg from '../../assets/faq.png'
import Footer from "../../components/Footer";



export default function FAQ() {
  return (
    <div>
      <Navbar />
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 py-16 px-4 pt-24'>
        <div>

          <div className="mx-auto w-full max-w-[1000px] rounded-2xl bg-white p-2 pt-12">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#03045E] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#FF8C32] focus:outline-none focus-visible:ring-opacity-75">
                    <span>WHAT ARE YOUR BUSINESS GOALS??</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-[#03045E]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                    Our main goal is to enhance the sales of Small and medium enterprises. And provide
                    customers a great exposure to the offers, rewards and the discounts provided by the
                    Small and Medium enterprises.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#03045E] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#FF8C32] focus:outline-none ">
                    <span>WHAT MAKES YOUR CUSTOMERS FEEL VALUED??</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-[#03045E]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                    We need our customers to choose the best decision out of many available
                    products with offers and discounts. Making their decision capacity easy.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#03045E] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#FF8C32] focus:outline-none ">
                    <span>WHAT KIND OF CUSTOMER DATA DO YOU WANT TO COLLECT??</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-[#03045E]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                    We are collecting the purchase data related to registered customers and based on
                    that we recommend them offers and discounted products.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#03045E] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#FF8C32] focus:outline-none ">
                    <span>DO YOU OFFER TECHNICAL SUPPORT?</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-[#03045E]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                    No.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#03045E] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#FF8C32] focus:outline-none ">
                    <span>DO YOU PROVIDE DELIVERYY SERVICES?</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-[#03045E]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                    No. Still we didn't think of providing delivery services. Since our main goal
                    is to provide the offers and discounts for the products.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#03045E] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#FF8C32] focus:outline-none ">
                    <span>HOW CAN I JOIN THIS PLATFORM?</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-[#03045E]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                    All you need to do is register as the customer by using
                    phone number, user name and password.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#03045E] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#FF8C32] focus:outline-none ">
                    <span>DO YOU PROVIDE DELIVERYY SERVICES?</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-[#03045E]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                    No.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#03045E] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#FF8C32] focus:outline-none ">
                    <span>WHAT KIND OF CUSTOMER DATA DO YOU WANT TO COLLECT??</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-[#03045E]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                    We are collecting the purchase data related to registered customers and based on
                    that we recommend them offers and discounted products.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <div>
          <img className='pt-12' src={faqImg} alt="" />
        </div>
      </div>
      <div className='pl-24 pr-12'>
        <h1>Ask your questions here....</h1>
      <textarea className='bg-[#F0F8FF] font-white align-items-center' name="" id="" cols="150" rows="3"></textarea>
      <div>
      <button className='border-none px-4 py-1'>SUBMIT</button>
      </div>
      </div>
      <Footer />
    </div>
  )
}


