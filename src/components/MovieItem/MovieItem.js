import React, { Fragment, useState } from 'react';
import useStyles from './MovieStyled';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import ModalVideo from 'react-modal-video';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import IconButton from '@material-ui/core/IconButton';
import './movieItem.scss'


export default function MovieItem(props) {
    const {phim} = props;
    console.log("props phim", props);

    const classes = useStyles();
    const [isOpen, setOpen] = useState(false);

    // const phim = [
    //     {
    //         modalVideo: < Fragment>
    //             <ModalVideo
    //                 channel='youtube'
    //                 autoplay isOpen={isOpen}
    //                 videoId="s05oOsz_SvA"
    //                 onClose={() => setOpen(false)} />
    //             <div className="btnPlay" style={{ width: "100%", textAlign: "center", position: "absolute", top: "40%" }}>
    //                 <IconButton onClick={() => setOpen(true)}>
    //                     <PlayArrowIcon className="iconPlay" />
    //                 </IconButton>
    //             </div>
    //         </Fragment >,
    //         imgPath: "./img/phim/ban-tay-diet-quy.png",
    //     },
    // ]

    return (
        <div className={classes.root}>
            <div className="card">
                <CardActionArea style={{ marginBottom: 10 }} >
                    <div className="hoverInfor"></div>
                    {/* {phim[0].modalVideo} */}
                    <a href="#">
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="auto"
                            image={phim.hinhAnh}
                            title="Contemplative Reptile"
                        />
                    </a>
                    <Box className={classes.rating}>
                        <Typography>6.3</Typography>
                        <Rating name="read-only" defaultValue={4} readOnly style={{ fontSize: 10, color: "#fb4226" }} />
                    </Box>
                </CardActionArea>
                <div style={{position:"relative"}}>
                    <div className="hideHover">
                        <div className={classes.nameFilm}>
                            <span className={classes.ageType}>P</span>
                            {phim.tenPhim}
                        </div>
                        <Typography variant="body2" color="textSecondary" component="p" >
                            100 phút
                        </Typography>
                    </div>
                    <div className="showHover">
                        <a className="buyNow" href="#"> MUA VÉ </a>
                    </div>
                </div>
            </div>

        </div>
    );
}
