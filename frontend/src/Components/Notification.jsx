import { notification } from "antd";

// Temp store descriptionQueue for ref
const descriptionQueue = [];

const Notification = (type, message, description) => {
  if (!descriptionQueue.includes(description)) {
    notification[type]({
      message,
      description,
      className: "small-font",
      onClose: () => {
        // Find & remove the message from messageQueue
        const index = descriptionQueue.indexOf(description);
        descriptionQueue.splice(index, 1);
      },
    });
    // Push to messageQueue
    descriptionQueue.push(description);
  }
};

export default Notification;
