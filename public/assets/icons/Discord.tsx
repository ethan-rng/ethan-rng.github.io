import React from 'react';
import { SVGType } from "@/types";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Discord: React.FC<SVGType> = ({ fill, className = "", size = 4 }: SVGType) => {
    return (
        <FontAwesomeIcon className={className} style={{ color: fill, fontSize: `${size}rem` }} icon={faDiscord} />
    )
}

export default Discord