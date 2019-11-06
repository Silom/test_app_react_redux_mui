import * as React from 'react'
import { connect } from 'react-redux'

import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import FolderIcon from '@material-ui/icons/Folder'
import StartIcon from '@material-ui/icons/Star'
import StartBorderIcon from '@material-ui/icons/StarBorder'

import { addMassage } from '../actions/notifications'
import { toggleFav } from '../actions/courses'
import { Course } from '../store/module/courses'
import { TestIds } from '../consts'

interface Props {
  courses: any[],
  addMassage: typeof addMassage
  toggleFav: typeof toggleFav
}

class DashboardComp extends React.Component<Props> {
  constructor(props) {
    super(props)
  }
  
  doFavAction(course: Course) {
    const message = !course.wishListFlag ? 'Added to My Favorite Courses' : 'Removed from Favorites'
    this.props.toggleFav(course.courseId)
    this.props.addMassage(message)
  }

  render() {
    const listEntriesTpl = []

    // TODO show only fav <Checkbox>

    if (this.props.courses) {
      this.props.courses.map(c => {
        listEntriesTpl.push(
          <ListItem key={c.courseId} data-testid={TestIds.courseList.entry}>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={c.courseName} />
            <ListItemSecondaryAction>
              <IconButton data-testid={TestIds.courseList.starIcon} edge="end" aria-label="delete" onClick={() => this.doFavAction(c)}>
                { c.wishListFlag ? <StartIcon /> : <StartBorderIcon /> }
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )
      })
    }

    return (
      <Card data-testid={TestIds.app.dashboard}>
        <List dense data-testid={TestIds.courseList.list}>
          { listEntriesTpl }
        </List>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  courses: state.courses.courseList
})

const Dashboard = connect(
  mapStateToProps,
  { toggleFav, addMassage }
)(DashboardComp)

export { Dashboard }
