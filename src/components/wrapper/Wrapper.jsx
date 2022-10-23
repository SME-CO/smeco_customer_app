import React from "react";
import "./style.css";
import {
  MdSchedule,
  MdSupervisorAccount,
  MdHail,
  MdVolunteerActivism,
} from "react-icons/md";

const Wrapper = () => {
  const data = [
    {
      cover: (
        <center>
          <MdVolunteerActivism size="55px" color="White" />
        </center>
      ),
      title: "All island Customers",
      decs: "We offer a service for  all island customers .",
    },
    {
      cover: (
        <center>
          <MdHail size="60px" color="White" />
        </center>
      ),
      title: "Connect All the merchants",
      decs: "Smeco Connects All the Small medium Enterprise merchants ",
    },
    {
      cover: (
        <center>
          <MdSupervisorAccount size="60px" color="White" />
        </center>
      ),
      title: "Keep more loyal customers ",
      decs: "Smeco Keeps and connect more loyal customers",
    },
    {
      cover: (
        <center>
          <MdSchedule size="70px" color="White" />
        </center>
      ),

      title: "24/7 Support ",
      decs: "Smeco has a full time service and update offerd frequently",
    },
  ];
  return (
    <>
      <section className="wrapper background">
        <div className="container grid2">
          {data.map((val, index) => {
            return (
              <div className="product" key={index}>
                <div className="img icon-circle">
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
