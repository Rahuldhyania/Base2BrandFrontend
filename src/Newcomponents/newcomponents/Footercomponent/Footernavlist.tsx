import Link from "next/link";
import React from "react";

type navdata = {
  pagetitle: string;
  pagelinklist: any;
};
const Footernavlist = ({ pagetitle, pagelinklist }: navdata) => {
  return (
    <div className="footerlist_outer">
      <div className="footerlist_title gradient_text">
        {pagetitle}
      </div>
      <div className="mainfooterlist pt-4">
        <ul>
          {pagelinklist.map(data =>
            <Link href={data.pagelink}>
              <li>{data.pagename}</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Footernavlist;
