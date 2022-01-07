import * as React from "react";
import ImageGallery from "react-image-gallery";

const options = {
  showBullets: true,
  slideDuration: 450,
  slideInterval: 2000,
};

class MyGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  upload() {
    let imagesCopy = [];
    this.props.images.forEach((image) => {
      if (!!image == false) return;
      let picture;

      !image.publicURL ? (picture = image) : (picture = image.publicURL);
      imagesCopy.push({
        original: picture,
        thumbnail: picture,
        originalHeight: "1000px",
        originalWidth: "600px",
        thumbnailHeight: "150px",
        thumbnailWidth: "250px",
      });
    });
    this.setState({ images: imagesCopy });
  }

  componentDidMount() {
    //console.log(this.props.images, "lol");
    this.upload();
  }
  componentDidUpdate(prevProps) {
    if (this.props.images !== prevProps.images) {
      this.upload();
    }
  }
  /*shouldComponentUpdate(prevProps, prevState) {
    if (prevProps.images === this.props.images) return false;
    return true;
  }
  componentDidUpdate() {
    let imagesCopy = [];
    this.props.images.forEach((image) => {
      imagesCopy.push({
        original: image.publicURL,
        thumbnail: image.publicURL,
        originalHeight: "1000px",
        originalWidth: "600px",
        thumbnailHeight: "150px",
        thumbnailWidth: "250px",
      });
    });
    this.setState({ images: imagesCopy });
  }*/

  render() {
    return (
      <ImageGallery
        items={this.state.images}
        showBullets={options.showBullets}
        slideDuration={options.slideDuration}
        slideInterval={options.slideInterval}
        lazyLoad={true}
        additionalClass="app-image-gallery"
      />
    );
  }
}

export default MyGallery;
