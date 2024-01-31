import {Text, View} from "react-native";
import {useColorScheme} from "@/components/useColorScheme";

const Profile = () => {

    const colorScheme = useColorScheme();

    return (
        <View>
            <Text>Profile</Text>
        </View>
    );
};

export default Profile;