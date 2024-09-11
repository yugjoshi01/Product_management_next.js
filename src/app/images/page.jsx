import img1 from "@/components/images/img1.jpg";
import img2 from "@/components/images/img2.jpg";
import img3 from "@/components/images/img3.jpg";
import img4 from "@/components/images/img4.jpg";
import { Carousel } from "antd";
import Image from "next/image";

const contentStyle = {
  margin: 0,
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function page() {
  return (
    <>
      <Carousel arrows infinite={false}>
        <div>
          <h3 style={contentStyle}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "25px", justifyContent:"center",alignItems:"center"}}>
              <div style={{ flexBasis: "300px" }}>
                <Image
                  src={img1}
                  height={250}
                  width={300}
                  objectFit="cover"
                  alt="Image 1"
                />
              </div>
              <div style={{ flexBasis: "300px" }}>
                <Image
                  src={img2}
                  height={250}
                  width={300}
                  objectFit="cover"
                  alt="Image 2"
                />
              </div>
              <div style={{ flexBasis: "300px" }}>
                <Image
                  src={img3}
                  height={250}
                  width={300}
                  objectFit="cover"
                  alt="Image 3"
                />
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image src={img3} height={150} width={250} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image src={img4} height={150} width={250} />
          </h3>
        </div>
      </Carousel>
    </>
  );
}

export default page;
