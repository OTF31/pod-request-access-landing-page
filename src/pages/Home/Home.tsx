import { AppShell, BackgroundImage, Image, SimpleGrid, Stack, Text } from '@mantine/core';

import applePodcast from '@/assets/desktop/apple-podcast.svg';
import googlePodcasts from '@/assets/desktop/google-podcasts.svg';
import logo from '@/assets/desktop/logo.svg';
import pocketCasts from '@/assets/desktop/pocket-casts.svg';
import spotify from '@/assets/desktop/spotify.svg';
import imageHostMobile from '@/assets/mobile/image-host.jpg';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';

const Home = () => {
  return (
    <AppShell bg="riverStyx">
      <BackgroundImage src={imageHostMobile} pos="absolute" inset={0} opacity={0.1} />
      <Image src={logo} width={140} mx="auto" my={60} alt="logo" />
      <Stack ta="center" c="black" fw={200}>
        <Text color="screenGlow" fz={26}>
          PUBLISH YOUR PODCASTS <Text color="white">EVERYWHERE.</Text>
        </Text>
        <Text color="periwinkleGrey">
          Upload your audio to Pod with a single click. We'll then distribute your podcast
          to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!
        </Text>
      </Stack>
      <SimpleGrid cols={4} sx={{ alignItems: 'center' }} my={40}>
        <Image src={spotify} alt="spotify" />
        <Image src={applePodcast} alt="apple podcast" />
        <Image src={googlePodcasts} alt="google podcasts" />
        <Image src={pocketCasts} alt="pocket casts" />
      </SimpleGrid>
      <Stack>
        <TextInput placeholder="Email address" />
        <Button>Request Access</Button>
      </Stack>
    </AppShell>
  );
};

export default Home;
