export interface Notification {
  message: string
  time: number
}

export interface NotificationState {
  notifications: Notification[]
  activeNotification: Notification
}

export default <NotificationState>{
  notifications: []
}
