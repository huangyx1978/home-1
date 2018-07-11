import * as React from 'react';
import {observer} from 'mobx-react';
import {Page, nav, User} from 'tonva-tools';
import {store} from '../store';

export interface UserSpanProps {
    userIds: number[];
}

@observer
export class UserSpan extends React.Component<UserSpanProps> {
    render() {
        let {tuid_user} = store.unit.chat;
        return <>{
        this.props.userIds.map(id=> {
            let user:User = tuid_user.getId(id);
            return <small key={id}>
                {user === undefined? id : user.nick || user.name}
            </small>;
        })}
        </>;
    }
}