import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import PeopleListItem from "./PeopleListItem";

const PeopleList = (props) => {
    const {people, onPressItem} = props;

    const items = people.map(person => {
        return <PeopleListItem
                    key={person.name.first}
                    person={person}
                    onPressItem={onPressItem}
                />
    });

    return (
        <ScrollView style={styles.container}>
            {items}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff',
    }
});

export default PeopleList;
