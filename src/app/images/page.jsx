import img1 from "@/components/images/img1.jpg";
import img2 from "@/components/images/img2.jpg";
import img3 from "@/components/images/img3.jpg";
import img4 from "@/components/images/img4.jpg";
import img5 from "@/components/images/img5.jpg";
import img6 from "@/components/images/img6.jpg";

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
};

const imgWrapStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "25px",
  justifyContent: "center",
  backgroundColor: "#f5f5f5",
  height: "450px",
  padding: "0 33px",
};

const imageContainerStyle = {
  width: 350,
  height: 350,
  position: "relative",
  borderRadius: "5px",
  marginTop: "40px",
};

const innerImageContainerStyle = {
  width: "100%",
  height: "100%",
  position: "relative",
  borderRadius: "5px",
};

const NestedCarousel = () => (
  <Carousel arrows infinite={true} style={{ height: '100%' }} 
  className="custom-carousel"
  
  >
    <div style={innerImageContainerStyle}>
      <Image src={img2} layout="fill" objectFit="cover" alt="Image 2" />
    </div>
    <div style={innerImageContainerStyle}>
      <Image src={img3} layout="fill" objectFit="cover" alt="Image 10" />
    </div>
    <div style={innerImageContainerStyle}>
      <Image src={img4} layout="fill" objectFit="cover" alt="Image 11" />
    </div>
  </Carousel>
);

function Page() {
  return (
    <Carousel arrows infinite={true} style={{
      height: "100% !important"
    }}
    >
      {/* First Slide with Nested Carousel */}
      <div>
        <div style={contentStyle}>
          <div style={imgWrapStyle}>
            <div style={{ flexBasis: "300px" }}>
              <div style={imageContainerStyle}>
                <Image src={img1} layout="fill" objectFit="cover" alt="Image 1" />
              </div>
            </div>

            {/* Nested Carousel in Center */}
            <div style={{ flexBasis: "300px" }}>
              <div style={imageContainerStyle}>
                <NestedCarousel />
              </div>
            </div>

            <div style={{ flexBasis: "300px" }}>
              <div style={imageContainerStyle}>
                <Image src={img3} layout="fill" objectFit="cover" alt="Image 3" />
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
                <Image src={img4} layout="fill" objectFit="cover" alt="Image 4" />
              </div>
            </div>
            <div style={{ flexBasis: "300px" }}>
              <div style={imageContainerStyle}>
                <Image src={img5} layout="fill" objectFit="cover" alt="Image 5" />
              </div>
            </div>
            <div style={{ flexBasis: "300px" }}>
              <div style={imageContainerStyle}>
                <Image src={img6} layout="fill" objectFit="cover" alt="Image 6" />
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
                <Image src="/api/placeholder/350/350" layout="fill" objectFit="cover" alt="Image 7" />
              </div>
            </div>
            <div style={{ flexBasis: "300px" }}>
              <div style={imageContainerStyle}>
                <Image src="/api/placeholder/350/350" layout="fill" objectFit="cover" alt="Image 8" />
              </div>
            </div>
            <div style={{ flexBasis: "300px" }}>
              <div style={imageContainerStyle}>
                <Image src={img4} layout="fill" objectFit="cover" alt="Image 9" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default Page;