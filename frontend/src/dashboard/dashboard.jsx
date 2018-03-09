import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class Dashboard extends Component {

   constructor(props){
      super(props)
   }

    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0.0' />
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}

export default Dashboard