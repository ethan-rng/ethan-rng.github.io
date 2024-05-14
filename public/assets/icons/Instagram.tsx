import React from 'react'
import { SVGType } from "@/types";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Instagram: React.FC<SVGType> = ({ fill, className = "", size = 4 }: SVGType) => {
    return (
        <FontAwesomeIcon className={className} style={{ color: fill, fontSize: `${size}rem` }} fill={fill} icon={faInstagram} />
    )
}

export default Instagram









