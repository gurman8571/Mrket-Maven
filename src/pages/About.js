import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function About() {
  const [loading, setloading] = useState(true);

  const loader = () => {
    setTimeout(() => {
      setloading(false);
    }, 400);
  };

  useEffect(() => {
    loader();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {" "}
      <body className="min-h-screen bg-gray-700 text-white p-3">
        <h1 className="text-yellow-200 text-4xl font-bold flex justify-center items-center m-2">
          About Us
        </h1>
        <br />

        <p className="flex font-light text-md m-8 justify-center ">
        Market Maven - Stock Tracker App <br/>
        <br/>

Market Maven is a cutting-edge stock tracking app that allows users to stay updated with real-time information and gain valuable insights into the stock market. Designed to cater to both seasoned investors and beginners, Market Maven offers a comprehensive range of features to help users make informed investment decisions.

One of the key features of Market Maven is its ability to provide real-time stock prices. Users can access instant updates on stock prices, enabling them to closely monitor the performance of their favorite stocks throughout the day. The app sources data from major stock exchanges worldwide, ensuring that users have access to up-to-date and accurate information.

Another valuable feature of Market Maven is its portfolio management functionality. Users can easily manage their investment portfolios within the app, adding and tracking their stocks' performance. The app provides comprehensive charts and analysis tools to help users understand how their investments are performing and make informed decisions accordingly.

Market Maven also allows users to create personalized watchlists of stocks they are interested in. This feature enables users to monitor the prices of specific stocks, receive news updates, and set up notifications for significant changes or news related to the stocks on their watchlist.

To keep users well-informed, Market Maven aggregates the latest financial news and analysis from reputable sources. Users can customize their news feeds based on their interests and preferences, ensuring that they receive relevant and timely information about the market.

The app offers alerts and notifications, allowing users to set up customized alerts for price changes, market trends, and news updates. This feature ensures that users are promptly informed about important events that may impact their investments.

Market Maven provides interactive charts and a wide range of technical indicators to help users analyze stock performance. These tools assist users in visualizing trends, identifying patterns, and making data-driven decisions.

In addition to its features, Market Maven fosters a community of investors within the app. Users can connect with other investors, share insights, and participate in discussions. This interactive feature enables users to learn from experienced investors, exchange ideas, and enhance their investing knowledge.

Market Maven boasts a user-friendly interface, making it easy for users of all experience levels to navigate the app and access stock market information. The app is designed to provide a seamless experience across various devices, including smartphones, tablets, and desktops.

Overall, Market Maven is a powerful stock tracking app that empowers investors by providing them with real-time data, comprehensive analysis tools, personalized watchlists, and a vibrant community. With Market Maven, users can stay ahead of market trends, manage their portfolios effectively, and make informed investment decisions.
         
        </p>
      </body>
    </>
  );
}
