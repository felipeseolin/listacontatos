import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

import Header from './src/components/Header';
import PeopleList from './src/components/PeopleList';

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);

        this.state = {
            people: []
        };
    }

    componentDidMount(): void {
        axios
            .get('https://randomuser.me/api?nat=br&results=5')
            .then(res => {
                const {results} = res.data;
                this.setState({people: results});
            });
    }

    renderList() {
        return this.state.people.map(person => <Text key={person.name.first}>{person.name.first}</Text>);
    }

    render() {
        return (
            <View>
                <Header label={'Contatos'}/>
                <PeopleList people={this.state.people} />
                {/*{this.renderList()}*/}
            </View>
        );
    }
}
