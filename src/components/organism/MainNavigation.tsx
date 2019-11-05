import * as React from 'react'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { Link, LinkProps } from 'react-router-dom'
import { default as MuiLink } from '@material-ui/core/Link'

import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

// TODO Move to atoms
const RouterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link innerRef={ref} {...props} />
))

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      margin: theme.spacing(1),
    }
  })
)

export default function MainNavigation(props) {
  const classes = useStyles('')// TS thinks I need an agrument.. already love this
  return (
    <Toolbar>
      <Typography variant="h6">
        <nav style={{ display: 'flex' }}>
          <MuiLink className={classes.link} component={RouterLink} to="/">Dashboard</MuiLink>
          <MuiLink className={classes.link} component={RouterLink} to="/about">About</MuiLink>
        </nav>
      </Typography>
    </Toolbar>
  )
}

export { MainNavigation }
