import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';    

let data = [
    {idNumber: "1", name:"Maria",email:"maria@mail.com",subject:"R", messenger:"mensagem teste" },
    {idNumber: "2", name:"Perdro",email:"perdro@mail.com",subject:"A", messenger:"mensagem teste" },
    {idNumber: "3", name:"Gustavo",email:"gustavo@mail.com",subject:"E", messenger:"mensagem teste" }
]

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
        let style = {
            color: "#777676",
            fontSize: "50px"

        }
        return (
                <div className="row">
                    <h1 style={style}>{this.props.children}</h1>
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
            <button onClick={ this.toggleClick } className={btnClass}> {this.props.children}</button>
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
                    <label htmlFor="subject">Assunto</label>
                    <select defaultValue="R" name="subject" id="subject" className="form-control">
                        <option value="A">Angular</option>
                        <option value="J">Jquery</option>
                        <option value="R">React</option>
                        <option value="E">Ember</option>
                    </select>
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
                    <Title>
                        Teste
                    </Title>
                    <div className="row">
                        <Form/>
                        <Button>Send</Button>  
                    </div>  
                    <div className="row">
                        <List data={data}/>
                    </div>
                </div>
            </myElement>
        );
    }
});

let Contact = React.createClass({
    render: function(){
        return(
            <tr>
                <td scope="row">{this.props.idNumber}</td>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.subject}</td>
                <td>{this.props.children}</td>
            </tr>
        )
    }
})

let List = React.createClass({

    render: function(){
        let contactNodes = this.props.data.map(function(contact){
            return(
                <Contact idNumber={contact.idNumber} name={contact.name} email={contact.email} subject={contact.subject}>
                    {contact.messenger}
                </Contact>
            );
        })
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Assunto</th>
                        <th>Mensagem</th>
                    </tr>
                </thead>
                <tbody>
                    {contactNodes}
                </tbody>
            </table>
        )
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
