import React from 'react';
import { SVGType } from "@/types";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Github: React.FC<SVGType> = ({ fill, className="", size=4 }: SVGType) => {
    return (
        <FontAwesomeIcon className={className} style={{ color: fill, fontSize: `${size}rem` }} fill={fill} icon={faGithub} />
    )
}

export default Github