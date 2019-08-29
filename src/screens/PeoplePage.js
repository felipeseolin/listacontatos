import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import axios from 'axios';

import PeopleList from "../components/PeopleList";

type Props = {};
export default class PeoplePage extends Component<Props> {

    constructor(props) {
        super(props);

        this.state = {
            people: [],
            loading: true,
            error: false,
        };
    }

    componentDidMount(): void {
        axios
            .get('https://randomuser.me/api?nat=br&results=25')
            .then(res => {
                const {results} = res.data;
                this.setState({people: results, loading: false});
            })
            .catch(error => {
                this.setState({error: true, loading: false});
            });
    }

    renderList() {
        return this.state.people.map(person => <Text key={person.name.first}>{person.name.first}</Text>);
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.loading ?
                        <ActivityIndicator size={"large"} color={"#CBCBCB"}/>
                        :
                        this.state.error ?
                            <Text style={styles.error}>Erro ao carregar lista de contatos...</Text>
                            :
                            <PeopleList
                                people={this.state.people}
                                onPressItem={(parameters) => this.props.navigation.navigate('PersonDetail', parameters)}
                            />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    error: {
        fontSize: 18,
        color: 'red',
        alignSelf: 'center'
    }
});
