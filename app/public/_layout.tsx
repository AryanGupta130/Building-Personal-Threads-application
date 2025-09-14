import { Stack } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';

const Layout = () => {
    const { isSignedIn } = useAuth();
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: true }} />
        </Stack>
    );
}

export default Layout;