import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  SimpleGrid,
  Text,
} from '@mantine/core';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { PROJECTS } from '@/constants';
import { LangType } from '@/types/types';
import Link from 'next/link';

type CaseStudiesProps = {
  lang: LangType;
};
export const CaseStudies = ({ lang }: CaseStudiesProps) => {
  return (
    <Box bg={'supportColor.1'} pt={100} pb={100}>
      <Container>
        <Text fz={40} fw={700} mb={40}>
          Case studies
        </Text>
        <Center>
          <SimpleGrid
            cols={{ base: 1, sm: 2 }}
            spacing={{ base: 10, sm: 10, lg: 12 }}
            verticalSpacing={{ base: 'md', sm: 'xl', lg: 24 }}
          >
            {PROJECTS.map(project => (
              <ProjectCard lang={lang} key={project.id} project={project} />
            ))}
          </SimpleGrid>
        </Center>
        <Flex w={'100%'} justify={'end'}>
          <Button component={Link} mt={20} variant="outline" href={'/'}>
            See all case studies
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};