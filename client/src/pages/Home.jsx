import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import CountUp from "react-countup";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);
  console.log(offerListings);

  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto slide-in-left">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-slate-500">perfect</span>
          <br />
          place with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Dream Estate is the best place to find your next perfect place to
          live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Let&apos;s get started...
        </Link>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row" style={{ fontSize: "1rem" }}>
            <div
              className="flex flex-col justify-center items-center"
              style={{
                backgroundColor: "#F4F4F4",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <span className="font-bold flex items-center">
                <CountUp
                  className="text-blue-600"
                  style={{ fontSize: "2rem" }}
                  start={0}
                  end={987}
                  duration={5}
                />{" "}
                <span className="text-orange-700">+</span>
              </span>
              <span className="text-gray-700">Saled Estate</span>
            </div>
          </div>
          <div className="flex flex-row" style={{ fontSize: "1rem" }}>
            <div
              className="flex flex-col justify-center items-center"
              style={{
                backgroundColor: "#F4F4F4",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <span className="font-bold flex items-center">
                <CountUp
                  className="text-green-500"
                  style={{ fontSize: "2rem" }}
                  start={0}
                  end={1538}
                  duration={3}
                />{" "}
                <span className="text-orange-700">+</span>
              </span>
              <span className="text-gray-700">Rented Estate</span>
            </div>
          </div>
          <div className="flex flex-row" style={{ fontSize: "1rem" }}>
            <div
              className="flex flex-col justify-center items-center"
              style={{
                backgroundColor: "#F4F4F4",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <span className="font-bold flex items-center">
                <CountUp
                  className="text-purple-600"
                  style={{ fontSize: "2rem" }}
                  start={0}
                  end={27}
                  duration={3}
                />{" "}
                <span className="text-orange-700">+</span>
              </span>
              <span className="text-gray-700">Winning Award</span>
            </div>
          </div>
        </div>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "contain",
                }}
                className="h-[500px]"
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex justify-between flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="justify-between">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex justify-between flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="justify-between">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex justify-between flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
