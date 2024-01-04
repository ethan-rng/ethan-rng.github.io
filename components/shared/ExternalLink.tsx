import React from 'react'
import { ProjectWorkType } from '@/types'

type MyComponentProps = {
    homePageInfo: ProjectWorkType;
}

const ExternalLink: React.FC<MyComponentProps> = ({ homePageInfo }) => {
    return (
        <div>ExternalLink</div>
  )
}

export default ExternalLink