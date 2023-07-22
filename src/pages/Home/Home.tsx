import {
  AppShell,
  BackgroundImage,
  Box,
  Image,
  MediaQuery,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import applePodcast from '@/assets/desktop/apple-podcast.svg';
import bgPatternDots from '@/assets/desktop/bg-pattern-dots.svg';
import googlePodcasts from '@/assets/desktop/google-podcasts.svg';
import imageHostDesktop from '@/assets/desktop/image-host.jpg';
import logo from '@/assets/desktop/logo.svg';
import pocketCasts from '@/assets/desktop/pocket-casts.svg';
import spotify from '@/assets/desktop/spotify.svg';
import imageHostMobile from '@/assets/mobile/image-host.jpg';
import imageHostTablet from '@/assets/tablet/image-host.jpg';
import TextInput from '@/components/TextInput';
import SubmitButton from './components';

const Home = () => {
  const tablet = useMediaQuery('(min-width: 768px)');
  const desktop = useMediaQuery('(min-width: 1440px)');

  return (
    <AppShell bg="riverStyx">
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <BackgroundImage src={imageHostMobile} pos="absolute" inset={0} opacity={0.1} />
      </MediaQuery>
      <Image
        src={logo}
        width={140}
        mx={{ base: 'auto', sm: 0, xl: 160 }}
        my={{ base: 60, sm: 50 }}
        alt="logo"
      />
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Image
          src={desktop ? imageHostDesktop : imageHostTablet}
          alt="image host"
          pos="absolute"
          top={{ sm: 0, xl: 130 }}
          right={0}
          maw={{ sm: 490, xl: 900 }}
        />
      </MediaQuery>
      <Box
        maw={{ sm: 635, xl: 720 }}
        bg={{ sm: 'riverStyx' }}
        pos="relative"
        mt={{ sm: 100 }}
        ml={{ xl: 160 }}
      >
        <Stack ta={{ base: 'center', sm: 'left' }} fw={200} pt={{ sm: 100 }}>
          <Text color="screenGlow" fz={{ base: 26, sm: 48 }}>
            PUBLISH YOUR PODCASTS <Text color="white">EVERYWHERE.</Text>
          </Text>
          <Text color="periwinkleGrey" maw={{ sm: 445 }}>
            Upload your audio to Pod with a single click. We'll then distribute your
            podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!
          </Text>
        </Stack>
        <Stack
          spacing={0}
          sx={theme => ({
            [theme.fn.largerThan('sm')]: { flexDirection: 'column-reverse' },
          })}
        >
          <SimpleGrid
            cols={4}
            sx={{ alignItems: 'center' }}
            my={40}
            mr={{ sm: 100 }}
            breakpoints={[{ minWidth: 'sm', cols: 4, spacing: 40 }]}
          >
            <Image src={spotify} alt="spotify" />
            <Image src={applePodcast} alt="apple podcast" />
            <Image src={googlePodcasts} alt="google podcasts" />
            <Image src={pocketCasts} alt="pocket casts" />
          </SimpleGrid>
          <Stack mt={{ sm: 40 }} maw={{ sm: 450 }}>
            <TextInput
              type="email"
              placeholder="Email address"
              rightSectionWidth={tablet ? 200 : 0}
              rightSection={tablet ? <SubmitButton /> : null}
            />
            {!tablet && <SubmitButton />}
          </Stack>
        </Stack>
      </Box>
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Image
          src={bgPatternDots}
          alt="bg pattern dots"
          mt={{ sm: 100, xl: -50 }}
          maw={240}
          pos={{ xl: 'absolute' }}
          right={{ xl: 0 }}
        />
      </MediaQuery>
    </AppShell>
  );
};

export default Home;
