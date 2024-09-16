import img1 from "@/components/images/img1.jpg";
import img10 from "@/components/images/img10.jpg";
import img11 from "@/components/images/img11.jpg";
import img12 from "@/components/images/img12.jpg";
import img13 from "@/components/images/img13.jpg";
import img14 from "@/components/images/img14.jpg";
import img15 from "@/components/images/img15.jpg";
import img2 from "@/components/images/img2.jpg";
import img3 from "@/components/images/img3.jpg";
import img4 from "@/components/images/img4.jpg";
import img5 from "@/components/images/img5.jpg";
import img6 from "@/components/images/img6.jpg";
import img7 from "@/components/images/img7.jpg";
import img8 from "@/components/images/img8.jpg";
import img9 from "@/components/images/img9.jpg";

import { Carousel } from "antd";
import Image from "next/image";

const contentStyle = {
  margin: 0,
  height: "450px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#5E6572",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imgWrapStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "25px",
  justifyContent: "center",
  backgroundColor: "#f5f5f5",
  height: "450px",
  padding: "0 33px",
  alignItems: "center",
};

const imageContainerStyle = {
  width: 350,
  height: 350,
  position: "relative",
  borderRadius: "5px",
  marginTop: "40px",
};

const nestedCarouselContainerStyle = {
  width: "100%",
  height: "350px",
  display: "flex",
  alignItems: "center",
};

const innerCarouselImageContainerStyle = {
  position: "relative",
  width: "100%",
  height: "350px",
};

const NestedCarousel1 = () => (
  <div style={{ marginLeft: "18px", paddingRight: "10px" }}>
    <Carousel arrows infinite style={{ height: "100%" }}>
      <div>
        <Image src={img2} alt="Image 2" height={350} width={320} />
      </div>
      <div style={innerCarouselImageContainerStyle}>
        <Image src={img10} alt="Image 10" height={350} width={320} />
      </div>
      <div style={innerCarouselImageContainerStyle}>
        <Image src={img11} alt="Image 11" height={350} width={320} />
      </div>
    </Carousel>
  </div>
);

const NestedCarousel2 = () => (
  <div style={{ marginLeft: "18px", paddingRight: "10px" }}>
    <Carousel arrows infinite style={{ height: "100%" }}>
      <div>
        <Image src={img5} alt="Image 5" height={350} width={320} />
      </div>
      <div style={innerCarouselImageContainerStyle}>
        <Image src={img12} alt="Image 12" height={350} width={320} />
      </div>
      <div style={innerCarouselImageContainerStyle}>
        <Image src={img13} alt="Image 13" height={350} width={330} />
      </div>
    </Carousel>
  </div>
);

const NestedCarousel3 = () => (
  <div style={{ marginLeft: "18px", paddingRight: "10px" }}>
    <Carousel arrows infinite style={{ height: "100%" }}>
      <div>
        <Image src={img8} alt="Image 8" height={350} width={330} />
      </div>
      <div style={innerCarouselImageContainerStyle}>
        <Image src={img14} alt="Image 14" height={350} width={330} />
      </div>
      <div style={innerCarouselImageContainerStyle}>
        <Image src={img15} alt="Image 15" height={350} width={320} />
      </div>
    </Carousel>
  </div>
);

function Page() {
  return (
    <Carousel arrows infinite style={{ height: "100%" }}>
      {/* First Slide with Nested Carousel */}
      <div>
        <div style={contentStyle}>
          <div style={imgWrapStyle}>
            <div style={{ flexBasis: "300px" }}>
              <div style={imageContainerStyle}>
                <Image
                  src={img1}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Image 1"
                />
              </div>
            </div>

            {/* Nested Carousel in Center */}
            <div style={{ flexBasis: "300px" }}>
              <div style={imageContainerStyle}>
                <NestedCarousel1 />
              </div>
            </div>

            <div style={{ flexBasis: "300px" }}>
              <div style={imageContainerStyle}>
                <Image
                  src={img3}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Image 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Slide */}
      <div>
        <div style={contentStyle}>
          <div style={imgWrapStyle}>
            <div style={{ flexBasis: "300px" }}>
              <div style={imageContainerStyle}>
                <Image
                  src={img4}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Image 4"
                />
              </div>
            </div>
            <div style={{ flexBasis: "300px" }}>
              <div style={imageContainerStyle}>
                <NestedCarousel2 />
              </div>
            </div>
            <div style={{ flexBasis: "300px" }}>
              <div style={imageContainerStyle}>
                <Image
                  src={img6}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Image 6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Slide */}
      <div>
        <div style={contentStyle}>
          <div style={imgWrapStyle}>
            <div style={{ flexBasis: "300px" }}>
              <div style={imageContainerStyle}>
                <Image
                  src={img7}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Image 7"
                />
              </div>
            </div>
            <div style={{ flexBasis: "300px" }}>
              <div style={imageContainerStyle}>
                <NestedCarousel3 />
              </div>
            </div>
            <div style={{ flexBasis: "300px" }}>
              <div style={imageContainerStyle}>
                <Image
                  src={img9}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Image 9"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default Page;
