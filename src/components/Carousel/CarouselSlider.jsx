import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import useStyle from "./styles";
import { useEffect, useState } from "react";
import options from "../../api/productAPI";
import axios from "axios";
function CarouselSlider(props) {
  const classes = useStyle();
  const [carouselitems, setCarouselitems] = useState([]);

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setCarouselitems(response.data.docs.slice(0, 5));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  function Item({ carouselitem }) {
    return (
      <Paper className={classes.carouselpaper}>
        <div className={classes.itemswrap}>
          <div className={classes.imgwrap}>
            <img src={carouselitem.product_main_image_url} alt="" />
          </div>
          <div className={classes.detailswrap}>
            <h1>{carouselitem.product_title}</h1>
            <p> Price : {carouselitem.original_price}</p>
            <p>Rating : {carouselitem.evaluate_rate}</p>
            <Button
              href={carouselitem.product_detail_url}
              variant="outlined"
              color="secondary"
            >
              Read More
            </Button>
          </div>
        </div>
      </Paper>
    );
  }

  return (
    <div className={classes.carouselSliderWrap}>
      <Carousel
        animation="slide"
        autoPlay={true}
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosIcon />}
      >
        {carouselitems.map((carouselitem, i) => (
          <Item key={i} carouselitem={carouselitem} />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
