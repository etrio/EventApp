import {
    ActivityIndicator,
    FlatList,
    Image,
    ListRenderItem,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {Text, View} from '@/components/Themed';
import {useEffect, useState} from "react";
import {Post} from "@/types/Post";
import Colors from "@/constants/Colors";
import {useColorScheme} from "@/components/useColorScheme";
import {Entypo} from "@expo/vector-icons";
import dayjs from "dayjs";

const Feed = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const baseUrl = process.env.EXPO_PUBLIC_DATABASE_URL;
    const colorScheme = useColorScheme();

    const fetchData = () => {
        fetch(`${baseUrl}/api/posts`, {
            method: "GET",
        }).then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    }

    if (isLoading) {
        return (
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff"/>
                <Text>Loading...</Text>
            </SafeAreaView>
        )
    }

    const handleRefresh = () => {
        setRefreshing(true);
        fetchData();
        setRefreshing(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const renderRow: ListRenderItem<Post> = ({item}) => (
        <View style={{
            borderBottomWidth: 1,
            borderBottomColor: Colors[colorScheme ?? 'light'].borderColor,
        }}>
            <View style={{marginVertical: 10, marginHorizontal: 10}}>
                <View style={{flexDirection: 'row', marginBottom: 10, justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', gap: 5}}>
                        <Image source={{uri: item.authorImageUrl}} style={{width: 30, height: 30, borderRadius: 30}}/>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 14
                            }}>{item.authorFirstName} {item.authorLastName}</Text>
                            <Text style={{fontWeight: '300', fontSize: 10}}>{dayjs(item.createdAt).format("HH:mm - DD/MM/YYYY")}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => alert('context menu')}>
                    <Entypo name="dots-three-horizontal" size={18} color={Colors[colorScheme ?? 'light'].text} />
                    </TouchableOpacity>
                </View>
                <View style={{width: '100%', flexShrink: 1}}>
                    <View style={{marginBottom: 5}}>
                        <Text style={{fontWeight: '500', fontSize: 16}}>{item.title}</Text>
                        <Text style={{fontWeight: '300'}}>{item.content}</Text>
                    </View>
                    {item.image && (
                        <Image source={{uri: item.image}} style={{width: '100%', minHeight: 300, borderRadius: 10}}/>
                    )}
                </View>
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                renderItem={renderRow}
                data={data}
                refreshing={refreshing}
                onRefresh={handleRefresh}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

export default Feed;