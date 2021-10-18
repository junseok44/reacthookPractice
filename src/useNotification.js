export const useNotification = (message, option) => {
  if (!(Notification in window)) {
    console.log("no notification");
    return;
  }
  const notification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((result) => {
        if (result !== "granted") {
          new Notification(message, option);
        }
      });
    } else {
      new Notification(message, option);
    }
  };

  return notification;
};
