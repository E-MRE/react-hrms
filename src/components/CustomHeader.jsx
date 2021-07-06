import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

export default function CustomHeader({title, icon}) {
    return (
        <Header as="h2" icon textAlign="center" style={{ marginBottom: "2em" }}>
        <Icon name={icon} circular />
        <Header.Content>{title}</Header.Content>
      </Header>
    )
}
