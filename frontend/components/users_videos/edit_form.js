import React from 'react';

class EditForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            game: '',
        }
        // this.handleSumbit = this.handleSubmit.bind(this);
    } 

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }




    // handleSubmit(e) {
    //     e.preventDefault();
    //     const stream = Object.assign({}, this.state);
    //     this.props.action(stream).then(this.props.closeModal);
    // }




    render() {

        const loggedoutForm = (

            <div className="login-form-container">

            <div className="modal-greeting"><img className="modal-logo" src={window.twitchUrl} alt="kevinLogo" height="20" width="20"/>Set up your channel!</div>
            <div className="line-break"></div>
            <br/>
                <form>
                    <label>Title <div className="info"></div>
                        <textarea 
                            value=''
                            className="login-input"
                            onChange={(this.update('title'))}
                            maxLength="150">
                        </textarea>
                    </label>

                </form>

            </div>

        );

        const loggedinForm = (


            <div className="login-form-container">

            <div className="modal-greeting"><img className="modal-logo" src={window.twitchUrl} alt="kevinLogo" height="20" width="20"/>Broadcast Options</div>
            <div className="line-break"></div>
            <br/>
                <form>
                    <label>Title <div className="info"></div>
                        <textarea 
                            value={this.state.title}
                            className="login-input"
                            onChange={(this.update('title'))}
                            maxLength="150">
                        </textarea>
                    </label>

                </form>

            </div>

        )

        // let max = 150;
        // let text = document.querySelector('textarea');
        // let info = document.querySelector('#info');

        // info.textContent = max - text.value.length;

        // text.addEventListener('input', () => {
        //     info.textContent = max - this.value.length;
        // })

        return (

            this.props.streams ? loggedinForm : loggedoutForm

        );
    }
}

export default EditForm;