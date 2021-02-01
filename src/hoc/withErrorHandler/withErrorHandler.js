import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal'
import Auxi from '../Auxi';

const withErrorHandler = (WrapperComponent,axios ) => {
    return class extends Component{
        state = {
            error:null
        }
        errorConfirmedhandler = () => {
            this.setState({error:null});
        }
        componentWillMount(){
            this.reqinterceptor = axios.interceptors.request.use(req => {
                this.setState({error:null});
                return req;
            });
            this.resInterceptors = axios.interceptors.response.use(res => res,error => {
                this.setState({error:error});
            });
        }
        componentWillUnmount(){
            // console.log('will unmount',this.reqinterceptor,this,this.resInterceptors);
            axios.interceptors.request.eject(this.reqinterceptor);
            axios.interceptors.response.eject(this.resInterceptors);

        }
        render () {
            return(
                <Auxi>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedhandler}>
                        {this.state.error ?this.state.error.message:null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Auxi>
            );
        }
    }
}

export default withErrorHandler;