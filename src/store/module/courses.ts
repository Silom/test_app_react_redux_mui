export interface Course {
  courseId: number,
  courseName: string,
  wishListFlag: boolean
}

export interface CourseState {
  courseList: Course[]
}

export default <CourseState>{
  courseList: [
    <Course>{
      courseId: 0,
      courseName: 'Erste Cavaletti-Übungen für das 4-jährigen Pferdes',
      wishListFlag: false
    },
    <Course>{
      courseId: 1,
      courseName: 'Erste Ausbildung für das 3-jährige Pferdes',
      wishListFlag: false
    },
    <Course>{
      courseId: 2,
      courseName: 'Handarbeit in der klassischen Ausbildung',
      wishListFlag: true
    },
    <Course>{
      courseId: 3,
      courseName: 'Erste Ausbildung für das 3-jährige Pferdes',
      wishListFlag: false
    },
    <Course>{
      courseId: 4,
      courseName: 'Besser Reitern durch Yoga',
      wishListFlag: true
    },
    <Course>{
      courseId: 5,
      courseName: 'Ausbildungsjahr mit fliegendem Wechsel, Piaffe und Passage',
      wishListFlag: true
    },
  ]
}
