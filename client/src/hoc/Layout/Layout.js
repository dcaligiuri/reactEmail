import React, {Component} from 'react';


class Layout extends Component {
    render () {
        return (
            <div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </div>
        )
    };
}


export default Layout;