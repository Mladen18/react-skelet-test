import { SinglePost } from 'pages/post';
import { Posts } from 'pages/posts';
import { FC } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { GuestRoute } from 'shared/components/GuestRoute';
import { RoutesEnum } from 'shared/enums/RoutesEnum';
import './App.scss';

const App: FC = () => {
    const propMessage = 'Hello from ';
    return (
        <Router>
            <Switch>
                <GuestRoute
                    exact
                    path={RoutesEnum.POSTS}
                    render={() => (
                        <Posts message={propMessage} compName={'Posts'} />
                    )}
                />
                <GuestRoute
                    exact
                    path={RoutesEnum.POST}
                    render={() => (
                        <SinglePost
                            message={propMessage}
                            compNanme={'Single Post'}
                        />
                    )}
                />
                <GuestRoute path={RoutesEnum.NOT_FOUND}>
                    <Redirect to="/posts" />
                </GuestRoute>
            </Switch>
        </Router>
    );
};

export default App;
