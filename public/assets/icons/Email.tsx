import React from 'react';
import { SVGType } from '@/types';
import { faInbox } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Email: React.FC<SVGType> = ({ fill, className = "", size = 4 }: SVGType) => {
    return (
        <FontAwesomeIcon className={className} style={{ color: fill, fontSize: `${size}rem` }} fill={fill} icon={faInbox} />
    )
}

export default Email