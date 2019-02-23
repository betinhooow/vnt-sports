import React, { PureComponent } from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';

export default class PageTitle extends PureComponent{
    render(){
        return(
            <Row>
              <Col md={1} className='fi'><h1>{this.props.title}</h1></Col> 
              <Col md={10}>
                <hr style={{backgroundSize: '4px', borderTop: '4px solid #C7C7C7', borderColor: '#C7C7C7'}} />
              </Col>{/*
              <Col className="text-right" md={3} sm={4}>
                <Button bsStyle="primary btn-block" className="addBtn" onClick={this.onCreate}>
                  <span className="glyphicon glyphicon-plus"/> Adicionar
                </Button>
              </Col>*/}
            </Row> 
        );
    }
}