import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 215,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 150,
    },
},
  img: {
  width: "100%",
  height: 310,
  borderRadius: 4,
  boxShadow: "1px 10px 10px 1px" ,
  [theme.breakpoints.down('md')]: {
    height: 250,
  },
  [theme.breakpoints.down('sm')]: {
    height: 220,
  },
},
  rating: {
  backgroundColor: "rgba(12,27,54,.8)",
  border: "1px solid #1f2e46",
  borderRadius: 4,
  padding: 2,
  color: "#fff",
  width: 54,
  textAlign: "center",
  position: "absolute",
  top: 12,
  right: 12
},
  nameFilm: {
  height: 45,
  maxHeight: 45,
  fontSize: 15,
  color: "#000",
  overflow: "hidden",
  textOverflow: "ellipsis",
},
  ageType: {
  fontSize: 14,
  backgroundColor: "#00ac4d",
  borderRadius: 4,
  color: "#fff",
  minWidth: 33,
  textAlign: "center",
  display: "inline-block",
  marginRight: 8,
  padding: 5
}
}));

export default useStyles;