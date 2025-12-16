"use client";
import React, { useState } from "react";
import rawData from "./videocarddata.json" assert { type: "json" };
import Videopopup from "./Videopopup";
import Image from "next/image";
interface VideoCardData {
  id: number;
  thembnel_img: string;
  video_link: string;
  client_name: string;
}
export default function Videocard() {
  const [videoid, setvideoid] = useState<number | null>(null);
  const videocarddata = rawData as VideoCardData[];
  return (
    <div className="pt-3 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-xxl-4">
            <div className="row padding_ph">
              {videocarddata.slice(0, 4).map((data, index) =>
                <div className="col-12 videocard_card mt-4 position-relative" key={index}>
                  <iframe
                    className="videocard_bgvideo"
                    src={`https://www.youtube.com/embed/${data.video_link}?autoplay=1&mute=1&loop=1&playlist=${data.video_link}&controls=0`}
                    title="YouTube video background"
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                  ></iframe>
                  <Image
                    src={data.thembnel_img}
                    alt="youtube video"
                    width={10000}
                    height={500}
                    className="position-relative thembnel_card"
                  />
                  <div className="videocard_youtubeicon">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Comments_2_1_yfjp9x.png"
                      alt="youtube icon"
                      width={1000}
                      height={500}
                      onClick={() => setvideoid(data.id)}
                    />
                    <div className="videocard_client_name">
                      <h2 className="b2b-partners-heading">
                        {data.client_name}
                      </h2>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-4 videocard_center">
            {videocarddata.slice(4, 8).map((data, index) =>
              <div className="col-12 videocard_card mt-4 position-relative" key={index}>
                <iframe
                  className="videocard_bgvideo"
                  src={`https://www.youtube.com/embed/${data.video_link}?autoplay=1&mute=1&loop=1&playlist=${data.video_link}&controls=0`}
                  title="YouTube video background"
                  frameBorder="0"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
                <Image
                  src={data.thembnel_img}
                  alt="youtube video"
                  width={10000}
                  height={500}
                  className="position-relative thembnel_card"
                />
                <div className="videocard_youtubeicon">
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Comments_2_1_yfjp9x.png" alt="youtube icon" width={1000} height={500} onClick={() => setvideoid(data.id)} />
                  <div className="videocard_client_name">
                    <h2 className="b2b-partners-heading">
                      {data.client_name}
                    </h2>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-12  col-xxl-4">
            <div className="container_videocard3">
              <div className="row videocard_card_3_row">
                {videocarddata.slice(8, videocarddata.length).map((data, index) =>
                  <div className="col-12 col-md-6 col-xl-6 col-xxl-12 videocard_card videocard_card_3 mt-4 position-relative" key={index}>
                    <iframe
                      className="videocard_bgvideo"
                      src={`https://www.youtube.com/embed/${data.video_link}?autoplay=1&mute=1&loop=1&playlist=${data.video_link}&controls=0`}
                      title="YouTube video background"
                      frameBorder="0"
                      allow="autoplay"
                      allowFullScreen
                    ></iframe>
                    <Image
                      src={data.thembnel_img}
                      alt="youtube video"
                      width={10000}
                      height={500}
                      className="position-relative thembnel_card"
                    />
                    <div className="videocard_youtubeicon">
                      <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Comments_2_1_yfjp9x.png" alt="youtube icon" width={1000} height={500} onClick={() => setvideoid(data.id)} />
                      <div className="videocard_client_name">
                        <h2 className="b2b-partners-heading">
                          {data.client_name}
                        </h2>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
      <Videopopup currentvideoid={videoid} closePopup={() => setvideoid(null)} />
    </div>
  );
}
