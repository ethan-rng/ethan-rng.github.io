import React from 'react';
import { SVGType } from "@/types";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

const Discord: React.FC<SVGType> = ({ fill, className = "", size = 4 }: SVGType) => {
    return (
        <FontAwesomeIcon className={className + " Email"} style={{ color: fill, fontSize: `${size}rem` }} fill={fill} icon={faDiscord} />
    )
}

export default Discord