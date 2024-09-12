import img1 from "@/components/images/img1.jpg";
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
  display:"flex",
  justifyContent:"center",
  
  
};

const imgWrapStyle={
  display: "flex", 
  flexWrap: "wrap", 
  gap: "25px",
  justifyContent:"center", 
  backgroundColor:"#f5f5f5", 
  height:"450px",
  padding:"0 33px"
}

const imageContainerStyle={
  width: 350,
  height: 350,
  position: 'relative',
  borderRadius: "5px",
  marginTop: "40px",
}
function page() {
  return (
    <>
      <Carousel arrows infinite={true}>
        {/* First Slide with Nested Carousel */}
        <div>
          <h3 style={contentStyle}>
            <div style={imgWrapStyle}>
              <div style={{ flexBasis: "300px" }}>
                <div style={imageContainerStyle}>
                  <Image
                    src={img1}
                    layout="fill"
                    objectFit="cover"
                    alt="Image 1"
                  />
                </div>
              </div>

              {/* Nested Carousel in Center */}
              <div style={{ flexBasis: "300px" }}>
                  <div style={imageContainerStyle}>
                    <Image
                      src={img2}
                      layout="fill"
                      objectFit="cover"
                      alt="Image 2"
                    />
                  </div>
            </div>
            <div style={{ flexBasis: "300px" }}>
                  <div style={imageContainerStyle}>
                    <Image
                      src={img3}
                      layout="fill"
                      objectFit="cover"
                      alt="Image 2"
                    />
                  </div>
            </div>
            </div>
          </h3>
        </div>

        {/* Second Slide */}
        <div>
          <h3 style={contentStyle}>
            <div style={imgWrapStyle}>
              <div style={{ flexBasis: "300px" }}>
                <div style={imageContainerStyle}>
                  <Image
                    src={img4}
                    layout="fill"
                    objectFit="cover"
                    alt="Image 4"
                  />
                </div>
              </div>
              <div style={{ flexBasis: "300px" }}>
                <div style={imageContainerStyle}>
                  <Image
                    src={img5}
                    layout="fill"
                    objectFit="cover"
                    alt="Image 5"
                  />
                </div>
              </div>
              <div style={{ flexBasis: "300px" }}>
                <div style={imageContainerStyle}>
                  <Image
                    src={img6}
                    layout="fill"
                    objectFit="cover"
                    alt="Image 6"
                  />
                </div>
              </div>
            </div>
          </h3>
        </div>

        {/* Third Slide */}
        <div>
          <h3 style={contentStyle}>
            <div style={imgWrapStyle}>
              <div style={{ flexBasis: "300px" }}>
                <div style={imageContainerStyle}>
                  <Image
                    src={img7}
                    layout="fill"
                    objectFit="cover"
                    alt="Image 7"
                  />
                </div>
              </div>
              <div style={{ flexBasis: "300px" }}>
                <div style={imageContainerStyle}>
                  <Image
                    src={img8}
                    layout="fill"
                    objectFit="cover"
                    alt="Image 8"
                  />
                </div>
              </div>
              <div style={{ flexBasis: "300px" }}>
                <div style={imageContainerStyle}>
                  <Image
                    src={img9}
                    layout="fill"
                    objectFit="cover"
                    alt="Image 9"
                  />
                </div>
              </div>
            </div>
          </h3>
        </div>
      </Carousel>
    </>
  );
}
 
export default page;
