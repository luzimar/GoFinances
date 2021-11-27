import React from 'react';
import { Container, Header, UserWrapper, UserInfo, Photo, User, UserGreeting, UserName, Icon } from './styles';

interface Props {
    title: string;
}

export function Dashboard({ title }: Props) {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/16208974?v=4'}}/>
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Luzimar</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>
            </Header>
        </Container>
    )
}