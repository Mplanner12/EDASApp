import { Link } from 'react-router-dom';
import { Chat } from '../../types/chat';
import UserOne from '../../images/user/user-01.png';
import UserTwo from '../../images/user/user-02.png';
import UserThree from '../../images/user/user-03.png';
import { FaPhone } from 'react-icons/fa6';

const chatData: Chat[] = [
  {
    avatar: UserOne,
    name: 'Fedfire Control Room, Abuja',
    text: 'How are you?',
    phone: 2348032003557,
    time: 12,
    textCount: 3,
    color: '#10B981',
  },
  {
    avatar: UserTwo,
    name: 'Fedfire Control Room, Kano',
    text: '',
    time: 12,
    textCount: 0,
    phone: 2348058689461,
    color: '#DC3545',
  },
  {
    avatar: UserThree,
    name: 'Kano State Fire Service',
    text: 'How are you?',
    time: 32,
    textCount: 3,
    phone: 2347051246833,
    color: '#FFBA00',
  },
  {
    avatar: UserOne,
    name: 'Kano State Fire Service',
    text: 'How are you?',
    time: 32,
    textCount: 0,
    phone: 2348098822631,
    color: '#10B981',
  },
];

const ChatCard = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-3xl font-semibold text-black dark:text-white">
        Emergency Contacts
      </h4>

      <div>
        {chatData.map((chat, key) => (
          <Link
            to={''}
            className="flex justify-between items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <a href={`tel:${chat.phone}`}>
              <div className="relative w-full">
                <p className="text-red-600 font-semibold">
                  {chat.name.toUpperCase()}
                </p>
              </div>

              <div className="flex flex-1 items-center justify-between">
                <div>
                  <h5 className="flex justify-centerfont-medium text-black dark:text-white">
                    <div className="mr-2 relative top-1.5">
                      <FaPhone color="#10B981" size={20} />
                    </div>
                    <p>+</p>
                    {chat.phone}
                  </h5>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatCard;
