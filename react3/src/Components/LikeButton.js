import React from 'react';

class LikeButton extends React.Component{
    constructor(props) {
        super(props); // Modify le todo
        /* ToDo: Setze hier den initialen state von liked auf false */

    }

    render = () => {
        if (this.state.liked) {
            return (
                <div>
                    <p>Dir gefällt das.</p>
                </div>
            );
        }
        return (
            <div>
                <button onClick={() => this.setState({ liked: true }) }>
                    Gefällt mir!
                </button>
                <p></p>
            </div>

        );
    }
}

export default LikeButton
