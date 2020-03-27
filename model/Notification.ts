import {AsyncStorage} from 'react-native'
import * as Permissions from 'expo-permissions'
import {Notifications} from "expo";

const NOTIFICATION_KEY = 'NotificationOfLernkartei';

export function scheduleLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({status}) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              // tomorrow.setDate(tomorrow.getDate());
              tomorrow.setHours(18);
              tomorrow.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(
                {
                  title: 'Quiz Reminder',
                  body: "Don't forget to quiz your Decks!",
                },
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              );

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}
