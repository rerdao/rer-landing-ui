import { makeStyles } from '@material-ui/core/styles';

export const useDialectStyles = makeStyles((theme) => ({
  primaryBg: {
    backgroundColor: '#5C5C5A',
  },
  primaryText: {
    color: '#171717',
  },
  highlight: {
    color: '#171717',
    backgroundColor: '#184623',
  },
  bold: {
    fontWeight: 'bold',
  },
  notificationButton: {
    backgroundColor: '#184623',
    color: '#171717',
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  notificationWrapper: {
    [theme.breakpoints.up('sm')]: {
      top: theme.spacing(6),
    },
  },
  notificationModal: {
    [theme.breakpoints.up('sm')]: {
      border: '1px solid #184623',
      borderRadius: 10,
    },
  },
  header: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    borderColor: '#184623',
  },
  button: {
    backgroundColor: '#171717',
    color: '#254526',
    borderColor: '#184623',
  },
  logo: {
    color: '#171717',
    backgroundColor: '#184623',
    '& svg': {
      marginTop: theme.spacing(0.4),
    },
  },
  fontFamilyOverride: {
    fontFamily: 'Space Grotesk, serif',
    '&::placeholder': {
      fontFamily: 'Space Grotesk, serif',
      color: '#738668'
    },
  },
  input: {
    border: 'none',
    color: '#171717'
  },
  outlinedInput: {
    color: '#738668',
    borderColor: '#FFFFFF',
    '&:focus-within': {
      borderColor: '#FFFFFF',
      backgroundColor: '#ababab20',
      outline: 'none',
      borderStyle: 'dashed'
    },
  },
  divider: {
    backgroundColor: '#FFFFFF'
  },
  adornmentButton: {
    color: '#171717',
    backgroundColor: '#184623',
  },
  toggleBackground: {
    backgroundColor: '#9e9c88'
  },
  toggleBackgroundActive: {
    backgroundColor: '#8e8939'
  }
}));
