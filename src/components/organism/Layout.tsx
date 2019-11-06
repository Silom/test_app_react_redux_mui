import * as React from 'react'
import { connect } from 'react-redux'

import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import Toolbar from '@material-ui/core/Toolbar'
import Snackbar from '@material-ui/core/Snackbar'

import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import MainNavigation from './MainNavigation'
import { NotificationState } from '../../store/module/notifications'

import { messageTimeout } from '../../actions/notifications'
import { TestIds } from '../../consts'

// TODO Move to atoms
interface ElevationScrollProps {
  window?: () => Window
  children: React.ReactElement
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}

interface Props {
  notifications: NotificationState
  messageTimeout: typeof messageTimeout
  window?: () => Window
  children: React.ReactElement
}

class LayoutComp extends React.Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    const { children, window } = this.props
    const activeNotification = this.props.notifications.activeNotification

    return (
      <React.Fragment>
        <ElevationScroll {...{ window, children }}>
          <AppBar color="default">
            <MainNavigation />
          </AppBar>
        </ElevationScroll>
        <Toolbar />
        <Container>
          <Box my={2}>
            { children }
          </Box>
        </Container>
        <Snackbar
          data-testid={TestIds.app.notification}
          open={!!activeNotification}
          autoHideDuration={5000}
          message={<span>{ activeNotification ? activeNotification.message : '' }</span>}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={this.props.messageTimeout}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  notifications: state.notifications
})

const Layout = connect(
  mapStateToProps,
  { messageTimeout }
)(LayoutComp)

export { Layout }
