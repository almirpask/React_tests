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
        let  textActive = this.state.click? this.props.textActive : 'Sem texto';
        return(
            <button onClick={ this.toggleClick } className={btnClass}> {textActive} {this.props.title}</button>
        )
    }
})



let Page = React.createClass({
    render: function(){
        return (
            <myElement>
                <Nav title="Teste Props"/>
                <div className="container">
                    <Title title="Teste Props"/>
                    <div className="row">
                        <Button title="Teste Props" textActive="Ativo"/>
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
