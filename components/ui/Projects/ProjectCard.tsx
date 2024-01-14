import React from 'react';
import { Image, Card, CardBody, CardFooter, Link, Stack, Heading, Text } from '@chakra-ui/react';
import type { ProjectWorkType } from '@/types';
import Tag from './Tag';
import "../styles.css";

type MyComponentProps = {
  projectItem: ProjectWorkType;
}

const ProjectCard: React.FC<MyComponentProps> = ({ projectItem }) => {
  return (
    <div className="mx-4 my-6 bg-white/80 transform transition duration-300 ease-in-out hover:scale-105 rounded-lg border-secondary border-[6px] abhayaLibre group">
      <Link href={projectItem.link} isExternal>
        <Card
          overflow="hidden"
          variant="outline"
          className="block"
        >
          <div className="flex flex-col md:flex-row">
            <Link href={projectItem.externalLink} isExternal>
              <Image
                className="md:rounded-r-lg md:h-[25rem] md:w-[40rem] object-cover w-full"
                src={projectItem.images[0]}
                alt={projectItem.name}
              />
            </Link>

            <Stack
              className="flex-1 justify-center p-4 text-secondary"
              spacing={4}
            >
              <CardBody>
                <Heading
                  size="md"
                  className="text-xl md:text-2xl lg:text-4xl"
                >
                  {projectItem.name}
                </Heading>
                
                <div className='bg-secondary h-1 w-3/4 md:w-1/2 rounded-full mt-1' />
                <Text className='text-justify text-sm lg:text-xl orbitron'> {projectItem.description} </Text>
              </CardBody>

              <div className='md:block hidden'>
                <CardFooter>
                  {projectItem.tags.map((tag: string, index: number) => (
                    <Tag key={index} tag={tag} />
                  ))}
                </CardFooter>
              </div>
            </Stack>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default ProjectCard;
