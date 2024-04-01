import React from "react";

import { Img, Line, Text } from "components";

const CompanyPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-jura items-center justify-start mx-auto p-[7px] w-full">
        <div className="flex flex-col md:gap-10 gap-[143px] items-center justify-start max-w-[1714px] mb-2 mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[39px] items-center justify-start w-full">
            <header className="flex md:flex-col md:gap-5 items-center justify-center w-full">
              <div className="bg-gray-200 flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-end p-[41px] md:px-10 sm:px-5 w-full">
                <Text
                  className="md:mt-0 my-0.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                  size="txtJuraSemiBold36"
                >
                  TimeTrove
                </Text>
                <ul className="flex md:flex-1 flex-row font-indieflower sm:hidden items-start justify-center md:ml-[0] ml-[315px] md:mt-0 mt-[5px] w-[23%] md:w-full common-row-list">
                  <li>
                    <a
                      href="javascript:"
                      className="mt-0.5 text-black-900 text-xl"
                    >
                      <Text size="txtIndieFlowerRegular20">Shop</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mb-0.5 ml-[60px] text-black-900 text-xl"
                    >
                      <Text size="txtIndieFlowerRegular20">Men</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="ml-[60px] mt-0.5 text-black-900 text-xl"
                    >
                      <Text size="txtIndieFlowerRegular20">Women</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="ml-[70px] text-black-900 text-xl"
                    >
                      <Text size="txtIndieFlowerRegular20">Kids</Text>
                    </a>
                  </li>
                </ul>
                <a
                  href="javascript:"
                  className="bg-blue_gray-100 h-[37px] justify-center mb-[11px] md:ml-[0] ml-[390px] pt-1.5 sm:px-5 px-[29px] rounded-[18px] text-black-900 text-xl w-[100px]"
                >
                  <Text size="txtIndieFlowerRegular20">Login</Text>
                </a>
                <Img
                  className="h-7 md:ml-[0] ml-[45px] mr-[73px] md:mt-0 mt-1 w-7"
                  src="images/img_mdilightcart.svg"
                  alt="mdilightcart"
                />
              </div>
              <Img
                className="md:flex-1 h-[130px] sm:h-auto md:ml-[0] ml-[60px] mr-[1530px] object-cover w-[8%] md:w-full"
                src="images/img_image1.png"
                alt="imageOne"
              />
            </header>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[92%] md:w-full">
              <div className="flex flex-col gap-[58px] justify-start md:mt-0 mt-[43px] w-[41%] md:w-full">
                <Text
                  className="bg-clip-text bg-gradient  sm:text-4xl md:text-[38px] text-[40px] text-transparent underline"
                  size="txtJuraBold40"
                >
                  Company Information
                </Text>
                <div className="flex flex-col font-judson items-center justify-start md:ml-[0] ml-[88px] w-[86%] md:w-full">
                  <div className="flex flex-col justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-start mr-[109px] w-4/5 md:w-full">
                      <Text
                        className="sm:mt-0 mt-[3px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtJudsonRegular35"
                      >
                        Company Name :{" "}
                      </Text>
                      <Text
                        className="mb-[3px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtJudsonRegular35"
                      >
                        TimeTrove
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-start ml-10 md:ml-[0] mt-2.5 w-3/4 md:w-full">
                      <Text
                        className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtJudsonRegular35"
                      >
                        Owner Name :
                      </Text>
                      <Text
                        className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtJudsonRegular35"
                      >
                        John Smith
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-end md:ml-[0] ml-[116px] mt-[13px] w-[79%] md:w-full">
                      <Text
                        className="mb-[3px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtJudsonRegular35"
                      >
                        Address :
                      </Text>
                      <Text
                        className="sm:mt-0 mt-[3px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtJudsonRegular35"
                      >
                        RKU, Rajkot, India
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[25px] items-start justify-end md:ml-[0] ml-[103px] mt-2.5 w-[67%] md:w-full">
                      <Text
                        className="mb-[3px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtJudsonRegular35"
                      >
                        Location :
                      </Text>
                      <Text
                        className="mt-[3px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtJudsonRegular35"
                      >
                        Rajkot, India
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[25px] items-center justify-end md:ml-[0] ml-[175px] mt-2.5 w-[59%] md:w-full">
                      <Text
                        className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtJudsonRegular35"
                      >
                        Size :
                      </Text>
                      <Text
                        className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtJudsonRegular35"
                      >
                        Small Business
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-end md:ml-[0] ml-[151px] mt-3.5 w-[71%] md:w-full">
                      <Text
                        className="mb-[3px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtJudsonRegular35"
                      >
                        Email :
                      </Text>
                      <Text
                        className="sm:mt-0 mt-[3px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtJudsonRegular35"
                      >
                        ttsupport@tt.com
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative w-[48%] md:w-full">
                <div className="flex flex-col items-center justify-start my-auto w-[65%]">
                  <div className="flex flex-col gap-[52px] items-center justify-start w-full">
                    <Img
                      className="h-[319px] md:h-auto object-cover w-full"
                      src="images/img_image15.png"
                      alt="imageFifteen"
                    />
                    <Img
                      className="h-[318px] md:h-auto object-cover w-full"
                      src="images/img_image17.png"
                      alt="imageSeventeen"
                    />
                  </div>
                </div>
                <Img
                  className="h-[319px] ml-[-189px] my-auto object-cover w-[62%] z-[1]"
                  src="images/img_image16.png"
                  alt="imageSixteen"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[82%] md:w-full">
            <div className="flex flex-row font-jura items-center justify-center w-[22%] md:w-full">
              <Img
                className="h-[130px] md:h-auto object-cover w-[42%]"
                src="images/img_image1.png"
                alt="imageTwo"
              />
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtJuraSemiBold36"
              >
                TimeTrove
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-indieflower md:gap-5 items-start justify-center mt-[38px] w-[58%] md:w-full">
              <Text
                className="md:mt-0 mt-2 text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                size="txtIndieFlowerRegular30"
              >
                Company
              </Text>
              <Text
                className="mb-2 md:ml-[0] ml-[78px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                size="txtIndieFlowerRegular30"
              >
                Products
              </Text>
              <Text
                className="mb-[7px] md:ml-[0] ml-[78px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                size="txtIndieFlowerRegular30"
              >
                Offices
              </Text>
              <Text
                className="mb-2 md:ml-[0] ml-[76px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                size="txtIndieFlowerRegular30"
              >
                About
              </Text>
              <Text
                className="mb-1.5 md:ml-[0] ml-[76px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                size="txtIndieFlowerRegular30"
              >
                Contact
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center mt-[53px] w-[35%] md:w-full">
              <Img
                className="h-12 md:h-auto object-cover w-12"
                src="images/img_icons8youtube.png"
                alt="icons8youtube"
              />
              <Img
                className="h-12 ml-10 sm:ml-[0] w-12"
                src="images/img_icons8linkedin.svg"
                alt="icons8linkedin"
              />
              <Img
                className="h-12 ml-10 sm:ml-[0] w-12"
                src="images/img_close.svg"
                alt="close"
              />
              <Img
                className="h-12 md:h-auto ml-8 sm:ml-[0] object-cover w-12"
                src="images/img_icons8facebook.png"
                alt="icons8facebook"
              />
              <Img
                className="h-12 md:h-auto ml-10 sm:ml-[0] object-cover w-12"
                src="images/img_icons8instagram.png"
                alt="icons8instagram"
              />
              <Img
                className="h-[42px] sm:ml-[0] ml-[51px] w-[42px]"
                src="images/img_volume.svg"
                alt="volume"
              />
            </div>
            <Line className="bg-gray-500_01 h-[5px] mt-16 w-full" />
            <Text
              className="mt-[39px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
              size="txtCalibri35"
            >
              Copyright @ 2024 - All Right Reserved.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyPage;
