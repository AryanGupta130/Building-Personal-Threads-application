import { Slot } from "expo-router";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { tokenCache } from "../utils/cache"
import { SplashScreen } from "expo-router";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';
import { useEffect } from "react";

const clerkPublishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY
if (!clerkPublishableKey) {
  throw new Error(
    'Missing Publishable Key. Key is not set.'
  )
}

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  useEffect (() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
    }, [fontsLoaded]);
  return <Slot />;
};

export default function RootLayout() {
  return (
    <ClerkProvider 
    publishableKey={clerkPublishableKey!}
    tokenCache={tokenCache}
    >
      <ClerkLoaded> 
        <InitialLayout />
      </ClerkLoaded>
    </ClerkProvider>
  )
}
