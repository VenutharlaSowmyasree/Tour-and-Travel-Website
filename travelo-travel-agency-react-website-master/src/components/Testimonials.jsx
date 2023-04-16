import React from "react";
import styled from "styled-components";
import yam from "../assets/yam.jpg";
import per2 from "../assets/per2.jpg";
import per3 from "../assets/per3.jpg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
           Do you have a map? I just got lost in the places.
          </p>
          <div className="info">
            <img src={yam} alt="" />
            <div className="details">
              <h4>Yamini</h4>
              <span>Explorer</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            I love to travel all over the world, and they helped me in exploring and finding the best parts of world.
          </p>
          <div className="info">
            <img src={per2} alt="" />
            <div className="details">
              <h4>Lisa</h4>
              <span>Youtuber</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            I just loved their hospitality and service. They did justice to each and every penny. I really enjoyed .
          </p>
          <div className="info">
            <img src={per3} alt="" />
            <div className="details">
              <h4>Justin</h4>
              <span>Freelancer</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
