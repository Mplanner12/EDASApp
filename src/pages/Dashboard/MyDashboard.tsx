import React from 'react';
import ChatCard from '../../components/Chat/ChatCard';
import DefaultLayout from '../../layout/DefaultLayout';
import { GoReport } from 'react-icons/go';
// import { FaServicestack } from 'react-icons/fa';
import { FaCamera } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const MyDashboard: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="flex-col w-full items-center gap-2.5 p-7 shadow-slate-400 dark:shadow-slate-500 rounded-sm bg-white dark:bg-boxdark">
        <h1 className="text-2xl font-bold mb-4 md:mb-6 text-center">
          Watch the video below to learn more about Fire Response
        </h1>
        <div className="w-full h-60">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ki9KSwC3PVg?si=75sn5e2b5e1eiGuq"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-5">
        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <Link to={'/chat'}>
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-red-600 dark:bg-red-800">
              <FaCamera />
            </div>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md font-bold text-black dark:text-white">
                  <button>Report Fire Incident</button>
                </h4>
                <span className="text-sm font-medium"></span>
              </div>

              <span className="flex items-center gap-1 text-sm font-medium"></span>
            </div>
          </Link>
        </div>
        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <Link to={'/contact'}>
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-green-700 dark:bg-green-900">
              <GoReport />
            </div>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md font-bold text-black dark:text-white">
                  <button>Request Fire Safety Services</button>
                </h4>
                <span className="text-sm font-medium"></span>
              </div>

              <span className="flex items-center gap-1 text-sm font-medium"></span>
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChatCard />
      </div>
    </DefaultLayout>
  );
};

export default MyDashboard;
