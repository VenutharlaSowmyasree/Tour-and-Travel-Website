import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/tajmahal.jpg";
import Destination2 from "../assets/kedharnath.jpg";
import Destination3 from "../assets/hawal mahal.jpg";
import Destination4 from "../assets/amritsar.jpg";
import Destination5 from "../assets/vrindhavan.jpg";
import Destination6 from "../assets/mysore palace.jpg";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Taj Mahal",
      subTitle: "This is the icon of love, located in Agra.It was commissioned by Mughal Emperor Shah Jahan in memory of his wife Mumtaz.",
      cost: "8,800",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination2,
      title: "Kedarnath",
      subTitle: "This is located in Uttarakhand, about 3,583 m above sea level near the Chorabari Glacier.The Shiva Lingam of the Kedarnath temple is a triangle shape.This temple is closed for six months in winter.",
      cost: "10,000",
      duration: "Approx 3 night trip",
    },
    {
      image: Destination3,
      title: "Hawa Mahal",
      subTitle: "This is located in Jaipur, Rajasthan. This is built from red and pink sandstone",
      cost: "5,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "Golden Temple",
      subTitle: "Amritsar is home to the spectacular Golden Temple, Sikhism's holiest shrine and one of India’s most serene and humbling sights.",
      cost: "10,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Vrindavan",
      subTitle: "Vrindavan is one of the most important religious destinations for Hindus, since it is believed to be the birth place of Lord Krishna.",
      cost: "5,400",
      duration: "Approx 3 trip",
    },
    {
      image: Destination6,
      title: "Mysore Palace",
      subTitle: "It is the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore.Mysore is commonly described as the 'City of Palaces', and there are seven palaces including this one; however, 'Mysore Palace' refers specifically to this one within the Old fort .",
      cost: "8,800",
      duration: "Approx 1 night 2 day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
