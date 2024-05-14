import { SVGType } from '@/types';
import React from 'react'

const ArrowDown = () => {
    return (
        <svg className="hover:text-gray-500" style={{ color: 'rgb(134, 134, 139)', strokeWidth: '2.25', width: '1em', height: 'auto' }} viewBox="0 0 17 8.85">
            <polyline data-accordion-icon-shape="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" fillRule="evenodd" points="15 1.13 8.5 7.72 2 1.13">
                <animate data-accordion-animate="expand" attributeName="points" values="15 1.13 8.5 7.72 2 1.13;
					15.85 4.42 8.5 4.42 1.15 4.42;
					15 7.72 8.5 1.13 2 7.72" dur="320ms" begin="indefinite" fill="freeze" keyTimes="0;
					0.5;
					1" calcMode="spline" keySplines="0.12, 0, 0.38, 0;
						0.2, 1, 0.68, 1"></animate>
                <animate data-accordion-animate="collapse" attributeName="points" values="15 7.72 8.5 1.13 2 7.72;
					15.85 4.42 8.5 4.42 1.15 4.42;
					15 1.13 8.5 7.72 2 1.13" dur="320ms" begin="indefinite" fill="freeze" keyTimes="0;
					0.5;
					1" calcMode="spline" keySplines="0.2, 0, 0.68, 0;
						0.2, 1, 0.68, 1"></animate>
            </polyline>
        </svg>
    )
}

export default ArrowDown;