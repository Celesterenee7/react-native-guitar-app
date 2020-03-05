import React from 'react';
import Tab from './Tab';
import { Button, View, Text } from 'react-native';

const TabsList = ({ tabs }) => {
    return (
        <View>
            {
               tabs.map((song) => {
                    return (
                        <Tab 
                            key={song.id} 
                            id={song.id} 
                            title={song.title} 
                            artist={song.artist.nameWithoutThePrefix}
                            tabTypes={song.tabTypes}
                        />
                    );
                })
           }
        </View>
    );
}

export default TabsList;