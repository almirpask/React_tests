import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';    

let Nav = React.createClass({
    render:function(){
        return (
            <nav className="nav navbar-default"> 
                <div className="container">
                    <div className="navbar-header">
                        <a href="#" className="navbar-brand">
                            {this.props.title}
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
});

let Title = React.createClass({
    render:function(){
        return (
                <div className="row">
                    <h1>{this.props.title}</h1>
                </div>
        )
    }
})

let Button = React.createClass({

    getInitialState: function(){
        return {
            click: false
            
        }
    },
    toggleClick: function (){
        this.setState({
            click: !this.state.click
        })
    },
    render:function(){
        let  btnClass = this.state.click? 'btn btn-success' : 'btn btn-default';
        let  textActive = this.state.click? 'Enviado!' : this.props.textActive;
        return(
            <button onClick={ this.toggleClick } className={btnClass}> {textActive}</button>
        )
    }
})

let Form = React.createClass({
    render: function(){
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="nome" className="form-control"/>
                </div>
                 <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control"/>
                </div>
                 <div className="form-group">
                    <label htmlFor="messenger">Messenger</label>
                    <textarea name="" id="messenger" cols="30" rows="3" className="form-control"></textarea>
                </div>
            </form>
        )
    }
});


let Page = React.createClass({
    render: function(){
        return (
            <myElement>
                <Nav title="Teste Props"/>
                <div className="container">
                    <Title title="Teste Props"/>
                    <div className="row">
                        <Form/>
                        <Button textActive="Send"/>
                    </div>  
                </div>
            </myElement>
        );
    }
});
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(
//    
//    document.getElementById('root')
//);
//
//ReactDOM.render(
//    
//    document.getElementById('title')
//);
//
//ReactDOM.render(
//    
//    document.getElementById('button')
//);

ReactDOM.render(
    <Page/>,
    document.getElementById('page')
);
registerServiceWorker();
