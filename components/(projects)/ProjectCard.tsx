import React from 'react'
import { Image, Card, CardBody, CardFooter, Link, Stack, Heading, Text } from '@chakra-ui/react';
import type { ProjectWorkType } from '@/types';
import Tag from './Tag';


const ProjectCard = ({ projectItem }: { projectItem: ProjectWorkType}) => {
  return (
    <div className={`mr-6 my-6 border-[6px] rounded-lg bg-white/80 transform transition duration-300 ease-in-out hover:scale-105 border-secondary group`}>
      <Link href={projectItem.link}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Link href={projectItem.externalLink}>
            <Image
              className="rounded-r-lg h-[20rem] w-[45rem]"
              src={projectItem.images[0]}
              alt={projectItem.name}
            />
          </Link>

          <Stack
            className="flex flex-col justify-center ml-6 text-secondary my-5"
            maxWidth={{ base: "100%", sm: "40rem" }}
          >
            <CardBody className='h-[13rem] w-[50rem]'>
              <Heading
                size="md"
                className="text-4xl transition duration-400 ease-in-out group-hover:text-[2.5rem]"
              >
                {projectItem.name + ""}
              </Heading>
              
              <div className='bg-secondary h-1 w-[25rem] transition duration-400 ease-in-out group-hover:w-[28rem] rounded-full mt-1' />
              <Text className='text-justify py-2 pr-8'> {projectItem.description} </Text>
            </CardBody>

            <CardFooter className=''>
              {projectItem.tags.map((item: string, index: number) => (
                <Tag key={index} tag={item} />
              ))}
            </CardFooter>
          </Stack>
        </Card>
      </Link>
    </div>
  );
};

export default ProjectCard
