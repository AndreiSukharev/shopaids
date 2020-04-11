import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  m: {
    margin: 16
  },
  p: {
    padding: 16
  },
  verticalFlex: {
    display: 'flex',
    flexDirection: 'column'
  },
  flex: {
    display: 'flex',
    flexDirection: 'row'
  },
  flexItemMain: {
    flexShrink: 1,
    flexGrow: 1,
    overflowY: 'auto'
  },
  flexItemSecondary: {
    flexShrink: 0,
  },
  formGroup: {
    margin: theme.spacing(3),
  },
  buttonCustom: {
    borderRadius: 3,
    color: "primary",
  }
}));

export default useStyles