import React from 'react'

const Footer = () => {
	const links = [
		{ image: "", tag: "Home", link: "/" },
		{ image: "", tag: "About Me", link: "/" },
		{ image: "", tag: "Projects", link: "/" },
		{ image: "", tag: "Contact", link: "/" },
	  ];
	const FooterItems = ({ tag, icon: Icon, name, active }) => {
		
	}

	return (
    	<div className='z-20 flex flex-row pl-64 pr-64 lato text-5xl pt-6 pb-6'>
        	<div className="z-20 fixed p-20 w-full bg-tertiary mt-16" />

        	<div className='text-gray-100 hover:text-tertiary'>
            	Let's Connect!
        	</div>

        	<div className="flex justify-end">
				{links.map((link, index) => (
              	<FooterItems
                	key={link["tag"]}
                	tag={link["tag"]}
                	icon={link["image"]}
                	name={link["link"]}
                	active={""}
              	/>
            	))}
        	</div>
    	</div>
  	)
}

export default Footer