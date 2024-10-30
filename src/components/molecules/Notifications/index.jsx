import React from 'react';
import { NotificationsHolder } from './Notifications.styles';

// import notificationService from '@/services/notificationservice';

const Notifications = ({ fetchNotifications }) => {
  // const [searchQuery, setSearchQuery] = useState({
  //   page: 1,
  //   pageSize: 3,
  // });

  // const { notification_data, notification_loading } = notificationService.GetAllNotifications(
  //   searchQuery,
  //   fetchNotifications,
  // );

  // const getImageAndBackground = type => {
  //   let data = { image: Message, background: 'rgba(78, 97, 153, 0.2)' };
  //   switch (type) {
  //     case 'user_created':
  //       data = { image: Message, background: 'rgba(78, 97, 153, 0.2)' };
  //       break;
  //     case 'product_created':
  //       data = { image: Property, background: 'rgba(64, 143, 140, 0.2)' };
  //       break;
  //     case 'investment_created':
  //       data = { image: Investment, background: 'rgba(64, 143, 140, 0.2)' };
  //       break;
  //     case 'investment_created':
  //       data = { image: Investment, background: 'rgba(64, 143, 140, 0.2)' };
  //       break;

  //     default:
  //       break;
  //   }

  //   return data;
  // };
  return (
    <NotificationsHolder>
      <div className="holder">
        <div className="notifications">
          <div className="content">
            <span className="heading">Notifiction title</span>
            <div className="date-time">
              <span className="date">22-10-2024</span>
            </div>
          </div>
        </div>
        <span className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem blanditiis est illo recusandae non
          reiciendis, quisquam molestiae totam quas quis fugiat rerum. Provident enim aut aspernatur. Natus, commodi
          saepe.
        </span>
      </div>
    </NotificationsHolder>
  );
};

export default Notifications;
