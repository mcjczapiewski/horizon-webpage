import React, {RefObject} from "react";
import { ExternalLinks } from "./ExternalLinks";

interface IProps {
  scrollToTop: RefObject<HTMLDivElement>;
}

const CopyrightBar = ({ scrollToTop }: IProps) => {
    const executeScroll = () => {
      if (scrollToTop.current) {
        scrollToTop.current.scrollTo(0, 0);
      }
    };

    return (
        <div className="copyright-bar">
            {ExternalLinks}
            <i
                className="far fa-arrow-alt-circle-up"
                onClick={executeScroll}
            ></i>
            <div className="copyright">© Horizon17 Virtual Tours 2021</div>;
        </div>
    );
};

export default CopyrightBar;
