import React from 'react'
import { SafeAreaView, FlatList, TouchableOpacity, Touchable } from "react-native"
import Post from '../component/Post'
import Image1 from '../../assets/beat.jpg'
import Image2 from '../../assets/clay.jpg'
import Image3 from '../../assets/splash.jpg'
import Image4 from '../../assets/youp.jpg'



export default function BlogPost({ navigation }) {
    const blog = [
        { imgUrl: Image1, writer: 'Akuapem Polo', time: '9', header: "Two Arkansas firemen, Vince and Don, get hold of a map" },
        { imgUrl: Image2, writer: 'Kofi Kwabota', time: '5', header: 'They caught me sliding on the E-Way with the heat' },
        { imgUrl: Image3, writer: 'Ameyaw Debrah', time: '3', header: 'Purple Iphone this Summer?' },
        { imgUrl: Image4, writer: 'Annelle Oye', time: '14', header: 'Remember the Name "EMINEM"' }
    ];




    return (
        <SafeAreaView>

            <FlatList
                data={blog}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => { navigation.navigate('Movie Review', { newAuthor: item.writer, newTime: item.time, newTitle: item.header, newPhoto: item.imgUrl }) }}><Post
                        author={item.writer}
                        duration={item.time}
                        photo={item.imgUrl}
                        title={item.header}
                    /></TouchableOpacity>
                }}
                keyExtractor={(item) => item.time}
            />
        </SafeAreaView>
    )
}

